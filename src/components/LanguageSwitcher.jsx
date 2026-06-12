// ./src/components/LanguageSwitcher.jsx
import { useLanguage } from "../context/LanguageContext";

/**
 * LanguageSwitcher Component
 * Fixed position language toggle buttons
 */
function LanguageSwitcher() {
  const { changeLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-50 flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gold hover:text-primary transition"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("da")}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gold hover:text-primary transition"
      >
        دری
      </button>
    </div>
  );
}

export default LanguageSwitcher;
