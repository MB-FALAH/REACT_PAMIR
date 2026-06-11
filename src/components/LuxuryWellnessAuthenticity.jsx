// ./src/components/LuxuryWellnessAuthenticity.jsx

import { useLanguage } from "../context/LanguageContext";

function LuxuryWellnessAuthenticity() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="py-20 bg-contact-bg text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              {t.authTitle}
            </h2>
            <p className="text-gold">{t.authSubtitle}</p>
          </div>

          {/* <!-- Badges --> */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gold/30">
              <span className="text-gold font-bold text-lg">ISO</span>
              <span className="font-medium">{t.badgeISO}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gold/30">
              <span className="text-gold font-bold text-lg">100%</span>
              <span className="font-medium">{t.badgeTested}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gold/30">
              <span className="text-gold font-bold text-lg">{t.badgeWild}</span>
              <span className="font-medium">{t.badgeHarvested}</span>
            </div>
          </div>

          {/* <!-- Steps --> */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center font-serif text-2xl mb-8 text-gold">
              {t.howToUseTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-card p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">01</div>
                <h4 className="font-bold mb-2">{t.step1Title}</h4>
                <p className="text-sm text-gray-300">{t.step1Desc}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">02</div>
                <h4 className="font-bold mb-2">{t.step2Title}</h4>
                <p className="text-sm text-gray-300">{t.step2Desc}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">03</div>
                <h4 className="font-bold mb-2">{t.step3Title}</h4>
                <p className="text-sm text-gray-300">{t.step3Desc}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">04</div>
                <h4 className="font-bold mb-2">{t.step4Title}</h4>
                <p className="text-sm text-gray-300">{t.step4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LuxuryWellnessAuthenticity;
