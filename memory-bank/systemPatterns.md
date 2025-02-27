# System Patterns

**System Architecture:** The project follows a component-based architecture, typical of Astro projects. The main page (`index.astro`) imports and uses various components like `Header`, `Hero`, `WhatIDo`, and `Footer`.

**Key Technical Decisions:** Using Astro for static site generation, Tailwind CSS for styling, and Markdown/MDX for content.

**Design Patterns in Use:** Component-based design, layout components, and potentially some form of content management using Astro's content collections.

**Component Relationships:** `index.astro` acts as the main layout, importing and orchestrating other components. `Header`, `Hero`, `WhatIDo`, and `Footer` provide the structure and content for the homepage. The `Button` component is a reusable component for styling buttons and is currently used in the `Hero` component.
