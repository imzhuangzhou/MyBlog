import { ValueOf } from "lib/types";

const TAG_SLUGS = {
  All: "all",
  Tech: "tech",
  Music: "music",
  Book: "book",
  Diary: "diary",
  LLM: "llm",
  Agent: "agent",
  PM: "pm",
  VibeCoding: "vibe-coding",
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.Tech]: {
    name: "技术",
    emoji: "💻",
    slug: TAG_SLUGS.Tech,
  },
  [TAG_SLUGS.Music]: {
    name: "音乐",
    emoji: "🎵",
    slug: TAG_SLUGS.Music,
  },
  [TAG_SLUGS.Book]: {
    name: "书籍",
    emoji: "📚",
    slug: TAG_SLUGS.Book,
  },
  [TAG_SLUGS.Diary]: {
    name: "日记",
    emoji: "📝",
    slug: TAG_SLUGS.Diary,
  },
  [TAG_SLUGS.LLM]: {
    name: "LLM",
    emoji: "🤖",
    slug: TAG_SLUGS.LLM,
  },
  [TAG_SLUGS.Agent]: {
    name: "Agent",
    emoji: "🎯",
    slug: TAG_SLUGS.Agent,
  },
  [TAG_SLUGS.PM]: {
    name: "PM",
    emoji: "📊",
    slug: TAG_SLUGS.PM,
  },
  [TAG_SLUGS.VibeCoding]: {
    name: "Vibe Coding",
    emoji: "✨",
    slug: TAG_SLUGS.VibeCoding,
  },
  [TAG_SLUGS.All]: {
    name: "All",
    emoji: "🌴",
    slug: TAG_SLUGS.All,
  },
} as const;

export const isTagSlug = (slug: string): slug is TagSlug =>
  (Object.values(TAG_SLUGS) as string[]).includes(slug);

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
