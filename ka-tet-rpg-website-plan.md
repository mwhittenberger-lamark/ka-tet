# Ka-Tet RPG Website Plan

## Purpose

Build a website that acts as the source of truth for **Ka-Tet: The Path of the Beam**, supporting three audiences:

1. **New players** who need to understand the game quickly before a demo or first session.
2. **Active players** who need fast access to rules, character options, lore, sheets, and campaign-safe references.
3. **The GM** who needs deeper adventure tools, spoilers, NPC secrets, campaign structure, and module content.

The site should feel like a polished tabletop RPG product site combined with a living campaign wiki.

## Core Positioning

Public-facing positioning should describe the project as a fan-made tabletop RPG and campaign resource inspired by dark western fantasy, cosmic horror, broken worlds, and fate-bound heroes.

Avoid public copy that implies official licensing or commercial affiliation with Stephen King, The Dark Tower, or any related rights holder. If the site is public, use cautious language such as:

> Ka-Tet: The Path of the Beam is a fan-made tabletop RPG and campaign resource for private play. It blends weird western fantasy, cosmic horror, post-apocalyptic travel, fate-bound heroes, and worlds connected by impossible doors.

Private/GM-only sections can be more explicit for home campaign use.

## Site Goals

### Primary Goals

- Explain the game in under five minutes.
- Make it easy for a new player to join a demo with no prior reading.
- Provide a clean rules reference during play.
- Present the archetypes/classes in a browsable way.
- Host player-safe campaign information.
- Host GM-only campaign and module material behind spoiler protection.
- Store all major NPCs, pre-generated characters, quotes, maps, downloads, and adventure notes.

### Secondary Goals

- Help recruit new local players.
- Provide a demo one-shot landing page.
- Allow future expansion into a full campaign wiki.
- Make rules/content easy to update as the system evolves.
- Let an AI coder or future developer implement the site from structured Markdown/content files.

## Recommended Tech Stack

The project can be built with any modern static or hybrid framework. Recommended options:

### Option A: Astro

Best if the site is mostly content-driven.

- Astro
- Markdown/MDX content collections
- Static generation
- Optional Netlify/Vercel hosting
- Easy content authoring

### Option B: Next.js

Best if the site will eventually include logins, protected GM areas, dynamic tools, or database-backed content.

- Next.js App Router
- MDX for content
- JSON/YAML content files
- Tailwind CSS
- Optional Supabase/Auth.js for GM login

### Option C: WordPress Headless or Standard WordPress

Best if the GM wants a CMS UI instead of editing Markdown.

- Custom post types for Archetypes, NPCs, Adventures, Rules, Downloads
- ACF fields
- Optional front-end theme or headless frontend

## Preferred Implementation for MVP

Use **Astro or Next.js with MDX**.

Why:

- The project is content-heavy.
- Markdown files are easy for AI and humans to edit.
- Page structure can be generated from frontmatter.
- No database is required for MVP.
- GM-only content can initially be protected by obscured routes, build flags, or simple password protection depending on deployment.

## Information Architecture

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
/campaigns/johnny-minor/player-guide
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

## Navigation

Use clear navigation labels first. Add flavor through subheadings, icons, cards, and page headers rather than making the main nav hard to understand.

### Main Navigation

- Start Here
- Player Guide
- Rules
- Lore
- Campaigns
- Adventures
- Characters
- Downloads
- Join a Game

### GM Navigation

- GM Dashboard
- Johnny Minor Campaign
- Adventure Library
- NPC Secrets
- Encounter Tools
- Session Tools
- Spoiler Index

## Visual Direction

### Overall Feel

Dead western + cosmic horror + old music archive.

The site should feel like a recovered field manual from a world that has moved on: worn paper, dust, cracked ink, old photographs, roses, revolver chambers, cassette static, train lines, doors, and Beam diagrams.

### Color Palette

Use a restrained palette:

- **Bone White**: backgrounds and readable panels
- **Dust Tan**: page sections, parchment cards
- **Gunmetal**: navigation, dark sections, borders
- **Rose Red**: primary accent, warnings, active states
- **Old Gold**: relics, callouts, important lore
- **Blackened Crimson**: GM-only/spoiler areas

