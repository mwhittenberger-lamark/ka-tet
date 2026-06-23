import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const featureSchema = z.object({
  name: z.string(),
  level: z.union([z.number(), z.string()]),
  summary: z.string(),
  rules_text: z.string(),
});

const archetypes = defineCollection({
  loader: glob({ base: './src/content/archetypes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    player_fantasy: z.string(),
    primary_stats: z.array(z.string()),
    secondary_stats: z.array(z.string()),
    complexity: z.enum(['Low', 'Medium', 'High']),
    combat_role: z.string(),
    narrative_role: z.string(),
    support_role: z.string(),
    starting_hit_die: z.string(),
    saving_throws: z.array(z.string()),
    recommended_for: z.array(z.string()),
    not_recommended_for: z.array(z.string()),
    core_features: z.array(featureSchema),
    subclasses: z.array(
      z.object({
        name: z.string(),
        summary: z.string(),
        theme: z.string(),
        features: z.array(featureSchema),
      }),
    ),
    starting_equipment: z.array(z.string()),
    sample_concepts: z.array(z.string()),
    related_rules: z.array(z.string()),
    tags: z.array(z.string()),
    audience: z.literal('player'),
    spoiler_level: z.literal('none'),
  }),
});

const rules = defineCollection({
  loader: glob({ base: './src/content/rules', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    summary: z.string(),
    audience: z.literal('player'),
    spoiler_level: z.literal('none'),
    quick_reference: z.array(z.string()),
    examples: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      }),
    ),
    related_rules: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

const lore = defineCollection({
  loader: glob({ base: './src/content/lore', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    audience: z.enum(['public', 'player', 'gm']),
    spoiler_level: z.enum(['none', 'light', 'major']),
    category: z.string(),
    related_lore: z.array(z.string()),
    related_rules: z.array(z.string()),
    related_adventures: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

const campaigns = defineCollection({
  loader: glob({ base: './src/content/campaigns', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    audience: z.enum(['public', 'player', 'gm']),
    spoiler_level: z.enum(['none', 'light', 'major']),
    subtitle: z.string(),
    themes: z.array(z.string()),
    act_outline: z.array(
      z.object({
        title: z.string(),
        summary: z.string(),
      }),
    ),
    what_to_expect: z.array(z.string()),
    character_fit: z.array(z.string()),
    table_expectations: z.array(z.string()),
  }),
});

const adventures = defineCollection({
  loader: glob({ base: './src/content/adventures', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    campaign: z.string(),
    act: z.string(),
    level_range: z.string(),
    runtime: z.string(),
    tone: z.string(),
    audience: z.enum(['player', 'gm']),
    spoiler_level: z.enum(['none', 'light', 'major']),
    summary_player_safe: z.string(),
    summary_gm: z.string(),
    hooks: z.array(z.string()),
    major_npcs: z.array(z.string()),
    locations: z.array(z.string()),
    rewards: z.array(z.string()),
    campaign_echoes: z.array(z.string()),
    tags: z.array(z.string()),
    scenes: z.array(
      z.object({
        number: z.string(),
        title: z.string(),
        purpose: z.string(),
        read_aloud: z.string(),
        gm_notes: z.array(z.string()),
        skill_checks: z.array(
          z.object({
            skill: z.string(),
            dc: z.number(),
            success: z.string(),
            failure: z.string(),
          }),
        ),
        combat: z.string(),
        outcomes: z.array(z.string()),
      }),
    ),
  }),
});

const npcs = defineCollection({
  loader: glob({ base: './src/content/npcs', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    subtitle: z.string(),
    role: z.string(),
    campaign: z.string(),
    first_appearance: z.string(),
    audience: z.enum(['player', 'gm']),
    spoiler_level: z.enum(['none', 'light', 'major']),
    alignment: z.string(),
    archetype: z.string(),
    level: z.union([z.number(), z.string()]),
    image: z.string(),
    alt: z.string(),
    tags: z.array(z.string()),
    public_summary: z.string(),
    gm_summary: z.string(),
    appearance: z.string(),
    personality: z.string(),
    voice: z.string(),
    signature_phrases: z.array(z.string()),
    quotes: z.object({
      calm: z.array(z.string()),
      angry: z.array(z.string()),
      sarcastic: z.array(z.string()),
      vulnerable: z.array(z.string()),
      prophetic: z.array(z.string()),
    }),
    relationships: z.array(
      z.object({
        name: z.string(),
        slug: z.string(),
        relationship: z.string(),
        player_safe: z.boolean(),
        summary: z.string(),
      }),
    ),
    stat_block: z.object({
      defense: z.string(),
      grit: z.string(),
      will: z.string(),
      signature_move: z.string(),
    }),
    campaign_arc: z.string(),
  }),
});

const pregens = defineCollection({
  loader: glob({ base: './src/content/pregens', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    archetype: z.string(),
    level: z.number(),
    complexity: z.enum(['Low', 'Medium', 'High']),
    world_of_origin: z.string(),
    one_line_pitch: z.string(),
    portrait: z.string(),
    alt: z.string(),
    personality: z.string(),
    what_you_are_good_at: z.array(z.string()),
    starting_moves: z.array(z.string()),
    secret: z.string(),
    bond_to_tet: z.string(),
    quote: z.string(),
    sheet_download: z.string(),
    tags: z.array(z.string()),
  }),
});

const downloads = defineCollection({
  loader: glob({ base: './src/content/downloads', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    summary: z.string(),
    file_path: z.string(),
    file_type: z.enum(['pdf', 'docx', 'png', 'zip', 'md']),
    audience: z.enum(['public', 'player', 'gm']),
    spoiler_level: z.enum(['none', 'light', 'major']),
    version: z.string(),
    last_updated: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  archetypes,
  rules,
  lore,
  campaigns,
  adventures,
  npcs,
  pregens,
  downloads,
};
