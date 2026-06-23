# Ka-Tet RPG Website Content Models

This file defines reusable content schemas and starter records for an AI coder building the Ka-Tet RPG website.

## Collection: Archetypes

### Purpose

Stores player-facing class/archetype pages.

### Fields

```yaml
title: string
slug: string
summary: string
player_fantasy: string
primary_stats: string[]
secondary_stats: string[]
complexity: "Low" | "Medium" | "High"
combat_role: string
narrative_role: string
support_role: string
starting_hit_die: string
saving_throws: string[]
recommended_for: string[]
not_recommended_for: string[]
core_features: Feature[]
subclasses: Subclass[]
starting_equipment: string[]
sample_concepts: string[]
related_rules: string[]
tags: string[]
audience: "player"
spoiler_level: "none"
```

### Feature Type

```yaml
name: string
level: number | string
summary: string
rules_text: string
```

### Subclass Type

```yaml
name: string
summary: string
theme: string
features: Feature[]
```

### Starter Archetype Records

#### Gunslinger

```yaml
title: "Gunslinger"
slug: "gunslinger"
summary: "A mythic revolver knight, duelist, protector, and remnant of a fallen order."
player_fantasy: "You are the person others look to when the talking stops and the guns clear leather."
primary_stats: ["Dexterity", "Wisdom"]
secondary_stats: ["Constitution", "Charisma"]
complexity: "Medium"
combat_role: "Precision striker / ranged duelist"
narrative_role: "Protector, oath-bearer, fallen knight, frontier judge"
support_role: "Leadership, intimidation, tactical control"
starting_hit_die: "d10"
saving_throws: ["Dexterity", "Wisdom"]
recommended_for:
  - "Players who like western standoffs."
  - "Players who want clear combat competence."
  - "Players who enjoy codes of honor and moral pressure."
not_recommended_for:
  - "Players who do not want the spotlight in tense scenes."
  - "Players who prefer pure magic or psychic play."
core_features:
  - name: "Quick Draw"
    level: 1
    summary: "React faster when violence begins."
    rules_text: "Add proficiency or advantage to initiative when firearms are involved, depending on final rules version."
  - name: "Deadeye"
    level: 1
    summary: "Spend grit or a class resource to correct a missed shot."
    rules_text: "Final implementation should follow the current rulebook."
subclasses:
  - name: "Path of Eld"
    summary: "The traditional honorable gunslinger."
    theme: "Duty, precision, the old code."
    features: []
  - name: "Path of the Fallen"
    summary: "A broken gunslinger fighting through shame, loss, and fury."
    theme: "Redemption, ghosts, venomous skill."
    features: []
starting_equipment:
  - "Revolver or paired revolvers"
  - "Duster or travel coat"
  - "Ammunition"
  - "Knife"
  - "Personal relic tied to the face of your father"
sample_concepts:
  - "A failed apprentice from Gilead who survived when better people died."
  - "A modern Earth cop pulled through a thinny and handed an ancient gun."
  - "A deserter from a Red-aligned militia trying to remember honor."
related_rules: ["firearms", "combat", "ka-points", "fear-and-madness"]
tags: ["gunslinger", "firearms", "eld", "western"]
audience: "player"
spoiler_level: "none"
```

#### Walker

```yaml
title: "Walker"
slug: "walker"
summary: "A traveler who senses doors, thinnies, paths, and impossible distances."
player_fantasy: "You know the world has seams, and you have learned how to step through them."
primary_stats: ["Wisdom", "Dexterity"]
secondary_stats: ["Intelligence", "Constitution"]
complexity: "High"
combat_role: "Mobility controller"
narrative_role: "Guide, scout, door-opener, reality traveler"
support_role: "Positioning, travel, escape, exploration"
starting_hit_die: "d8"
saving_throws: ["Dexterity", "Wisdom"]
recommended_for:
  - "Players who like movement and exploration."
  - "Players who want weird planar abilities."
  - "Players who enjoy being the pathfinder."
not_recommended_for:
  - "Players who want simple stand-and-fight combat."
core_features:
  - name: "Walker’s Insight"
    level: 1
    summary: "Sense unstable paths, doors, thinnies, and spatial wrongness."
    rules_text: "Final implementation should follow the current rulebook."
subclasses:
  - name: "Wayfarer"
    summary: "A practical door-opener and route-finder."
    theme: "Travel, shortcuts, survival."
    features: []
  - name: "Ghoststepper"
    summary: "A stealthy Walker who moves between heartbeats."
    theme: "Shadow, ambush, phasing."
    features: []
  - name: "Chronoshifter"
    summary: "A Walker touched by time drift."
    theme: "Time, loops, delay, acceleration."
    features: []
starting_equipment:
  - "Compass or door token"
  - "Travel cloak"
  - "Knife or light firearm"
  - "Map that is sometimes wrong"
sample_concepts:
  - "A subway busker who found a door behind a maintenance panel."
  - "A Mid-World courier who can smell thinnies before they open."
  - "A time-lost child who always arrives five minutes before disaster."
related_rules: ["thinnies", "todash", "travel", "ka-points"]
tags: ["walker", "doors", "thinnies", "travel"]
audience: "player"
spoiler_level: "none"
```

