export interface IMenuItem {
  title: string;
  target: string;
  hideInFooter?: boolean;
  hideInHeader?: boolean;
}

export interface IMenuMarkdown {
  menu: IMenuItem[];
}