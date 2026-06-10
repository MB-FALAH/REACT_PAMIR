// ./src/components/layout/Footer.jsx

import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-darkGreen text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* First column: Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="./src/assets/logo/shilajit-logo2.png"
                className="w-8 h-8 rounded-full object-cover"
                alt="Logo"
              />
              <span className="font-serif text-lg font-bold text-gold">
                {t.footerBrand}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t.footerDesc}</p>
          </div>

          {/* Second column: Quick links */}
          <div>
            <h4 className="font-bold text-gold mb-4">{t.footerQuickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white">
                  {t.navHome}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  {t.navProducts}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Third column: Customer care */}
          <div>
            <h4 className="font-bold text-gold mb-4">{t.footerCustomerCare}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  {t.footerShipping}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.footerReturns}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.footerPrivacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.footerTerms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.footerLab}
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth column: Newsletter */}
          <div>
            <h4 className="font-bold text-gold mb-4">{t.footerNewsletter}</h4>
            <p className="text-sm text-gray-400 mb-4">{t.footerJoin}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold w-full"
              />
              <button className="w-full bg-gold text-darkGreen px-4 py-2 rounded-lg font-bold hover:bg-lightGold transition">
                {t.footerSubscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/10 pt-8 flex justify-center">
          <p className="text-sm text-gray-400" dir="auto">
            {t.footerCopyright.replace("&copy;", "©")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