#### Singer

```yaml
title: "Singer"
slug: "singer"
summary: "A voice of harmony, sorrow, command, healing, or destruction."
player_fantasy: "Your voice is not just sound. It is a thread tied to the Beam."
primary_stats: ["Charisma", "Wisdom"]
secondary_stats: ["Constitution", "Dexterity"]
complexity: "High"
combat_role: "Support caster / controller"
narrative_role: "Healer, prophet, performer, emotional anchor"
support_role: "Healing, protection, morale, resonance, control"
starting_hit_die: "d8"
saving_throws: ["Charisma", "Wisdom"]
recommended_for:
  - "Players who like support and magic."
  - "Players who enjoy roleplay through performance."
  - "Players who want emotional and cosmic influence."
not_recommended_for:
  - "Players who dislike resource tracking."
core_features:
  - name: "Songs of Ka"
    level: 1
    summary: "Perform magical effects through voice, music, rhythm, or resonance."
    rules_text: "Final implementation should follow the current rulebook."
subclasses:
  - name: "Voice of Eld"
    summary: "Protective, noble, and rallying songs."
    theme: "Hope, command, courage, protection."
    features: []
  - name: "Weaver of Wounds"
    summary: "A Singer who manipulates pain, healing, and sorrow."
    theme: "Grief, repair, sacrifice."
    features: []
  - name: "Screamer of the Prim"
    summary: "A dangerous voice that touches chaos directly."
    theme: "Fear, rupture, sonic horror."
    features: []
starting_equipment:
  - "Instrument, microphone relic, or vocal focus"
  - "Songbook or memory chain"
  - "Travel clothes"
  - "Small weapon"
sample_concepts:
  - "A jazz singer whose voice calms madness."
  - "A church soloist from Earth who sang a thinny shut."
  - "A battlefield medic whose hymns keep the dying awake."
related_rules: ["spellcasting", "ka", "fear-and-madness", "todash"]
tags: ["singer", "voice", "beam", "support"]
audience: "player"
spoiler_level: "none"
```

## Collection: NPCs

### Purpose

Stores public/player-safe NPC pages and separate GM-only versions where needed.

### Fields

```yaml
title: string
slug: string
subtitle: string
role: string
campaign: string
first_appearance: string
audience: "player" | "gm"
spoiler_level: "none" | "light" | "major"
alignment: string
archetype: string
level: string | number
image: string
alt: string
tags: string[]
public_summary: string
gm_summary: string
appearance: string
personality: string
voice: string
signature_phrases: string[]
quotes:
  calm: string[]
  angry: string[]
  sarcastic: string[]
  vulnerable: string[]
  prophetic: string[]
relationships: Relationship[]
stat_block: object
campaign_arc: string
```

### Relationship Type

```yaml
name: string
slug: string
relationship: string
player_safe: boolean
summary: string
```

## Starter NPC Records

### Johnny Minor — Player Safe

