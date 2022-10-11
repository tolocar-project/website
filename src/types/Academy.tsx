export interface AcademyPageFrontmatter {
  title?: string;
  order?: number;
  img?: string;
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