### Typography

- Heading font: western serif, old print, or literary gothic style.
- Body font: highly readable modern serif or sans-serif.
- UI font: clean sans-serif.

Do not sacrifice readability for theme.

### Motifs

- Doors
- Roses
- Revolver cylinders
- Beam lines
- Static bands
- Torn pages
- Red eye sigils in GM-only sections
- Old map fragments
- Song lyric/staff line textures

## Content Safety and Spoiler Strategy

### Public Content

Public pages should be safe for prospective players. They can describe tone, rules, archetypes, basic lore, and spoiler-light campaign premise.

### Player-Safe Campaign Content

Player pages may reveal:

- Johnny Minor is the campaign's central figure.
- The ka-tet is called across worlds.
- The Tower and Beams are threatened.
- The campaign involves faith, doubt, music, fate, and difficult choices.

Player pages should not reveal:

- Johnny orders Yoko killed.
- Lady Lux and Kaitlyn die at the end of Act II.
- Jah'kaan is a corrupted Johnny echo.
- Dusty is an off-cycle Johnny.
- The exact endgame choices.
- The purpose of the Black Twin.
- The closed loop with Rook.

### GM-Only Content

GM-only pages may include the full campaign truth, hidden NPC agendas, Act II deaths, Yoko's murder, Jah'kaan, Dusty, Black Twin secrets, Todash horror convergence, and endgame paths.

Use a visible spoiler banner on all GM pages:

> GM ONLY — The Red Watches. This page contains campaign spoilers.

## MVP Scope

The first launch should include only the pages needed to recruit and run a demo.

### MVP Pages

1. Homepage
2. Start Here
3. Player Quickstart
4. Archetype Overview
5. Core Rules Overview
6. Ka Points
7. Pre-Generated Characters
8. Johnny Minor Player-Safe Campaign Page
9. Demo One-Shot Page
10. Downloads
11. Join a Game
12. GM Dashboard placeholder

### MVP Downloads

- Player Quickstart PDF
- Character Sheet PDF
- Pre-Generated Character Pack
- Rules Cheat Sheet
- Ka Point Cards
- Demo One-Shot Packet

## Phase 2 Scope

- Full archetype pages
- Full rules reference
- Lore encyclopedia
- NPC codex
- Adventure library
- Rose Creek module page
- Johnny Minor GM campaign hub
- Session recap templates
- GM tools

## Phase 3 Scope

- Search
- Tag filters
- Interactive NPC relationship map
- Encounter builder
- Random thinny generator
- Printable GM screen
- Session log archive
- Player account or GM login
- Integrated campaign timeline

## Content Collections

The developer should structure content as collections. Recommended collections:

```text
/content/pages
/content/rules
/content/archetypes
/content/lore
/content/campaigns
/content/adventures
/content/npcs
/content/pregens
/content/downloads
/content/gm-tools
```

## Global Content Types

### Page Frontmatter

```yaml
title: "Start Here"
subtitle: "A new player's guide to Ka-Tet: The Path of the Beam"
description: "Learn the tone, premise, core terms, and basic expectations before your first session."
audience: "public" # public | player | gm
spoiler_level: "none" # none | light | major
section: "start"
order: 1
featured: true
```

### Rule Frontmatter

```yaml
title: "Ka Points"
slug: "ka-points"
category: "Core Rules"
audience: "player"
spoiler_level: "none"
summary: "A limited fate resource players spend to reroll, survive catastrophe, find clues, and act heroically."
related:
  - "ka"
  - "ka-tet-bonds"
  - "dark-ka"
```

### Archetype Frontmatter

```yaml
title: "Gunslinger"
slug: "gunslinger"
summary: "A mythic revolver knight, duelist, protector, and remnant of a fallen order."
primary_stats:
  - Dexterity
  - Wisdom
narrative_role: "Protector, duelist, leader, frontier knight"
complexity: "Medium"
audience: "player"
spoiler_level: "none"
```

### NPC Frontmatter

