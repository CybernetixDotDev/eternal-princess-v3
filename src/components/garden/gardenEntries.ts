export type GardenEntryType =
  | "memory"
  | "photo"
  | "reflection"
  | "letter"
  | "fragment";

export type GardenEntry = {
  id: string;
  title?: string;
  date?: string;
  type: GardenEntryType;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  handwrittenNote?: string;
  tags?: string[];
  featured?: boolean;
};

export const gardenEntries: GardenEntry[] = [
  {
    id: "photograph-i-wanted-to-keep",
    title: "A photograph I wanted to keep",
    type: "photo",
    date: "kept for later",
    image: "/gardenTile.png",
    imageAlt: "A romantic garden portrait kept as a memory.",
    handwrittenNote: "I felt beautiful here.",
    tags: ["Photograph", "Joy", "Princess"],
    featured: true,
  },
  {
    id: "somewhere-i-belonged",
    title: "Somewhere I belonged before I understood why",
    type: "memory",
    excerpt:
      "There are places the body remembers before the mind has language for them. A softer room. A patch of light. A moment where life felt easier, as if belonging had quietly arrived first.",
    tags: ["Memory", "Place", "Becoming"],
  },
  {
    id: "recognise-what-was-there",
    type: "fragment",
    handwrittenNote:
      "Perhaps becoming is sometimes just learning to recognise what was already there.",
    tags: ["Identity", "Reflection"],
  },
  {
    id: "dress-can-hold-a-memory",
    title: "A dress can hold a memory",
    type: "reflection",
    excerpt:
      "Some objects become more than fabric, ribbon or shape. They keep the feeling of an afternoon, the courage it took to be seen, the private little proof that beauty can become a place to return to.",
    tags: ["Fashion", "Reflection", "Milestone"],
  },
  {
    id: "letter-to-the-garden",
    title: "A letter folded between pages",
    type: "letter",
    excerpt:
      "Not everything has to be understood the moment it happens. Some things are pressed gently into the book and allowed to reveal themselves later.",
    handwrittenNote: "come back when the light changes",
    tags: ["Letter", "Memory"],
  },
];