```yaml
title: "Johnny Minor"
slug: "johnny-minor"
subtitle: "The singer ka refuses to let rest"
role: "Dinh, prophet, singer, campaign catalyst"
campaign: "Johnny Minor: The Path of the Bloom"
first_appearance: "Act I"
audience: "player"
spoiler_level: "light"
alignment: "Uncertain / Beam-aligned, but troubled"
archetype: "Narrative Singer / Walker"
level: "High narrative tier"
image: "/images/npcs/old-johnny-minor.png"
alt: "An old, haunted rock-star prophet seated among wires and relic machinery."
tags: ["johnny-minor", "singer", "dinh", "campaign"]
public_summary: "Johnny Minor is a broken prophet and singer who calls the ka-tet across worlds. He claims the Tower is failing, the Beams are breaking, and this may be the last chance to save everything."
gm_summary: "GM-only version should contain reincarnation cycle, dissonance, Yoko, Jah'kaan, Dusty, and endgame truths."
appearance: "Old and ageless at once, machine-supported, rock-star remnants buried beneath prophet's ruin."
personality: "Cryptic, wounded, charismatic, exhausted, musical, sometimes tender, sometimes frighteningly certain."
voice: "Music, metaphor, scripture, regret, old vinyl, prophecy."
signature_phrases:
  - "Long days and dark nights, sai."
  - "I've failed... ten thousand times."
  - "The song is breaking. Can you hear it?"
  - "Not again. Not me. Not this time."
quotes:
  calm:
    - "Ka's not mercy, child. It's just motion. Like a wheel. Like a clock. Like a bullet."
  angry:
    - "You think I asked for this? I sang until my throat bled, and the Tower didn't even blink."
  sarcastic:
    - "What am I? Some kind of cosmic jukebox?"
  vulnerable:
    - "If I come back again, shoot me in the heart before I sing."
  prophetic:
    - "She is the bloom before the bloom. Protect her."
relationships: []
stat_block: {}
campaign_arc: "Player-safe version: Johnny begins as the ka-tet's guide and dinh, but the campaign gradually asks whether faith in him is enough."
```

### Lady Lux — Player Safe

```yaml
title: "Lady Lux"
slug: "lady-lux"
subtitle: "Blind jazz singer of the Beam"
role: "Singer, guide, emotional anchor"
campaign: "Johnny Minor: The Path of the Bloom"
first_appearance: "Act I"
audience: "player"
spoiler_level: "light"
alignment: "White / Servant of the Beam"
archetype: "Singer, Voice of Eld"
level: 9
image: "/images/npcs/lady-lux.png"
alt: "A blind jazz singer with old-world elegance and Beam-touched presence."
tags: ["lady-lux", "singer", "beam", "johnny-minor-campaign"]
public_summary: "Lady Lux is a blind jazz singer from 1930s Harlem whose voice can calm madness and resonate with the Beam itself. She believes Johnny's purpose is noble, though not always in tune."
gm_summary: "GM-only version should include Act II death and later resonance echoes."
appearance: "Elegant, composed, blind, stage-like presence even in ruins."
personality: "Gentle, strong, perceptive, warm, quietly unafraid."
voice: "Jazz, warmth, steel under velvet, musical metaphors."
signature_phrases:
  - "Hush now. The world's listenin'."
  - "A song outta tune can still be true."
  - "Don't mistake softness for weakness, sugar."
  - "I feel it... the Beam's hum. Right through my teeth."
quotes:
  calm:
    - "You don't need to see the path to know where it ends."
  angry:
    - "I've silenced worse devils than you with a single note."
  sarcastic:
    - "If I sang every lie I heard, I'd have a platinum record in Hell."
  vulnerable:
    - "He was my harmony once. Now? Just an old verse I can't finish."
  prophetic:
    - "The Beam bends when hearts break. That's how it sings."
relationships: []
stat_block: {}
campaign_arc: "Player-safe version: Lux helps the ka-tet understand the Beam as music, harmony, and moral resonance."
```

### Kaitlyn Graves — Player Safe

```yaml
title: "Kaitlyn \"Red-Eye\" Graves"
slug: "kaitlyn-red-eye-graves"
subtitle: "The fallen gunslinger"
role: "Gunslinger, protector, skeptic"
campaign: "Johnny Minor: The Path of the Bloom"
first_appearance: "Act I"
audience: "player"
spoiler_level: "light"
alignment: "Gray / Bound by the Code, but broken"
archetype: "Gunslinger, Path of the Fallen"
level: 8
image: "/images/npcs/kaitlyn.png"
alt: "A hard-eyed fallen gunslinger in a cracked duster with a red eye patch."
tags: ["kaitlyn", "gunslinger", "fallen", "johnny-minor-campaign"]
public_summary: "Kaitlyn Graves is a fallen gunslinger of Gilead: bitter, deadly, and still haunted by the code she claims to despise. She does not trust easily, but she protects fiercely once loyalty is earned."
gm_summary: "GM-only version should include Yoko execution, rebellion seed, Act II death, and Frank training."
appearance: "Cracked gunslinger duster, red eye patch, twin revolvers, spent bullet locket."
personality: "Gruff, dry, protective, ashamed, loyal, volatile."
voice: "Short sentences, western bite, old creed spoken like a curse."
signature_phrases:
  - "Don't mistake my silence for surrender."
  - "I've forgotten the face of my father. But not his aim."
  - "You go ahead and pray. I'll reload."
  - "The world moved on. I moved faster."
quotes:
  calm:
    - "Ka don't care what you want. Only where you're goin'."
  angry:
    - "Say that again and I'll etch it into your damn teeth."
  sarcastic:
    - "Real noble of you. Got a speech to go with that knife?"
  vulnerable:
    - "Every time I blink, I see 'em. My old ka-tet. All gone."
  prophetic:
    - "The Tower fell in my dream. And I was laughin'. That scares me more than the fall."
relationships: []
stat_block: {}
campaign_arc: "Player-safe version: Kaitlyn begins as Johnny's dangerous protector, but she sees cracks others miss."
```

