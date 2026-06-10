import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "da" ? "rtl" : "ltr";
  };

  const translations = {
    en: {
      chooseTitle: "Choose Your Resin",
      chooseSubtitle: "100% Raw & Unprocessed • Rich in Fulvic Acid",
    },
    da: {
      chooseTitle: "انتخاب رزین شما",
      chooseSubtitle: "۱۰۰٪ طبیعی و خام • غنی از فولیک اسید",
    },
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
