function Navbar() {
  return (
    <header
      id="navbar"
      className="fixed bg-primary w-full top-0 z-50 transition-all duration-300 py-4"
    >
      <div className="container mx-auto  flex justify-between items-center">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2 logo-container">
          <div
            className="w-15 h-15
           flex items-center justify-center"
          >
            <img
              src="./src/assets/logo/shilajit-logo2.png"
              className="rounded-full"
              alt="Pamir Shilajit Logo"
            />
          </div>
        </div>

        {/* CENTER: Desktop Menu */}
        <nav className="hidden md:flex gap-8  items-center">
          <a href="#home" className="text-white hover:text-gold font-medium">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gold font-medium">
            About
          </a>
          <a
            href="#products"
            className="text-white hover:text-gold font-medium"
          >
            Products
          </a>
          <a href="#contact" className="text-white hover:text-gold font-medium">
            Contact
          </a>
        </nav>

        {/* RIGHT: Language + Mobile Button */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-gold/30 rounded-full px-3 py-1">
            <button className="text-xs font-bold text-gold hover:text-white transition">
              EN
            </button>
            <span className="text-gold/30">|</span>
            <button className="text-xs font-bold text-gray-400 hover:text-white transition">
              دری
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="text-white md:hidden focus:outline-none">
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
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className="hidden md:hidden absolute top-full inset-x-0 bg-darkGreen/95 backdrop-blur-md border-t border-gold/20"
      >
        <nav className="flex flex-col p-6 space-y-4">
          <a href="#home" className="text-white hover:text-gold font-medium">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gold font-medium">
            About
          </a>
          <a
            href="#products"
            className="text-white hover:text-gold font-medium"
          >
            Products
          </a>
          <a href="#contact" className="text-white hover:text-gold font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
