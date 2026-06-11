// ./src/context/LanguageContext.jsx
import { createContext, useContext, useState } from "react";
// Change this line:
import { translations } from "../translation/index.js"; // Add /index.js
/**
 * Language Context for managing translations
 * Provides language state and translation function to all components
 */
const LanguageContext = createContext();

/**
 * Language Provider Component
 * Wraps the app and provides language context to all children
 */
export function LanguageProvider({ children }) {
  // Initialize language from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("preferredLang") || "en";
  });

  /**
   * Change language and persist to localStorage
   * Also updates HTML lang attribute and text direction
   */
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "da" ? "rtl" : "ltr";
  };

  // Get translations for current language
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to access language context
 * Returns current language, changeLanguage function, and translations
 */
export function useLanguage() {
  return useContext(LanguageContext);
}