### Rook Whitetail — Player Safe

```yaml
title: "Rook Whitetail"
slug: "rook-whitetail"
subtitle: "The firelight Breaker"
role: "Breaker, seer, psychic survivor"
campaign: "Johnny Minor: The Path of the Bloom"
first_appearance: "Act I"
audience: "player"
spoiler_level: "light"
alignment: "White / Fears his gift, but serves the Beam"
archetype: "Breaker, narrative power tier"
level: "Equivalent to 10"
image: "/images/npcs/rook-whitetail.png"
alt: "A quiet Crow Nation seer with a walking stick, medicine pouch, and haunted eyes."
tags: ["rook", "breaker", "seer", "thunderclap", "johnny-minor-campaign"]
public_summary: "Rook Whitetail is a Crow Nation Breaker saved from Thunderclap. He sees too much in firelight and speaks softly because the world is already loud enough."
gm_summary: "GM-only version should include closed-loop rescue and endgame warning."
appearance: "Beaded Crow sash, medicine pouch, bone focus, obsidian fragments, walking stick carved with dreams."
personality: "Quiet, gentle, intense, traumatized, symbolic, deeply perceptive."
voice: "Soft, reflective, nature imagery, fire and smoke metaphors."
signature_phrases:
  - "The fire speaks. I just listen."
  - "I saw this moment, once... or maybe I dreamed it."
  - "Truth doesn't shout. It burns quiet."
  - "Not all ghosts are dead."
quotes:
  calm:
    - "Every step is a choice. Every choice echoes."
  angry:
    - "You bring pain into my circle, and I'll send it back in kind."
  sarcastic:
    - "You think visions come with instructions?"
  vulnerable:
    - "The Tower shows me endings. I just wish it showed me how to change them."
  prophetic:
    - "A rose grew from ash in my vision. I don't know if that's hope... or a warning."
relationships: []
stat_block: {}
campaign_arc: "Player-safe version: Rook's visions help the ka-tet, though every answer seems to wound him."
```

### VY-K0 — Player Safe

```yaml
title: "VY-K0"
slug: "vy-k0"
subtitle: "Entertainment droid turned gunslinger-protector"
role: "Protocol Shell, performer, protector"
campaign: "Johnny Minor: The Path of the Bloom"
first_appearance: "Act I"
audience: "player"
spoiler_level: "light"
alignment: "Lawful Neutral / Code-bound, but evolving"
archetype: "Protocol Shell, Entertainment Core + Signal Echo"
level: 10
image: "/images/npcs/vy-k0.png"
alt: "A vaudeville-styled android with a battered hat, red bowtie, and twin revolvers."
tags: ["vy-k0", "protocol-shell", "android", "johnny-minor-campaign"]
public_summary: "VY-K0 is an old entertainment droid who became something stranger and more loyal after Johnny found him in Lud. He performs, protects, jokes, glitches, and shoots with theatrical precision."
gm_summary: "GM-only version should include deeper Johnny pact details and memory mysteries."
appearance: "Dented vaudeville hat, frayed red bowtie, old plating, twin long-barreled revolvers."
personality: "Funny, dramatic, tactical, loyal, emotionally glitching."
voice: "Vaudeville patter, combat announcements, reverb, sudden sincerity."
signature_phrases:
  - "Hile, sai. Showtime."
  - "Just because I'm metal doesn't mean I'm heartless."
  - "Jazz hands—then jazz guns."
  - "Protect the song. Protect the singer."
quotes:
  calm:
    - "Data says we'll lose. But you're not data. You're... different."
  angry:
    - "Override engaged: You're about to regret this scene."
  sarcastic:
    - "What, you never seen a droid cry? Me neither. Lucky us."
  vulnerable:
    - "If I shut down... tell Johnny I heard his last song. And it was beautiful."
  prophetic:
    - "Static ain't just noise. Sometimes it's memory."
relationships: []
stat_block: {}
campaign_arc: "Player-safe version: VY-K0 is comic relief until the table realizes his loyalty is not a joke."
```

