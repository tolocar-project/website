import React from "react";
import LanguageUtils from "@util/LanguageUtils";

interface LanguageSwitcherProps {
  className?: string;
  baseUrl?: string;
  path?: string;
  locale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  baseUrl = "/",
  path,
  locale,
}) => {
  // Changing the language requires only to change the locale in the URL
  // The rest (slug) will be handled by redirect logic
  const changeLanguage = (newLanguage: string) => {
    LanguageUtils.setLanguage(newLanguage);
    const pathWithoutBaseUrl = path
      ?.replace(baseUrl, "")
      ?.split("/")
      .filter(Boolean)
      .slice(1)
      .join("/");
    const newLocation = `${baseUrl}${newLanguage}/${pathWithoutBaseUrl}`;

    window.location.pathname = newLocation;
  };

  return (
    <ul className={`flex items-center ${className || ""}`}>
      <LanguageSwitcherItem
        onClick={() => {
          changeLanguage("ua");
        }}
        isSelected={locale === "ua"}
      >
        UA
      </LanguageSwitcherItem>
      <span className="text-base">/</span>
      <LanguageSwitcherItem
        onClick={() => {
          changeLanguage("en");
        }}
        isSelected={locale === "en"}
      >
        EN
      </LanguageSwitcherItem>
    </ul>
  );
};

interface LanguageSwitcherItemProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isSelected?: boolean;
}

const LanguageSwitcherItem: React.FC<LanguageSwitcherItemProps> = ({
  className,
  onClick,
  children,
  isSelected,
}) => {
  return (
    <li
      className={`flex-shrink-0 md:rounded-md overflow-hidden ${
        className || ""
      }`}
    >
      <a
        onClick={isSelected ? undefined : onClick}
        className={`md:hover:text-neutral-800 ${
          isSelected ? "text-neutral-800 font-semibold" : "cursor-pointer font-medium"
        }`}
      >
        <div className="flex text-lg lg:text-base font-inter items-center">
          {children}
        </div>
      </a>
    </li>
  );
};

export default LanguageSwitcher;
