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