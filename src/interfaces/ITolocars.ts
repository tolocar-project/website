export interface ITolocarsFrontmatter {
  title: string;
  subtitle?: string;
  date?: string;
  footerGrey?: boolean;
  tags?: Array<string>;
  operatorIcon?:  "mitost" | "cadus" | "hiww" | "ostriv";
  img?: string;
  order?: number;
}
