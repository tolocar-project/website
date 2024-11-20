export interface AcademyPageFrontmatter {
  title?: string;
  order?: number;
  img?: string;
  imgAlt?: string;
  disableComments?: boolean;
  teaser?: string;
}

export interface AcademyPage {
  frontmatter: AcademyPageFrontmatter;
  url: string;
  file: string;
  category?: string;
}

export interface AcademyPageParent extends AcademyPage {
  children?: Array<AcademyPage>;
}
