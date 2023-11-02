// import type { LngLat } from "react-map-gl";

// Files in the file system
export interface IInterventionFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  footerGrey: boolean;
  tags: Array<string>;
  images: Array<string>;
  car: string;
  locationLngLat: [number, number];
  order: number;
  teaser: string;
}

// For Map UI
export type IInterventionPoi = Pick<
  IInterventionFrontmatter,
  "title" | "date" | "locationLngLat"
> & {
  id: string;
  image: string;
  imageFilename?: string;
  url?: string;
  category: string;
};
