export interface IInterventionFrontmatter {
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  footerGrey?: boolean;
  tags?: Array<string>;
  images?: Array<string>;
  car?: string;
}

export interface IIntervention {
  frontmatter: IInterventionFrontmatter;
  url: string;
  file: string;
}
