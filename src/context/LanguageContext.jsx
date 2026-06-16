// ./src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translation/index.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('preferredLang') || 'en';
  });

  // Runs on first load AND every language change
  useEffect(() => {
    localStorage.setItem('preferredLang', language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === 'da' ? 'rtl' : 'ltr';
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
