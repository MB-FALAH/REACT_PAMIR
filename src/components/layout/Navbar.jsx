function Navbar() {
  return (
    <div>
      <header
        id="navbar"
        className="fixed bg-primary  w-full top-0 z-50 transition-all duration-300 py-4"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a className="flex items-center gap-2 logo-container">
            <div className="w-10 h-10  flex items-center justify-center text-darkGreen font-serif font-bold text-xl">
              <img
                src="./src/assets/logo/shilajit-logo.jfif"
                className="rounded-full"
                alt="Pamir Shilajit Logo"
              />
            </div>
            <span
              className="font-serif text-xl font-bold text-lightGold tracking-wide"
              data-i18n="brandName"
            >
              Pamir Mountain Shilajit
            </span>
          </a>

          {/* <!-- Desktop Menu --> */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#home"
              className="text-white hover:text-gold transition duration-300 font-medium"
              data-i18n="navHome"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gold transition duration-300 font-medium"
              data-i18n="navAbout"
            >
              About
            </a>
            <a
              href="#products"
              className="text-white hover:text-gold transition duration-300 font-medium"
              data-i18n="navProducts"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold transition duration-300 font-medium"
              data-i18n="navContact"
            >
              Contact
            </a>

            {/* <!-- Language Switcher --> */}
            <div className="flex items-center gap-2 border border-gold/30 rounded-full px-3 py-1">
              <button
                id="lang-en"
                className="lang-btn text-xs font-bold text-gold hover:text-white transition"
                data-lang="en"
              >
                EN
              </button>
              <span className="text-gold/30">|</span>
              <button
                id="lang-da"
                className="lang-btn text-xs font-bold text-gray-400 hover:text-white transition"
                data-lang="da"
              >
                دری
              </button>
            </div>
          </nav>

          {/* <!-- Mobile Menu Button --> */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-2 border border-gold/30 rounded-full px-3 py-1">
              <button
                id="lang-en-mobile"
                className="lang-btn text-xs font-bold text-gold"
                data-lang="en"
              >
                EN
              </button>
              <span className="text-gold/30">|</span>
              <button
                id="lang-da-mobile"
                className="lang-btn text-xs font-bold text-gray-400"
                data-lang="da"
              >
                دری
              </button>
            </div>
            <button
              id="mobile-menu-btn"
              className="text-white focus:outline-none"
            >
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* 
      <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="hidden md:hidden absolute top-full inset-x-0 bg-darkGreen/95 backdrop-blur-md border-t border-gold/20"
        >
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="#home"
              className="text-white hover:text-gold transition duration-300 font-medium mobile-link"
              data-i18n="navHome"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gold transition duration-300 font-medium mobile-link"
              data-i18n="navAbout"
            >
              About
            </a>
            <a
              href="#products"
              className="text-white hover:text-gold transition duration-300 font-medium mobile-link"
              data-i18n="navProducts"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold transition duration-300 font-medium mobile-link"
              data-i18n="navContact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
