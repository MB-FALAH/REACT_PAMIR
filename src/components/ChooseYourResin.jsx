// ./src/components/ChooseYourResin.jsx
import { useLanguage } from "../context/LanguageContext";

/**
 * ChooseYourResin Component
 * Displays product cards with different sizes and features
 */
function ChooseYourResin() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-contact-bg">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gold mb-4">
            {t.chooseTitle}
          </h2>
          <p className="text-gray-300">{t.chooseSubtitle}</p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 30g Product Card */}
          <div className="bg-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700">
            {/* Product Image */}
            <div className="h-40 flex items-center justify-center mb-6">
              <img
                src="./images/30g.png"
                alt="30g Shilajit"
                className="w-32 h-40 object-contain"
              />
            </div>

            {/* Product Title */}
            <h3 className="font-serif text-2xl font-bold text-gold text-center mb-2">
              {t.cardTitle}
            </h3>

            {/* Product Size */}
            <p className="text-gold font-bold text-lg mb-5 text-center">
              {t.card1Size}
            </p>

            {/* Features List */}
            <ul className="space-y-3 text-gray-300 mb-6">
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
            </ul>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-80 transition border border-white">
                {t.btnInfo}
              </button>
              <a
                href="https://wa.me/93700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gold text-gold px-4 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary transition duration-300 text-center"
              >
                {t.btnWhatsappOrder}
              </a>
            </div>
          </div>

          {/* 60g Product Card - Popular */}
          <div className="bg-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-2 border-gold relative">
            {/* Popular Badge */}
            <div className="absolute top-2 left-2 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-lg">
              {t.badgePopular}
            </div>

            {/* Product Image */}
            <div className="h-40 flex items-center justify-center mb-6">
              <img
                src="./images/60g.png"
                alt="60g Shilajit"
                className="w-32 h-40 object-contain"
              />
            </div>

            {/* Product Title */}
            <h3 className="font-serif text-2xl font-bold text-gold text-center mb-2">
              {t.cardTitle}
            </h3>

            {/* Product Size */}
            <p className="text-gold font-bold text-lg mb-5 text-center">
              {t.card2Size}
            </p>

            {/* Features List */}
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span>
                {t.cardFeat1b}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span>
                {t.cardFeat2}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span>
                {t.cardFeat3}
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-80 transition border border-white">
                {t.btnInfo}
              </button>
              <a
                href="https://wa.me/93700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gold text-gold px-4 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary transition duration-300 text-center"
              >
                {t.btnWhatsappOrder}
              </a>
            </div>
          </div>

          {/* 100g Product Card */}
          <div className="bg-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700">
            {/* Product Image */}
            <div className="h-40 flex items-center justify-center mb-6">
              <img
                src="./images/100g.png"
                alt="100g Shilajit"
                className="w-32 h-40 object-contain"
              />
            </div>

            {/* Product Title */}
            <h3 className="font-serif text-2xl font-bold text-gold text-center mb-2">
              {t.cardTitle}
            </h3>

            {/* Product Size */}
            <p className="text-gold font-bold text-lg mb-5 text-center">
              {t.card3Size}
            </p>

            {/* Features List */}
            <ul className="space-y-3 text-gray-300 mb-6">
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
            </ul>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-80 transition border border-white">
                {t.btnInfo}
              </button>
              <a
                href="https://wa.me/93700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gold text-gold px-4 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary transition duration-300 text-center"
              >
                {t.btnWhatsappOrder}
              </a>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">100%</h4>
            <p className="text-sm text-gray-300">Natural</p>
          </div>

          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">Lab</h4>
            <p className="text-sm text-gray-300">Tested</p>
          </div>

          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">Rich</h4>
            <p className="text-sm text-gray-300">Fulvic Acid</p>
          </div>

          <div className="bg-card p-4 rounded-xl shadow text-center">
            <h4 className="text-gold font-bold mb-1">Premium</h4>
            <p className="text-sm text-gray-300">Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseYourResin;
