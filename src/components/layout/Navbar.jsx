// ./src/components/layout/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-darkGreen/95 backdrop-blur-md py-2" : "bg-primary py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Logo - Left */}
          <div className="flex items-center gap-2">
            <img
              src="./src/assets/logo/shilajit-logo2.png"
              className="w-10 h-10 rounded-full"
              alt="Logo"
            />
            <span className="font-serif text-lg font-bold text-gold whitespace-nowrap">
              {t.brandName}
            </span>
          </div>

          {/* Menu - Center - Links to homepage sections */}
          <nav className="flex justify-center gap-3 lg:gap-5">
            <a
              href="/#home"
              className="text-white hover:text-gold whitespace-nowrap text-sm lg:text-base transition"
            >
              {t.navHome}
            </a>
            <a
              href="/#about"
              className="text-white hover:text-gold whitespace-nowrap text-sm lg:text-base transition"
            >
              {t.navAbout}
            </a>
            <a
              href="/#products"
              className="text-white hover:text-gold whitespace-nowrap text-sm lg:text-base transition"
            >
              {t.navProducts}
            </a>
            <a
              href="/#order"
              className="text-gold font-bold hover:text-yellow-400 whitespace-nowrap text-sm lg:text-base transition"
            >
              {t.orderTitle || "Order Now"}
            </a>
            <a
              href="/#contact"
              className="text-white hover:text-gold whitespace-nowrap text-sm lg:text-base transition"
            >
              {t.navContact}
            </a>
          </nav>

          {/* Language - Right */}
          <div className="flex justify-end">
            <div className="flex items-center gap-1 border border-gold/30 rounded-full px-3 py-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`text-xs font-bold ${
                  language === "en"
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-gold/30">|</span>
              <button
                onClick={() => changeLanguage("da")}
                className={`text-xs font-bold ${
                  language === "da"
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                دری
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="./src/assets/logo/shilajit-logo2.png"
              className="w-10 h-10 rounded-full"
              alt="Logo"
            />
            <span className="font-serif text-sm md:text-lg font-bold text-gold whitespace-nowrap">
              {t.brandName}
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1 border border-gold/30 rounded-full px-2 py-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`text-xs font-bold ${
                  language === "en"
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-gold/30">|</span>
              <button
                onClick={() => changeLanguage("da")}
                className={`text-xs font-bold ${
                  language === "da"
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                دری
              </button>
            </div>

            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
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
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
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
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-darkGreen/95 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="/#home"
              className="text-white hover:text-gold whitespace-nowrap transition"
              onClick={closeMobileMenu}
            >
              {t.navHome}
            </a>
            <a
              href="/#about"
              className="text-white hover:text-gold whitespace-nowrap transition"
              onClick={closeMobileMenu}
            >
              {t.navAbout}
            </a>
            <a
              href="/#products"
              className="text-white hover:text-gold whitespace-nowrap transition"
              onClick={closeMobileMenu}
            >
              {t.navProducts}
            </a>
            <a
              href="/#order"
              className="text-gold font-bold hover:text-yellow-400 whitespace-nowrap transition"
              onClick={closeMobileMenu}
            >
              {t.orderTitle || "Order Now"}
            </a>
            <a
              href="/#contact"
              className="text-white hover:text-gold whitespace-nowrap transition"
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