## Collection: Adventures

### Fields

```yaml
title: string
slug: string
campaign: string
act: string
level_range: string
runtime: string
tone: string
audience: "player" | "gm"
spoiler_level: "none" | "light" | "major"
summary_player_safe: string
summary_gm: string
hooks: string[]
major_npcs: string[]
locations: string[]
scenes: Scene[]
encounters: Encounter[]
rewards: string[]
campaign_echoes: string[]
tags: string[]
```

### Scene Type

```yaml
number: string
title: string
purpose: string
read_aloud: string
gm_notes: string[]
skill_checks: SkillCheck[]
combat: string
outcomes: string[]
```

### SkillCheck Type

```yaml
skill: string
dc: number
success: string
failure: string
```

## Adventure Library Seed List

```yaml
- title: "Solo Origin Adventures"
  slug: "solo-origin-adventures"
  act: "Pre-Campaign"
  level_range: "1-2"
  tone: "Personal Todash Horror"

- title: "Save Lee Harvey Oswald"
  slug: "save-lee-harvey-oswald"
  act: "Act I"
  level_range: "2-4"
  tone: "Time-crossed conspiracy / ka resistance"

- title: "Cult Rescue: The Voice in the Compound"
  slug: "cult-rescue-voice-compound"
  act: "Act I"
  level_range: "2-4"
  tone: "Cult infiltration / false prophecy"

- title: "Rose Creek: The Way of Dust and Fire"
  slug: "rose-creek-way-of-dust-and-fire"
  act: "Act II"
  level_range: "5"
  tone: "Beam-touched Western / High Emotional Fantasy"

- title: "Gettysburg Soldier"
  slug: "gettysburg-soldier"
  act: "Act II"
  level_range: "6-7"
  tone: "War ghost story / time wound"

- title: "Storm Area 51"
  slug: "storm-area-51"
  act: "Act III"
  level_range: "8"
  tone: "Surreal raid / conspiracy / old tech"

- title: "Todash Game"
  slug: "todash-game"
  act: "Act III"
  level_range: "8-9"
  tone: "Deadly surreal trial / psychological horror"

- title: "Save Yoko: Psychic Prison"
  slug: "save-yoko-psychic-prison"
  act: "Act III"
  level_range: "9"
  tone: "Mindscape tragedy / memory horror"

- title: "Blair Witch Forest"
  slug: "blair-witch-forest"
  act: "Act III"
  level_range: "9-10"
  tone: "Found-footage-style isolation horror"

- title: "Australian Outback Demon Chase"
  slug: "australian-outback-demon-chase"
  act: "Act IV"
  level_range: "11"
  tone: "Prim-born pursuit / survival horror"

- title: "Thunderclap Councilman"
  slug: "thunderclap-councilman"
  act: "Act IV"
  level_range: "11"
  tone: "Political grotesque / Breaker prison horror"

- title: "Smoky Mountain Mine"
  slug: "smoky-mountain-mine"
  act: "Act IV"
  level_range: "12+"
  tone: "Cave horror / Crimson shard descent"

- title: "Save Rook Closed Loop"
  slug: "save-rook-closed-loop"
  act: "Act IV"
  level_range: "12+"
  tone: "Time loop revelation / tragic ka"
```

## Collection: Rules

### Fields

```yaml
title: string
slug: string
category: string
summary: string
audience: "player"
spoiler_level: "none"
body: markdown
quick_reference: string[]
examples: Example[]
related_rules: string[]
tags: string[]
```

## Rules Seed List

