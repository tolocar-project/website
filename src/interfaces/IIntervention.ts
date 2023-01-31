import type { LngLat } from "react-map-gl";

export interface IInterventionFrontmatter {
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  footerGrey?: boolean;
  tags?: Array<string>;
  images?: Array<string>;
  car?: string;
  locationLngLat?: [number, number];
}
type IInterventionFrontmatterNoLocation = Omit<
  IInterventionFrontmatter,
  "locationLngLat"
>;

export type IInterventionPoi = Pick<
  IInterventionFrontmatterNoLocation,
  "title" | "date"
> & { image: string; url: string; locationLngLat: LngLat };
