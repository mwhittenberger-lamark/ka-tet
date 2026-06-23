# Ka-Tet Astro Site

Content-first Astro build for **Ka-Tet: The Path of the Beam**. The site is designed to cover:

- a public pitch homepage
- player-facing rules and archetype pages
- player-safe campaign and NPC references
- a darker GM section for spoilers, modules, and tools

## Commands

- `npm install` installs dependencies
- `npm run dev` starts the local Astro dev server
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the built site locally

## Content Structure

The site is driven by Astro content collections in `src/content/`:

- `archetypes`
- `rules`
- `lore`
- `campaigns`
- `adventures`
- `npcs`
- `pregens`
- `downloads`

Collection schemas and loaders live in [src/content.config.ts](/Users/mwhittenberger/PhpstormProjects/ka-tet/src/content.config.ts).

## Notes

- The visual direction follows the planning docs in the project root.
- Download assets in `public/downloads/` are MVP placeholders and can be replaced with PDFs later.
- GM pages are spoiler-marked but not authenticated yet.
