# Tech Context

**Technologies Used:** Astro, Tailwind CSS, JavaScript/TypeScript, MDX, Astro-icon, React, react-icons

**Development Setup:** The project uses `bun` as the package manager (based on the `bun.lockb` file). The site is configured to build to a static output with the site URL set to 'https://manuelito.tech' in astro.config.mjs.

**Technical Constraints:** The project is likely constrained by the limitations of static site generation, requiring dynamic functionality to be implemented through client-side JavaScript or external APIs. The RSS feed generation requires a site URL to be specified in the Astro configuration.

**Dependencies:** The `package.json` file lists the project's dependencies, including `@astrojs/*`, `astro`, `astro-icon`, `hamburgers`, `react`, `react-dom`, `react-icons`, and `tailwindcss`. The project also uses custom color definitions (red, pblue, pgreen, ppink, pyellow, ppurlple, pblack, white) in the Tailwind CSS configuration.

**Build Configuration:** The site is configured to build static output with `output: 'static'` in astro.config.mjs. The site URL is set to 'https://manuelito.tech', which is required for proper RSS feed generation and sitemap creation.

**Component Architecture:** The project uses a mix of Astro components and React components. React components from react-icons are used for consistent icon rendering throughout the site. The @astrojs/react integration is used to enable React components in Astro files.
