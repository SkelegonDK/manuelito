---
title: 'The 100x Rubber Duck'
description: 'Next level AI assisted development'
icon: "🦆"
pubDate: '2025-02-25'
heroImage: "/src/assets/100x.png"
tags: ['Coding Assistants', 'Agentic AI', 'LLMs', 'Claude', 'Cline', 'MCP']
---

# 100x Rubber Duck

## Epilogue
Since I last talked about my AI-enhanced development workflow A LOT has happened. Too much to be honest. 

For one... Sorry [Claude Projects](https://www.anthropic.com/index/claude), but I stopped using it. (Obviously as I write this Claude Sonnet 3.7 I released 🤣 )
Projects still has value for organizing writing tasks and thoughts, but I can also do that with [ChatGPT](https://openai.com/chatgpt).

For complex programming tasks I'll use OpenAi's [o3-mini](https://platform.openai.com/docs/models/gpt-4), and for deep reasoning tasks. That said, I'm not doing hard engineering most of the time. I'm setting up a frontend, backend and developing some kind of product.

Long story short, most of the time I'm interacting with APIs and API documentation and frontend documentation. 

So, for this reason - I built my own scraper tool. Works great! (on sites you can scrape). It's on my repo as [scrape2markdown](https://github.com/SkelegonDK/scrape2markdown), very easy to run with [Streamlit](https://streamlit.io/).
It will take a list of urls, filter the content and create a markdown file based on the output. GREAT for LLM context tasks.

## Next Level Research

I've had [Perplexity](https://www.perplexity.ai/) on my radar for a VERY long time, but I don't do research in a traditional sense very often, so it never occurred to me that Perplexity would be interesting for development tasks. 

But once I tried the free version, I realized that its ability to cross reference multiple articles AND documentation was actually VERY impressive.

From here, you can do a lot of work and save a lot of double-checking in changing platforms and libraries. Part of the idea here is also informative.
This can help you make tailor-made guides, for **YOUR** specific case, and have it be up to date with the latest standards.

## Next Level Tutoring

Coding agents are FAST and do a lot of work in the background, even as I read most of it. This has two effects: just as talking about something you want to do with a friend can feel very-if not more-rewarding than actually doing the **ACTUAL THING**, the same goes for streams of code generated for you. Why? Because our brains are wired to reward us for the *idea* of progress, even if no real progress is made. Studies show that talking about yourself or your goals activates the brain's mesolimbic dopamine system-the same reward centers triggered by food, sex, or even winning money. This means that simply *thinking* or *talking* about solving a problem can feel as satisfying as actually solving it.

This phenomenon ties into how our brain processes risk and reward. Our emotional brain loves instant gratification, which is why it's so easy to get stuck in a loop of generating ideas or code without actually building anything meaningful. Coding agents like [Cline](https://cline.bot/) or [GitHub Copilot](https://github.com/features/copilot) can either be your best friend or your worst enabler. They're great at grunt work, but if you're not careful, they can lull you into a false sense of mastery. To break this cycle, I've started treating coding agents like a rubber duck on steroids-interrogating their output, challenging myself, and staying involved in the process. This keeps me in the driver's seat and ensures I'm not just outsourcing my critical thinking to an AI.

In short: don't let the dopamine rush of "talking about doing" replace the satisfaction of *actually doing*. Use coding agents wisely-they're powerful tools-but remember that the real growth happens when you wrestle with problems yourself. After all, what's more rewarding than solving something that once felt impossible?

## Getting Real

Now, to execute all of these high-level dev work, we need tools. For me, [Cline](https://cline.bot/) has been invaluable. Even if there are other tools that do similar things or have even more advanced environments, I do like the fact that I'm mostly in control.

Why does control matter? Because I've learned the hard way that BIGGER isn't always BETTER. Take Gemini 2 Flash-huge context window, dirt cheap, lightning fast. It gives you this intoxicating ILLUSION of infinite context. You start dumping your entire codebase in there, feeling like a genius for leveraging all that power.

Then reality hits around the 500k token mark. The model COMPLETELY IMPLODES. Your carefully crafted responses turn into gibberish. The code looks fine at first glance but contains subtle, maddening bugs that waste hours of debugging time. I've been there, staring at my screen at 2AM, wondering why my brilliantly "AI-assisted" architecture suddenly doesn't work.

This is what I mean when I say these tools can be depriving you of the pain-the NECESSARY pain-of actually connecting neurons, solving problems yourself. Sometimes you need to face **A WHOLE LOT OF PROBLEMS** head-on to grow as a developer.

Even with the best LLMs as your copilot (like [Claude](https://www.anthropic.com/index/claude) or [Cursor](https://cursor.so/)), if your codebase is complex enough, not even a 1 million token context will save you. These failures forced me back to the drawing board to THINK like a developer again. And honestly? That mental muscle memory is irreplaceable. Believe me, I've tried to shortcut it-and paid the price.

## Memory

The [Cline extension](https://docs.cline.bot/improving-your-prompting-skills/custom-instructions-library/cline-memory-bank) offers a specific prompt that gives it its own memory system, which I can humbly say was better than mine, and I've embraced with some modifications. This is what I've added to it - behavior. 

```markdown
1.Incremental Task Breakdown
- Always split larger projects into smaller, manageable tasks.
- Tackle one task at a time rather than generating monolithic code blocks.
2.Active Critical Inquiry
- For every design decision or code snippet, ask, "Why is this the best approach?" and "What alternatives did we consider?"
- Be highly critical of your answers - if something feels off, challenge it and refine your reasoning.
3.Reflective Feedback Loop
- After completing each small task, review the output and articulate the rationale behind each choice.
- Provide immediate, constructive feedback on what worked well and what can be improved.
4.Aligned Vision and Communication
- Begin every task with a clear definition of goals and ensure both you and the agent share a common understanding of what's being built.
- Continuously ask clarifying questions to keep your vision aligned with the development process.
5.Best Practices and Incremental Learning
- Follow coding best practices, emphasizing clarity, maintainability, and efficiency for every small task.
- Use each task as a learning opportunity by critically examining your approach and integrating feedback into future tasks.
6.Guided Challenge Mode
- Introduce mini-challenges: after completing a task, ask follow-up questions like, "How would this change in a more complex scenario?" or "What might be the potential pitfalls?"
- Encourage yourself to think critically about each solution and be prepared to iterate based on constructive criticism.
```

## Taking a step back

Agents tend to go on rabbit holes and go off on tasks that are way bigger than their reasoning and, most importantly, their context can handle. This happens because agents are simple brains, and simple brains, like most brains, find talking about doing something just as rewarding, if not more, than actually doing the work of something. Funny enough at the end of a 100x rubber duck you can talk to, sometimes you'll have to go back to talking to yourself and solve the problem. This is why I created a behavioral guide for Cline, that will encourage it, to encourage me to be more involved, hold my hand when necessary and make me better over time while generating better results.

## Next NEXT Level

If you are still reading, thank you for hanging on! 
Now comes the real cadre of this article: **MCP servers**.
[Model Context Protocol (MCP)](https://github.com/anthropic/mcp) was created by Anthropic as their open-source extension platform for agents. They provide tools to do specific tasks and interact with APIs effectively. Clines' new extension store has a curated list, and it also installs and tests the servers for you, to make sure that they are set up correctly. But you can find some resources on the MCP GitHub page.

My favorites are here:
- [Puppeteer](https://www.mcpservers.ai/servers/modelcontextprotocol/Puppeteer): for programmatic browser control
- [Markdownify](https://github.com/zcaceres/markdownify-mcp): for turning page URLs into Markdown
- [Perplexity Search](https://www.perplexity.ai/): Perplexity's search and research capabilities are amazing. 
- [Software Planning](https://glama.ai/mcp/servers/a35c7qc7ie): Very good at keeping Clines in check and not letting go of weird tangents and too-big tasks.
- More to come, probably... Claude 3.7 just released!

## Conclusion

This surge of advanced tooling reminds me of the early jQuery days-when suddenly everything got EASY, then inevitably MORE COMPLEX, then a new framework comes along and the cycle starts again. We're living in the wild west days of AI tooling, and with the right knowledge and determination, you can get VERY far... **with a clear idea.**

But here's the thing: don't deprive yourself of the experience of failing and learning by getting lost in infinite scroll coding machines. The REAL value isn't in having an AI spit out code for you-it's in understanding the underlying concepts and knowing how to express them.

Understanding too little makes you overly reliant on Copilot, Cursor, or Cline. But knowing how to put ideas together, give them a meaningful interface, and most importantly, DEPLOY THEM in a state where they create actual value for humanity-THAT'S what justifies burning through the astronomical computation these models demand.

Your rubber duck has gotten 100x smarter, but at the end of the day, it's still YOU who needs to solve the problem. The duck-even a super-powered AI duck-is just there to listen and occasionally quack back something useful. The magic happens when you combine its intelligence with yours and build something that matters. 