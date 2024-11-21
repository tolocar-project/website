import type { IMenuItem } from "@interfaces/IMenu";

const CommonUtils = {
  /**
   * Return the base URL of the current page with or without trailing slash depending on the given parameter
   */
  getBaseUrl: (trailingSlash: boolean = false): string => {
    const baseUrl = import.meta.env.BASE_URL;
    const endsWithSlash = baseUrl.endsWith("/");
    // Add slash
    if (!endsWithSlash && trailingSlash) return baseUrl + "/";
    // Remove slash
    else if (endsWithSlash && !trailingSlash) return baseUrl.slice(0, -1);
    return baseUrl;
  },

  rebaseSingleMenuItem: (item: IMenuItem, baseUrl: string): IMenuItem => {
    let itemWithoutChildren;

    if (item.target?.startsWith("https") || item.target?.startsWith("mailto")) {
      itemWithoutChildren = {
        ...item,
      };
    } else {
      itemWithoutChildren = {
        ...item,
        ...(item.target
          ? {
              target: baseUrl === "/" ? item.target : baseUrl + item.target,
            }
          : {}),
      };
    }

    if (item.children?.length) {
      return {
        ...itemWithoutChildren,
        children: item.children.map((child) =>
          CommonUtils.rebaseSingleMenuItem(child, baseUrl)
        ),
      };
    }
    return itemWithoutChildren;
  },

  /**
   * Attach baseURl to all Menu items
   * */
  rebaseMenu: (baseUrl: string, menu: IMenuItem[]): IMenuItem[] => {
    return menu?.map((menuItem) =>
      CommonUtils.rebaseSingleMenuItem(menuItem, baseUrl)
    );
  },
};

export default CommonUtils;