```yaml
title: "Johnny Minor"
slug: "johnny-minor"
role: "Dinh, prophet, singer, campaign catalyst"
audience: "player" # Use separate gm page for secrets
spoiler_level: "light"
alignment: "Uncertain"
first_appearance: "Act I"
tags:
  - johnny-minor-campaign
  - singer
  - prophet
  - ka
image: "/images/npcs/johnny-minor-old.png"
```

### Adventure Frontmatter

```yaml
title: "Rose Creek: The Way of Dust and Fire"
slug: "rose-creek-way-of-dust-and-fire"
level_range: "5"
runtime: "3-5 sessions"
tone: "Beam-touched Western / High Emotional Fantasy"
audience: "gm"
spoiler_level: "major"
campaign: "johnny-minor"
act: "Act II"
tags:
  - rose-creek
  - marietta
  - beam-singer
  - western
```

## Component Requirements

### Required Global Components

- Header / Navigation
- Mobile navigation
- Footer
- Hero banner
- Thematic card grid
- Content sidebar / table of contents
- Spoiler warning banner
- Public/Player/GM badge
- Quote callout
- Rule callout
- Download card
- NPC card
- Archetype card
- Adventure card
- Campaign act timeline
- Glossary tooltip or glossary link
- Search box, Phase 2+

### Optional Components

- Audio toggle for ambient hum/static, never autoplay
- Campaign relationship map
- Random table renderer
- Dice notation component
- Printable page button
- Copy link to heading

## Accessibility Requirements

- All text must pass contrast guidelines.
- Avoid tiny stylized fonts for body content.
- Every image requires alt text.
- Do not rely on color alone to convey warnings/spoilers.
- Provide reduced-motion support.
- Do not autoplay audio or animation.
- Ensure mobile usability.

## SEO / Metadata

Every public page should include:

- Title
- Description
- Open Graph image
- Canonical URL
- Social sharing metadata

Example title format:

```text
Ka-Tet RPG | Start Here
Ka-Tet RPG | Gunslinger Archetype
Ka-Tet RPG | Johnny Minor Campaign
```

## Homepage Content Draft

### Hero

**Headline**

Ka-Tet: The Path of the Beam

**Subheadline**

A fan-made tabletop RPG of gunslingers, haunted doors, dying worlds, psychic songs, and ka-tets bound by fate.

**Primary CTA**

Start Here

**Secondary CTA**

Join a Demo Game

### Pitch Block

You are not adventurers looking for treasure. You are a ka-tet: one made from many, drawn across worlds by ka to protect the Beams, face the Red, and decide whether destiny can be broken.

### Feature Cards

1. **Learn the Game** — Rules, archetypes, Ka Points, and character creation.
2. **Walk the Beam** — Lore for Mid-World, thinnies, Todash, the White, and the Red.
3. **Join the Tet** — Pre-generated characters and demo sessions for new players.
4. **Run the Campaign** — GM tools, adventures, NPCs, and campaign arcs.

### Tone Block

This is a game of dust, prophecy, old songs, hard choices, and worlds that have moved on. It blends dark western fantasy, post-apocalyptic travel, cosmic horror, and character-driven tragedy.

### Demo Block

New to the game? Join a cinematic 3-4 hour demo session with pre-generated characters, fast rules, strange doors, dangerous choices, and a ka-tet formed under pressure.

## Start Here Page Content Draft

### Title

Start Here

### Subtitle

Everything a new player needs before stepping onto the Path of the Beam.

### Section: What Kind of Game Is This?

Ka-Tet: The Path of the Beam is a tabletop RPG about fate-bound heroes traveling through broken worlds. The tone is weird western, dark fantasy, cosmic horror, post-apocalyptic survival, and tragic heroism.

The party is a ka-tet, a group bound by destiny. The world is dangerous, reality is weakening, and the forces of the Red want the Tower to fall.

### Section: What Do Players Do?

Players create characters from any world, time, or broken reality. Together they:

- Cross thinnies and doors between worlds.
- Fight harriers, mutants, Can-Toi, Taheen, and Prim-born horrors.
- Protect fragile places and people tied to the Beam.
- Spend Ka Points when fate gives them one last chance.
- Face moral choices where victory may still leave scars.
- Decide whether destiny is a path, a prison, or a wheel that can be broken.

### Section: You Do Not Need Prior Lore

