import type { BookItem } from "@/types/content";

export const books: BookItem[] = [
  {
    id: 1,
    slug: "book-1",
    title: "The Astryx Concord Saga: Book I",
    arc: "Foundations Arc",
    category: "Saga Novel",
    status: "Completed",
    year: "2026",
    chapters: 18,
    coverImage: "/images/cover-placeholder.jpg",
    featured: true,
    downloadsEnabled: true,
    summary:
      "The opening chapter of the larger universe, introducing the political alliance, rising threats, and the emotional core of the saga.",
  },
  {
    id: 2,
    slug: "book-2",
    title: "The Astryx Concord Saga: Book II",
    arc: "Fox Empire Arc",
    category: "Saga Novel",
    status: "In Progress",
    year: "2026",
    chapters: 12,
    coverImage: "/images/cover-placeholder.jpg",
    featured: false,
    downloadsEnabled: true,
    summary:
      "The saga expands into diplomacy, deeper bonds, and the fragile balance between ceremony, loyalty, and looming war.",
  },
  {
    id: 3,
    slug: "visual-compendium",
    title: "Astryx Visual Compendium",
    arc: "Art Collection",
    category: "Art Book",
    status: "Planned",
    year: "TBD",
    chapters: 8,
    coverImage: "/images/cover-placeholder.jpg",
    featured: false,
    downloadsEnabled: true,
    summary:
      "A premium art book for concept art, character sheets, insignias, world visuals, ships, armor, and ceremonial designs.",
  }
];
