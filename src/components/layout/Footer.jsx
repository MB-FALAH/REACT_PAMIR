function Footer() {
  return (
    <div>
      <footer className="bg-darkGreen text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-darkGreen font-serif font-bold">
                  <img
                    src="./src/assets/logo/shilajit-logo.jfif"
                    className="rounded-full w-full h-full object-cover"
                    alt="Pamir Shilajit Logo"
                  />
                </div>
                <span
                  className="font-serif text-lg font-bold text-gold"
                  data-i18n="footerBrand"
                >
                  Pamir Mountain
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4" data-i18n="footerDesc">
                Pure Himalayan Resin, Sustainably Sourced from the roof of the
                world.
              </p>
            </div>
            <div>
              <h4
                className="font-bold text-gold mb-4"
                data-i18n="footerQuickLinks"
              >
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition"
                    data-i18n="navHome"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition"
                    data-i18n="navProducts"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition"
                    data-i18n="navAbout"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition"
                    data-i18n="navContact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold text-gold mb-4"
                data-i18n="footerCustomerCare"
              >
                Customer Care
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                    data-i18n="footerShipping"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                    data-i18n="footerReturns"
                  >
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                    data-i18n="footerPrivacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                    data-i18n="footerTerms"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                    data-i18n="footerLab"
                  >
                    Lab Reports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold text-gold mb-4"
                data-i18n="footerNewsletter"
              >
                Newsletter
              </h4>
              <p className="text-sm text-gray-400 mb-4" data-i18n="footerJoin">
                Join the Altitude Wellness Circle
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold w-full"
                />
                <button
                  className="w-full bg-gold text-darkGreen px-4 py-2 rounded-lg font-bold hover:bg-lightGold transition"
                  data-i18n="footerSubscribe"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-darkGreen text-white pt-1 pb-8">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p
            className="text-sm text-gray-400"
            data-i18n="footerCopyright"
            dir="auto"
          >
            &copy; 2026 Pamir Mountain Shilajit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
