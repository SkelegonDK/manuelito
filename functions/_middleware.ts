// functions/_middleware.ts
import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";
import type { PagesFunction } from '@cloudflare/workers-types';

// Define the type for environment variables
interface Env {
  CONTACT_SUBMISSIONS: KVNamespace;
  TURNSTILE_SECRET_KEY: string;
}

// Define the type for the Turnstile verification response
interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  // Use a more specific type for the static forms plugin if available
  const staticForms = staticFormsPlugin({
    respondWith: async ({ formData, name }) => {
      const { request, env } = context;

      // --- Turnstile validation ---
      const token = formData.get('cf-turnstile-response');
      const ip = request.headers.get('CF-Connecting-IP');

      if (!env.TURNSTILE_SECRET_KEY) {
        console.error("TURNSTILE_SECRET_KEY environment variable not set.");
        return new Response("Server configuration error.", { status: 500 });
      }
      if (!token) {
         console.error("Missing cf-turnstile-response in form data.");
         return new Response("CAPTCHA validation failed. Please try again.", { status: 400 });
      }


      let turnstileOutcome = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            secret: env.TURNSTILE_SECRET_KEY,
            response: token,
            remoteip: ip,
          }),
        }
      );

      const turnstileResult: TurnstileResponse = await turnstileOutcome.json();

      if (!turnstileResult.success) {
        console.error("Turnstile validation failed:", turnstileResult);
        // Return a user-friendly error response
        return new Response(`CAPTCHA validation failed. Please try again. Error codes: ${turnstileResult['error-codes']?.join(', ')}`, { status: 403 });
      }
      console.log("Turnstile validation successful.");

      // --- Turnstile validation passed ---

      // Extract form data
      const email = formData.get('email');
      const message = formData.get('message');
      const subject = formData.get('subject');
      const senderName = formData.get('name'); // Changed from 'name' to avoid conflict with form name

      // Basic validation (consider more robust validation)
      if (!email || !message || !subject || !senderName) {
         console.error("Missing required fields:", { email, message, subject, senderName });
         return new Response("Missing required fields", { status: 400 });
      }

      // Prepare data for KV
      const submissionData = {
        name: senderName,
        email,
        subject,
        message,
        submittedAt: new Date().toISOString(),
        ipAddress: ip, // Store IP for reference
      };

      // Generate unique key
      const kvKey = `submission-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

      try {
        if (!env.CONTACT_SUBMISSIONS) {
           console.error("CONTACT_SUBMISSIONS KV namespace binding not found.");
           return new Response("Server configuration error: KV binding missing.", { status: 500 });
        }
        // Store in KV
        await env.CONTACT_SUBMISSIONS.put(kvKey, JSON.stringify(submissionData));
        console.log(`Stored submission ${kvKey}`);

        // Redirect to a thank-you page on success
        // Ensure /thank-you page exists in your Astro project
        const url = new URL(request.url);
        return Response.redirect(`${url.origin}/thank-you`, 302); // Use 302 for temporary redirect after POST

      } catch (error) {
        console.error("Failed to store submission in KV:", error);
        return new Response("Failed to process your submission. Please try again later.", { status: 500 });
      }
    }
  });

  // Pass the request context to the plugin handler
  return staticForms(context);
};