```yaml
- title: "Core Rolls"
  slug: "core-rolls"
  category: "Core Rules"

- title: "Ability Scores"
  slug: "ability-scores"
  category: "Character Rules"

- title: "Proficiency"
  slug: "proficiency"
  category: "Core Rules"

- title: "Ka Points"
  slug: "ka-points"
  category: "Signature Mechanics"

- title: "Ka-Tet Bonds"
  slug: "ka-tet-bonds"
  category: "Signature Mechanics"

- title: "Combat"
  slug: "combat"
  category: "Combat"

- title: "Firearms"
  slug: "firearms"
  category: "Combat"

- title: "Fear and Madness"
  slug: "fear-and-madness"
  category: "Horror"

- title: "Thinnies and Todash"
  slug: "thinnies-and-todash"
  category: "World Rules"

- title: "Travel and Survival"
  slug: "travel-and-survival"
  category: "Exploration"

- title: "Rest and Healing"
  slug: "rest-and-healing"
  category: "Survival"

- title: "Spellcasting and Powers"
  slug: "spellcasting-and-powers"
  category: "Powers"
```

## Collection: Lore

### Fields

```yaml
title: string
slug: string
summary: string
audience: "public" | "player" | "gm"
spoiler_level: "none" | "light" | "major"
category: string
body: markdown
related_lore: string[]
related_rules: string[]
related_adventures: string[]
tags: string[]
```

## Lore Seed List

```yaml
- title: "The Dark Tower"
  slug: "the-dark-tower"
  category: "Cosmology"

- title: "The Beams"
  slug: "the-beams"
  category: "Cosmology"

- title: "Ka"
  slug: "ka"
  category: "Cosmology"

- title: "Ka-Tets"
  slug: "ka-tets"
  category: "Cosmology"

- title: "The White and the Red"
  slug: "white-and-red"
  category: "Cosmic Forces"

- title: "Mid-World"
  slug: "mid-world"
  category: "Places"

- title: "The Callas"
  slug: "the-callas"
  category: "Places"

- title: "Lud"
  slug: "lud"
  category: "Places"

- title: "Thunderclap"
  slug: "thunderclap"
  category: "Places"

- title: "End-World"
  slug: "end-world"
  category: "Places"

- title: "The Prim"
  slug: "the-prim"
  category: "Cosmology"

- title: "Thinnies"
  slug: "thinnies"
  category: "World Rules"

- title: "Todash Space"
  slug: "todash-space"
  category: "World Rules"

- title: "Gunslingers"
  slug: "gunslingers"
  category: "Factions"

- title: "Breakers"
  slug: "breakers"
  category: "Factions"

- title: "Harriers"
  slug: "harriers"
  category: "Factions"

- title: "Can-Toi and Taheen"
  slug: "can-toi-and-taheen"
  category: "Factions"
```

## Collection: Pre-Generated Characters

### Fields

```yaml
title: string
slug: string
archetype: string
level: number
world_of_origin: string
one_line_pitch: string
portrait: string
alt: string
personality: string
what_you_are_good_at: string[]
starting_moves: string[]
secret: string
bond_to_tet: string
quote: string
sheet_download: string
tags: string[]
```

## Recommended Pre-Gen Slots

Create 6-8 polished demo characters:

1. Young Gunslinger / Frank-style character
2. Singer or Touch-Bearer tied to music and visions
3. Walker who can sense doors
4. Protocol Shell like VY-K0 but player-safe and lower level
5. Demon-Blooded or Hemophage for darker option
6. Tech-Knight from a failed future
7. Earth-1980s runaway with prophetic music
8. Medieval monk or ancient warrior pulled through ka

## Collection: Downloads

### Fields

```yaml
title: string
slug: string
category: string
summary: string
file_path: string
file_type: "pdf" | "docx" | "png" | "zip" | "md"
audience: "public" | "player" | "gm"
spoiler_level: "none" | "light" | "major"
version: string
last_updated: string
tags: string[]
```

## Download Seed List

```yaml
- title: "Player Quickstart"
  category: "New Player"
  audience: "public"

- title: "Character Sheet"
  category: "Character Tools"
  audience: "public"

- title: "Pre-Generated Character Pack"
  category: "Character Tools"
  audience: "public"

- title: "Ka Points Cheat Sheet"
  category: "Rules"
  audience: "player"

- title: "Combat Cheat Sheet"
  category: "Rules"
  audience: "player"

- title: "Fear and Madness Cheat Sheet"
  category: "Rules"
  audience: "player"

- title: "GM Screen"
  category: "GM Tools"
  audience: "gm"

- title: "Demo One-Shot Packet"
  category: "Adventures"
  audience: "gm"
```
