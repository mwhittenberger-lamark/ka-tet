# AI Coder Brief: Ka-Tet RPG Website

## Build Objective

Create a content-driven website for **Ka-Tet: The Path of the Beam**, a fan-made tabletop RPG and campaign hub. The website must work as a polished public pitch site, a player rules reference, and a GM source-of-truth archive.

The site should be easy to maintain through Markdown or MDX files and should support expansion into a larger wiki.

## Recommended Framework

Use one of the following:

1. **Astro + MDX** for a static content-first site.
2. **Next.js App Router + MDX** if authentication, search, and dynamic tools are likely soon.

Preferred for MVP: **Astro + MDX** unless the builder wants built-in app-style routes and future auth, in which case use **Next.js**.

## Required Features for MVP

- Responsive site layout
- Markdown/MDX-driven content
- Homepage
- Start Here page
- Player Guide overview
- Character Creation page
- Archetype overview
- Individual archetype template
- Rules overview
- Ka Points page
- Johnny Minor player-safe campaign page
- Pre-generated characters overview
- Downloads page
- Demo page
- Join a Game page with form or contact CTA
- GM dashboard placeholder with spoiler warning

## Required Features for Phase 2

- Lore encyclopedia
- NPC codex
- Adventure library
- GM-only adventure pages
- Search
- Tag filtering
- Campaign act timeline
- Download cards
- Printable styles

## Routes

```text
/
/start-here
/player-guide
/player-guide/character-creation
/player-guide/archetypes
/player-guide/archetypes/[slug]
/player-guide/rules
/player-guide/rules/[slug]
/lore
/lore/[slug]
/campaigns
/campaigns/johnny-minor
/adventures
/adventures/[slug]
/npcs
/npcs/[slug]
/pregens
/pregens/[slug]
/downloads
/demo
/join-a-game
/gm
/gm/campaigns/johnny-minor
/gm/adventures/[slug]
/gm/npcs/[slug]
/gm/tools
```

## Content Collection Folders

```text
src/content/pages
src/content/rules
src/content/archetypes
src/content/lore
src/content/campaigns
src/content/adventures
src/content/npcs
src/content/pregens
src/content/downloads
src/content/gm-tools
```

## Global Layout Requirements

### Header

Desktop nav:

- Start Here
- Player Guide
- Rules
- Lore
- Campaigns
- Adventures
- Characters
- Downloads
- Join a Game

Mobile:

- Collapsible menu
- Clear large tap targets

### Footer

Include:

- Short fan-made project disclaimer
- Navigation links
- Contact or Join a Game link
- Optional version/date text

### Page Layout

Most content pages should use:

- Hero title/subtitle
- Audience/spoiler badge
- Optional table of contents
- Main content column
- Related content cards

GM pages should use darker styling and spoiler warnings.

## Components to Build

### `Hero`

Props:

```ts
type HeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image?: string;
};
```

### `CardGrid`

Used for navigation cards.

```ts
type Card = {
  title: string;
  summary: string;
  href: string;
  icon?: string;
  audience?: 'public' | 'player' | 'gm';
  spoilerLevel?: 'none' | 'light' | 'major';
};
```

### `AudienceBadge`

Shows Public, Player, or GM.

### `SpoilerBanner`

Use on GM pages and major spoiler content.

Text:

> GM ONLY — The Red Watches. This page contains campaign spoilers.

### `QuoteCallout`

Used for NPC quotes and mood-setting text.

Props:

```ts
type QuoteCalloutProps = {
  quote: string;
  attribution?: string;
  variant?: 'normal' | 'dark' | 'red' | 'beam';
};
```

### `RuleCallout`

Used for mechanical quick references.

### `DownloadCard`

Props:

```ts
type DownloadCardProps = {
  title: string;
  summary: string;
  filePath: string;
  fileType: string;
  audience: string;
  spoilerLevel: string;
};
```

### `ArchetypeCard`

Props:

```ts
type ArchetypeCardProps = {
  title: string;
  summary: string;
  primaryStats: string[];
  complexity: string;
  href: string;
};
```

### `NPCCard`

Props:

```ts
type NPCCardProps = {
  title: string;
  role: string;
  summary: string;
  image?: string;
  href: string;
  spoilerLevel: string;
};
```

### `AdventureCard`

Props:

```ts
type AdventureCardProps = {
  title: string;
  levelRange: string;
  tone: string;
  act: string;
  summary: string;
  href: string;
  spoilerLevel: string;
};
```

### `ActTimeline`

Used for Johnny Minor campaign.

Props:

```ts
type Act = {
  title: string;
  levels: string;
  theme: string;
  summary: string;
};
```

## Suggested Styling Tokens

```css
:root {
  --color-bone: #f3ead7;
  --color-dust: #c8ad7f;
  --color-gunmetal: #23282d;
  --color-rose: #9f1d2e;
  --color-old-gold: #b08d3c;
  --color-crimson-dark: #3a0710;
  --color-ink: #161412;
  --color-muted-ink: #5f574f;
}
```

## Theme Requirements

The visual system should suggest:

- Weird western
- Cosmic horror
- Old paper and old songs
- Doors and roses
- Broken reality/static
- Revolver and Beam motifs

Do not over-theme body text. Readability wins.