New players do not need to have read any source novels or campaign documents. The site and the GM will explain what matters at the table.

### Section: Core Terms

| Term | Meaning |
|---|---|
| Ka | Fate, destiny, the wheel that turns all things. |
| Ka-tet | A group bound together by ka. One made from many. |
| Beam | A cosmic support line holding reality together. |
| Tower | The axis of all worlds. If it falls, reality falls. |
| Thinny | A weak spot between worlds. Dangerous and unstable. |
| Todash | The darkness between realities. Hungry things live there. |
| The White | Creation, hope, protection, resistance to decay. |
| The Red | Corruption, decay, nihilism, the forces trying to break reality. |
| Dinh | Leader of a ka-tet. |
| Khef | Shared breath, shared life-force, spiritual connection. |

## Player Guide Overview Content Draft

### Title

Player Guide

### Subtitle

Rules, character options, and table references for players.

### Sections

1. Character Creation
2. Archetypes
3. Core Rules
4. Ka Points
5. Combat
6. Fear and Madness
7. Travel and Survival
8. Equipment
9. Glossary
10. Downloads

### Player Guide Intro Copy

This guide gives players the tools to create characters, understand the rules, and play confidently without reading the full rulebook. When in doubt, remember the table's core rule: follow the Beam, trust the tet, and make the hard choice true.

## Character Creation Page Content Draft

### Six Steps

1. Choose a concept.
2. Choose an archetype.
3. Assign ability scores.
4. Calculate derived stats.
5. Choose traits, background, and equipment.
6. Define ka, khef, and your bond to the party.

### Ability Scores

| Ability | Use |
|---|---|
| Strength | Physical power, melee damage, lifting, force. |
| Dexterity | Aim, reflexes, stealth, initiative, firearms. |
| Constitution | Grit, endurance, poison, disease, survival. |
| Intelligence | Old tech, lore, reasoning, investigation. |
| Wisdom | Perception, intuition, willpower, the Touch. |
| Charisma | Leadership, persuasion, deception, Voice, presence. |

### Starting Level Guidance

- Level 1: raw origin stories and solo horrors.
- Level 2: beginning of the ka-tet campaign.
- Level 3: stronger demo or convention characters.
- Level 5: experienced heroes, suitable for Rose Creek.

## Archetype Overview Page Content Draft

### Intro

Archetypes are the major character paths in Ka-Tet: The Path of the Beam. Each archetype expresses a different way a person might survive a world that has moved on.

### Archetype Cards

| Archetype | Summary | Good For |
|---|---|---|
| Gunslinger | A mythic revolver knight from a fallen order. | Players who want duels, honor, leadership, and deadly precision. |
| Walker | A traveler who senses doors, thinnies, and paths between worlds. | Players who want mobility, weird travel, and reality-bending tricks. |
| Singer | A voice of harmony, sorrow, command, or destruction. | Players who want support, magic, performance, and emotional power. |
| Tech-Knight | A warrior-engineer wielding relic systems and old-world power. | Players who want armor, gadgets, drones, and lost technology. |
| Demon-Blooded | A survivor touched by the Prim, carrying dangerous inner power. | Players who want corruption, risk, mutation, and raw force. |
| Touch-Bearer | A psychic, seer, empath, or dream-sensitive soul. | Players who want visions, support, mind powers, and fate sense. |
| Hemophage | A blood-bound predator or cursed survivor. | Players who want dark hunger, speed, horror, and monstrous gifts. |
| Protocol Shell | A constructed being with memory, code, and maybe a soul. | Players who want android identity, relic tech, and tactical precision. |
| Tongue of Discord | A cursed speaker whose words twist minds and fate. | Players who want manipulation, fear, glamour, or necromantic speech. |
| Shard-Bound | A fractured self containing many echoes. | Players who want identity drama, shifting personas, and adaptive abilities. |

## Core Rules Overview Content Draft

### Title

Core Rules

### Summary

Ka-Tet uses a familiar d20 foundation. Most uncertain actions are resolved by rolling a d20, adding an ability modifier and proficiency if relevant, and comparing the result to a difficulty class or opposing defense.

### Core Rule Pages

