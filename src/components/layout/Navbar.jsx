// ./src/components/layout/Navbar.jsx

import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-darkGreen/95 backdrop-blur-md py-2" : "bg-primary py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./src/assets/logo/shilajit-logo2.png"
            className="w-10 h-10 rounded-full"
            alt="Logo"
          />
          <span className="font-serif text-lg font-bold text-gold">
            {t.brandName}
          </span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#home"
            className="text-white hover:text-gold"
            onClick={closeMobileMenu}
          >
            {t.navHome}
          </a>
          <a
            href="#about"
            className="text-white hover:text-gold"
            onClick={closeMobileMenu}
          >
            {t.navAbout}
          </a>
          <a
            href="#products"
            className="text-white hover:text-gold"
            onClick={closeMobileMenu}
          >
            {t.navProducts}
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gold"
            onClick={closeMobileMenu}
          >
            {t.navContact}
          </a>
        </nav>

        {/* Language switcher + mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Language buttons */}
          <div className="flex items-center gap-1 border border-gold/30 rounded-full px-3 py-1">
            <button
              onClick={() => changeLanguage("en")}
              className={`text-xs font-bold ${language === "en" ? "text-gold" : "text-gray-400 hover:text-white"}`}
            >
              EN
            </button>
            <span className="text-gold/30">|</span>
            <button
              onClick={() => changeLanguage("da")}
              className={`text-xs font-bold ${language === "da" ? "text-gold" : "text-gray-400 hover:text-white"}`}
            >
              دری
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              // X icon when menu is open
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-darkGreen/95 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="#home"
              className="text-white hover:text-gold"
              onClick={closeMobileMenu}
            >
              {t.navHome}
            </a>
            <a
              href="#about"
              className="text-white hover:text-gold"
              onClick={closeMobileMenu}
            >
              {t.navAbout}
            </a>
            <a
              href="#products"
              className="text-white hover:text-gold"
              onClick={closeMobileMenu}
            >
              {t.navProducts}
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold"
              onClick={closeMobileMenu}
            >
              {t.navContact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
