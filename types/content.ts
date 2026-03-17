export type BookItem = {
  id: number | string;
  title: string;
  arc: string;
  category: string;
  status: string;
  year: string;
  chapters: number;
  summary: string;
  downloadsEnabled?: boolean;
  coverImage?: string;
  featured?: boolean;
  slug?: string;
};

export type DownloadItem = { title: string; format: string; size: string; href: string };
export type TimelineItem = { year: string; title: string; text: string };
export type LoreItem = { title: string; text: string };
export type CategoryItem = { title: string; description: string };
export type UpdateItem = { title: string; tag: string; text: string };
export type AutomationItem = { title: string; text: string };
export type GalleryItem = { id: number | string; title: string; image: string; type: string; caption: string };
