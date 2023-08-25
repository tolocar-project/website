import type { MDXLayoutProps } from "astro";

type RawLayoutProps = {
  title: string;
  footerGrey?: boolean;
  darkNavigation?: boolean;
  teaser?: string;
  img?: string;
  disableComments?: boolean;
  external?: string;
};

type LayoutProps = MDXLayoutProps<RawLayoutProps>;

export type { LayoutProps, RawLayoutProps };
