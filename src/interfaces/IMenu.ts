export interface IMenuItem {
  title: string;
  target?: string;
  newTab?: boolean;
  hideInFooter?: boolean;
  hideInHeader?: boolean;
  children?: IMenuItem[];
}

export interface IMenuMarkdown {
  menu: IMenuItem[];
}