## Content Rules

### Public Pages

Avoid major campaign spoilers. Avoid implying the project is official.

### Player Pages

Can include light campaign premise and NPC roles, but do not reveal hidden identities, betrayals, deaths, or endgame truths.

### GM Pages

Can include full spoilers. Must be visibly marked.

## Forms

### Join a Game Form

Fields:

```yaml
name: string
email: string
rpg_experience: string
interest: "one-shot" | "campaign" | "either"
availability: string
preferred_play_style: string
comfort_with_horror: "low" | "medium" | "high"
favorite_character_type: string
notes: string
```

Implementation options:

- Netlify Forms
- Formspree
- Google Forms embed
- Custom API route
- Mailto fallback

For MVP, a simple form service is acceptable.

## Search

Phase 2 search should index:

- title
- summary
- tags
- body content
- audience
- spoiler level

Search should allow filters:

- Content type
- Audience
- Spoiler level
- Campaign act
- Level range
- Tags

## Image Assets

Initial NPC images already exist and should be placed under:

```text
public/images/npcs/
```

Suggested filenames:

```text
old-johnny-minor.png
johnny-minor-rockstar.png
lady-lux.png
kaitlyn.png
vy-k0.png
rook-whitetail.png
```

All images need alt text.

## Download Assets

Place downloadable PDFs and packets under:

```text
public/downloads/
```

Recommended initial download filenames:

```text
ka-tet-player-quickstart.pdf
ka-tet-character-sheet.pdf
ka-tet-pregens-pack.pdf
ka-points-cheat-sheet.pdf
combat-cheat-sheet.pdf
fear-madness-cheat-sheet.pdf
demo-one-shot-packet.pdf
```

## Markdown/MDX Example: Rule Page

```mdx
---
title: "Ka Points"
slug: "ka-points"
category: "Signature Mechanics"
summary: "A limited fate resource players spend when destiny gives them one more chance."
audience: "player"
spoiler_level: "none"
tags:
  - ka
  - core-rules
  - fate
---

# Ka Points

Ka Points represent fate intervening in small but meaningful ways.

## Quick Reference

| Cost | Use |
|---|---|
| 1 Ka | Reroll a d20. |
| 1 Ka | Ask the GM for a useful coincidence or clue. |
| 2 Ka | Turn a catastrophe into a survivable result. |

## How to Earn Ka

The GM may award Ka when a character follows destiny, protects the tet, makes a meaningful sacrifice, or reaches a major milestone.
```

## Markdown/MDX Example: NPC Page

```mdx
---
title: "Lady Lux"
slug: "lady-lux"
subtitle: "Blind jazz singer of the Beam"
role: "Singer, guide, emotional anchor"
audience: "player"
spoiler_level: "light"
image: "/images/npcs/lady-lux.png"
alt: "A blind jazz singer with old-world elegance and Beam-touched presence."
tags:
  - lady-lux
  - singer
  - beam
---

# Lady Lux

Lady Lux is a blind jazz singer from 1930s Harlem whose voice can calm madness and resonate with the Beam itself.

## Voice

Warm, musical, steady, with steel beneath the softness.

## Signature Phrases

- "Hush now. The world's listenin'."
- "A song outta tune can still be true."
- "Don't mistake softness for weakness, sugar."
```

## Markdown/MDX Example: Adventure Page

```mdx
---
title: "Rose Creek: The Way of Dust and Fire"
slug: "rose-creek-way-of-dust-and-fire"
campaign: "johnny-minor"
act: "Act II"
level_range: "5"
runtime: "3-5 sessions"
tone: "Beam-touched Western / High Emotional Fantasy"
audience: "gm"
spoiler_level: "major"
tags:
  - rose-creek
  - western
  - beam-singer
---

# Rose Creek: The Way of Dust and Fire

<SpoilerBanner />

## GM Summary

The ka-tet protects Marietta, a singer of the Beam, during a violent attack on Rose Creek.

## Scene List

1. Johnny's Sending
2. Path to the Thinny
3. Crossing the Thinny
4. The Riders Harass the Family
5. Ambush and Arrival of the Circle
6. Circle Judgment
```

## MVP Acceptance Checklist

- [ ] Site builds without errors.
- [ ] Content is stored in Markdown/MDX.
- [ ] Main navigation works on desktop and mobile.
- [ ] Homepage explains the game clearly.
- [ ] Start Here page explains the game for new players.
- [ ] Archetype overview exists.
- [ ] Ka Points page exists.
- [ ] Johnny Minor player-safe page exists and avoids major spoilers.
- [ ] Demo page explains what to expect.
- [ ] Join a Game form or CTA exists.
- [ ] Downloads page exists.
- [ ] GM dashboard exists with spoiler warning.
- [ ] Site is readable and responsive.
- [ ] All images have alt text.
- [ ] Public disclaimer exists in footer.

## Footer Disclaimer Draft

> Ka-Tet: The Path of the Beam is a fan-made tabletop RPG and campaign resource for private play. It is not an official product and is not affiliated with any rights holders of the works that inspired it.

## Final Build Note

The site should feel like a document recovered from a dying world, but it must function like a clean modern reference site. Prioritize clarity, speed, mobile usability, and easy content editing.
