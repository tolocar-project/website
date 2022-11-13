const CommonUtils = {
  /**
   * Return the base URL of the current page with or without trailing slash depending on the given parameter
   */
  getBaseUrl: (removeTrailingSlash?: boolean): string => {
    const baseUrl = import.meta.env.BASE_URL;
    if (removeTrailingSlash) {
      return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    }
    return baseUrl;
  }
};

export default CommonUtils;
