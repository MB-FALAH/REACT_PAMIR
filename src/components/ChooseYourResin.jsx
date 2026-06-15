// ./src/components/ChooseYourResin.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import InfoModal from "./InfoModal";

function ChooseYourResin() {
  const { t } = useLanguage();
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <section id="order" className="py-16 bg-contact-bg">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-3">
            {t.orderTitle}
          </h2>
          <p className="text-gray-400 text-sm">{t.orderSubtitle}</p>
        </div>

        {/* Product Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Product Card - Left */}
            <div className="bg-black p-6 rounded-2xl shadow-xl border border-gold/30 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl -mr-24 -mt-24"></div>

              {/* Product Image */}
              <div className="h-72 flex items-center justify-center mb-6 relative z-10">
                <img
                  src="/images/shilajit-4.png"
                  alt="30g Shilajit"
                  className="w-96 h-104 object-contain drop-shadow-xl  transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="text-center relative z-10">
                <h3 className="font-serif text-2xl font-bold text-gold mb-2">
                  {t.cardTitle}
                </h3>
                <p className="text-gold font-bold text-lg mb-5">
                  {t.card1Size}
                </p>

                {/* Features List */}
                <ul className="space-y-2 text-gray-400 mb-6">
                  <li className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span>{t.cardFeat1}</span>
                  </li>
                  <li className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span>{t.cardFeat2}</span>
                  </li>
                  <li className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span>{t.cardFeat3}</span>
                  </li>
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowInfoModal(true)}
                    className="flex-1 bg-gold text-primary py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition border-2 border-gold"
                  >
                    {t.btnInfo}
                  </button>
                  <a
                    href="https://wa.me/971568253269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent text-gold py-3 rounded-lg font-bold text-sm hover:bg-gold hover:text-black transition border-2 border-gold"
                  >
                    {t.btnWhatsappOrder}
                  </a>
                </div>
              </div>
            </div>

            {/* Features Sidebar - Right */}
            <div className="space-y-4">
              <div className="bg-black p-5 rounded-xl shadow-lg border border-gold/20 hover:border-gold transition duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">100%</div>
                  <div className="text-gray-400 text-sm">
                    {t.featureNatural}
                  </div>
                </div>
              </div>

              <div className="bg-black p-5 rounded-xl shadow-lg border border-gold/20 hover:border-gold transition duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold mb-1">Lab</div>
                  <div className="text-gray-400 text-sm">{t.featureLab}</div>
                </div>
              </div>

              <div className="bg-black p-5 rounded-xl shadow-lg border border-gold/20 hover:border-gold transition duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold mb-1">≥65%</div>
                  <div className="text-gray-400 text-sm">{t.featureFulvic}</div>
                </div>
              </div>

              <div className="bg-black p-5 rounded-xl shadow-lg border border-gold/20 hover:border-gold transition duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold mb-1">
                    {t.featurePremium.split(" ")[0]}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {t.featurePremium.split(" ")[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 items-center bg-black px-6 py-4 rounded-xl border border-gold/20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏔️</span>
              <div>
                <div className="text-gold font-bold text-sm">
                  {t.trustMountains}
                </div>
                <div className="text-gray-400 text-xs">{t.trustAltitude}</div>
              </div>
            </div>
            <div className="w-px h-8 bg-gold/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔬</span>
              <div>
                <div className="text-gold font-bold text-sm">{t.trustLab}</div>
                <div className="text-gray-400 text-xs">{t.trustHeavyMetal}</div>
              </div>
            </div>
            <div className="w-px h-8 bg-gold/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📦</span>
              <div>
                <div className="text-gold font-bold text-sm">
                  {t.trustShipping}
                </div>
                <div className="text-gray-400 text-xs">{t.trustDelivery}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
      />
    </section>
  );
}

export default ChooseYourResin;
