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

  /**
   * Attach baseURl to all Menu items
   * */
  rebaseMenu: (baseUrl: string, menu: IMenuItem[]): IMenuItem[] => {
    return menu?.map((menuItem) => ({
      ...menuItem,
      ...(menuItem.target
        ? {
            target:
              baseUrl === "/" ? menuItem.target : baseUrl + menuItem.target,
          }
        : {}),
      ...(menuItem.children?.length
        ? {
            children: menuItem.children?.map((subMenuItem) => ({
              ...subMenuItem,
              target:
                baseUrl === "/" ? subMenuItem.target : baseUrl + subMenuItem.target,
            })),
          }
        : {}),
    }));
  },
};

export default CommonUtils;
