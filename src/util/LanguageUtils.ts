const STORAGE_KEY = "locale";
const DEFAULT_LOCALE = "en";

export const LanguageUtils = {
  /**
   * This function will look for an existing language preference in
   * localStorage. If there is none, it will guess prefered language
   * from Browser settings. If this doesn't work it will use a default
   * value.
   */
  getOrGuessInitialLanguageFromBrowser: function () {
    let preferredLanguage = localStorage.getItem(STORAGE_KEY)?.toLowerCase();
    if (!preferredLanguage) {
      // Try to get preferred language from browser settings
      if (/^uk\b/.test(navigator.language.toLowerCase())) {
        preferredLanguage = "ua";
      } else {
        // Use English as default for unknown language browser settings
        preferredLanguage = DEFAULT_LOCALE;
      }
      localStorage.setItem(STORAGE_KEY, preferredLanguage);
    }
    return preferredLanguage;
  },
  setLanguage: function (newLanguage: string) {
    localStorage.setItem(STORAGE_KEY, newLanguage);
  },
  getLocaleFromUrl: function (url: URL, baseUrl: string) {
    return (
      url?.pathname
        ?.replace(baseUrl, "")
        .split("/")
        .filter(Boolean)[0]
        .toLowerCase() || "en"
    );
  },
};

export default LanguageUtils;
