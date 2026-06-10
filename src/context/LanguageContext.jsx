import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;

    // optional direction support
    document.documentElement.dir = lang === "da" ? "rtl" : "ltr";
  };

  const translations = {
    en: {
      contactTitle: "Get In Touch",
      contactSubtitle: "Join the Altitude Wellness Circle",
      contactInfoTitle: "Contact Information",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      btnSendMessage: "Send Message",
    },

    da: {
      contactTitle: "با ما در تماس شوید",
      contactSubtitle: "به حلقه سلامت ارتفاعات بپیوندید",
      contactInfoTitle: "اطلاعات تماس",
      formName: "نام",
      formEmail: "ایمیل",
      formMessage: "پیام",
      btnSendMessage: "ارسال پیام",
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
};

export const useLanguage = () => useContext(LanguageContext);