| Page | Purpose |
|---|---|
| Core Rolls | Basic d20 resolution. |
| Ability Scores | What each stat means. |
| Proficiency | When training applies. |
| Ka Points | Fate resource and signature mechanic. |
| Combat | Initiative, actions, attacks, damage. |
| Firearms | Guns, reloads, range, ammunition, relic weapons. |
| Fear and Madness | Horror pressure, Todash stress, psychic strain. |
| Travel and Survival | Journeys, hunger, thirst, hazards, encounters. |
| Rest and Healing | Recovery, grit, downtime. |
| Conditions | Common mechanical states. |
| Spellcasting and Powers | Singer songs, Touch abilities, Demon-Blooded magic, Tech powers. |

## Ka Points Page Content Draft

### Title

Ka Points

### Subtitle

When destiny gives you one more chance.

### Summary

Ka Points are a limited fate resource. They represent ka intervening in small but significant ways. They should feel rare, meaningful, and cinematic.

### Starting Ka

Most characters begin with 1 Ka Point. Some backgrounds, features, or GM awards may grant more. A typical maximum is 3 Ka Points.

### Spending Ka Points

| Cost | Use |
|---|---|
| 1 Ka | Reroll a d20 after seeing the roll but before final consequences are declared. |
| 1 Ka | Ask the GM for a stroke of luck, clue, or useful coincidence. |
| 1 Ka | Take a heroic surge, such as an extra action, if the GM allows. |
| 1 Ka | Stabilize when dying, if appropriate to the tone and moment. |
| 2 Ka | Turn a catastrophic hit into a survivable one. |

### Sharing Ka

A character may give another ka-tet member a Ka Point when the story supports it. This should be tied to khef, loyalty, sacrifice, memory, or shared destiny.

### Earning Ka

The GM may award Ka Points when:

- The party reaches a major milestone.
- A player follows their destiny despite danger.
- A character makes a meaningful sacrifice.
- The ka-tet acts as one.
- A Beam, prophecy, dream, or shared vision strongly shapes the scene.
- A tragic setback gives the party a future chance to answer ka.

### Dark Ka

Dark Ka is an optional GM resource. It represents fate turning against the party, the Red interfering, or the cost of selfish choices. Use sparingly.

## Campaigns Overview Content Draft

### Title

Campaigns

### Subtitle

Long roads, strange doors, and the stories ka refuses to let die.

### Current Campaign

#### Johnny Minor: The Path of the Bloom

Johnny Minor has lived too many lives. Singer, prophet, martyr, liar, savior. Now he gathers a new ka-tet to save the Tower before ka drags him back through the wheel again.

Player-safe campaign themes:

- Faith vs doubt
- Cycles of ka
- Music and Voice as cosmic power
- Found family under pressure
- The cost of prophecy
- The question of whether destiny can be broken

## Johnny Minor Player-Safe Page Draft

### Title

Johnny Minor: The Path of the Bloom

### Subtitle

A campaign of music, fate, broken faith, and the last turn of the wheel.

### Player-Safe Pitch

You felt it in a dream: a rose, a tower, a song breaking at the edge of hearing.

Johnny Minor calls from a dying place between worlds. He has failed before. He knows it. He says this time may be different, because this time ka has not chosen him alone.

It has chosen you.

### Campaign Structure

| Act | Levels | Player-Safe Description |
|---|---:|---|
| Act I: The Chosen of Johnny | 2-4 | The ka-tet forms around Johnny's call and learns what it means to serve the Beam. |
| Act II: The Fire and the Flower | 5-7 | The ka-tet reaches its heroic high point as victory begins to reveal doubt. |
| Act III: Shadow on the Beam | 8-10 | Faith fractures, reality bends, and the past starts answering back. |
| Act IV: The Final Red | 11-12+ | The ka-tet must decide what destiny costs and whether the wheel can be broken. |

### Campaign Expectations

This campaign includes:

- Emotional roleplay
- Weird horror
- Gunfights and western standoffs
- Time and reality distortion
- Moral choices without clean answers
- Strong NPC relationships
- Occasional surreal set pieces
- Consequences that echo across acts

## Demo Page Content Draft

### Title

Play a Demo

### Subtitle

