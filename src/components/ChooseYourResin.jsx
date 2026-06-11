import { useLanguage } from "../context/LanguageContext";

function ChooseYourResin() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-contact-bg">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gold mb-4">
            {t.chooseTitle}
          </h2>
          <p className="text-gray-600">{t.chooseSubtitle}</p>
        </div>

        {/* Product Showcase */}
        <div className="max-w-5xl mx-auto bg-bg rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src="./images/30g.png"
                alt="30g Shilajit"
                className="w-56 md:w-72 object-contain"
              />
            </div>

            {/* Product Content */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-lightGold mb-3">
                {t.cardTitle}
              </h3>

              <p className="text-gold font-bold text-lg mb-5">
                {t.card1Size}
              </p>

              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">✓</span>
                  {t.cardFeat1}
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">✓</span>
                  {t.cardFeat2}
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">✓</span>
                  {t.cardFeat3}
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">✓</span>
                  Premium quality from the Pamir Mountains
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Authentic Pamir Mountain Shilajit resin carefully harvested and
                purified to preserve its natural mineral content and traditional
                potency.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-darkGreen transition border border-white">
                  {t.btnInfo}
                </button>

                <a
                  href="https://wa.me/93700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-2 border-gold text-gold px-6 py-3 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
                >
                  {t.btnWhatsappOrder}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">100%</h4>
            <p className="text-sm text-matteBlack">Natural</p>
          </div>

          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">Lab</h4>
            <p className="text-sm text-matteBlack">Tested</p>
          </div>

          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">Rich</h4>
            <p className="text-sm text-matteBlack">Fulvic Acid</p>
          </div>

          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">Premium</h4>
            <p className="text-sm text-matteBlack">Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseYourResin;