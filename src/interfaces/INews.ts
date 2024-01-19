export interface INewsItem {
  id?: string;
  image?: string;
  imageFilename?: string;
  target: string;
  newTab?: boolean;
  title?: string;
  description: string;
  order?: number;
  type?: "instagram" | "cta" | "fullImage";
}