Try Ka-Tet: The Path of the Beam in a cinematic one-shot built for new players.

### What to Expect

A demo session is a 3-4 hour game using pre-generated characters. You will learn the rules as you play. Expect a strange mission, a dangerous crossing, a hard choice, and at least one door that should not open.

### Good Fit

This game may be a good fit if you enjoy:

- Character-driven RPGs
- Horror atmosphere
- Weird westerns
- Cosmic mysteries
- Dramatic choices
- D&D-like rules with custom setting mechanics

### Maybe Not a Fit

This may not be the best fit if you only want tactical combat, dislike horror, avoid emotional stakes, or prefer simple heroic fantasy with clear good and evil.

### Safety Note

The game uses horror, death, cults, psychic pressure, grief, betrayal, and surreal fear. Before play, the table will discuss lines, veils, and tone.

### Signup Form Fields

- Name
- Email
- RPG experience
- Favorite character type
- Comfort with horror: low / medium / high
- Availability
- Interested in: one-shot / campaign / either
- Anything the GM should know

## Downloads Page Content Draft

### Title

Downloads

### Subtitle

Printable tools, sheets, cards, and quick references.

### Download Categories

| Category | Downloads |
|---|---|
| New Player | Player Quickstart, New Player Glossary, Demo Rules |
| Character Tools | Character Sheet, Pre-Generated Characters, Session Zero Worksheet |
| Rules | Ka Points Cheat Sheet, Combat Cheat Sheet, Fear and Madness Cheat Sheet |
| GM Tools | GM Screen, Encounter Sheet, Travel Sheet, Recap Template |
| Cards | Ka Point Cards, Condition Cards, Relic Cards |
| Adventures | Demo One-Shot Packet, Rose Creek Packet, Solo Origin Pack |

## GM Dashboard Draft

### Title

GM Dashboard

### Warning

GM ONLY — The Red Watches. This section contains major campaign spoilers.

### Dashboard Cards

| Card | Purpose |
|---|---|
| Johnny Minor Campaign | Full campaign structure and secrets. |
| Adventure Library | Scene-by-scene modules and encounter notes. |
| NPC Secrets | Hidden agendas, deaths, betrayals, quote guides. |
| Session Tools | Recaps, prep templates, safety tools. |
| Random Tables | Thinnies, dreams, Todash effects, travel events. |
| Timeline | Campaign act structure and milestone tracker. |

## Search and Filtering

Phase 2 should include search across:

- Rules
- Archetypes
- Lore
- NPCs
- Adventures
- Downloads

Filters:

- Audience: Public / Player / GM
- Spoiler Level: None / Light / Major
- Content Type
- Campaign Act
- Level Range
- Tone
- Tags

## Tags to Seed

```yaml
- ka
- ka-tet
- beam
- tower
- todash
- thinny
- red
- white
- gunslinger
- singer
- walker
- touch
- old-tech
- johnny-minor
- rose-creek
- yoko
- rook
- lady-lux
- kaitlyn-graves
- vy-k0
- dusty
- jahkaan
- thunderclap
- lud
- callas
- mid-world
- gm-only
- player-safe
```

## Initial File and Folder Structure

```text
ka-tet-site/
  public/
    images/
      brand/
      npcs/
      archetypes/
      adventures/
      maps/
    downloads/
  src/
    components/
      layout/
      cards/
      callouts/
      navigation/
      content/
    content/
      pages/
      rules/
      archetypes/
      lore/
      campaigns/
      adventures/
      npcs/
      pregens/
      downloads/
      gm-tools/
    styles/
    utils/
  README.md
```

## Build Acceptance Criteria

The MVP is acceptable when:

- A new visitor can understand the game from the homepage and Start Here page.
- A new player can find the quickstart, archetypes, Ka Points, and pre-gens within two clicks.
- The Johnny Minor campaign has a player-safe landing page.
- The demo page clearly explains what to expect and includes a join form or contact CTA.
- GM-only pages are visually marked and not linked casually from player pages.
- The site is mobile-friendly.
- Content is editable through Markdown or MDX.
- Each major content type has reusable frontmatter.
- The visual design supports the weird western/cosmic horror tone without hurting readability.
