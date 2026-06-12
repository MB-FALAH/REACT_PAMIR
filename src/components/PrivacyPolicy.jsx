// ./src/components/PrivacyPolicy.jsx
import { useLanguage } from "../context/LanguageContext";

function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-gold mb-8 text-center">
          {t.privacyTitle}
        </h1>
        <p className="text-gray-400 text-center mb-8">{t.privacyLastUpdated}</p>

        <div className="bg-black p-8 rounded-2xl border border-gold/20 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.privacySection1}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.privacyText1}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.privacySection2}
            </h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>{t.privacyItem1}</li>
              <li>{t.privacyItem2}</li>
              <li>{t.privacyItem3}</li>
              <li>{t.privacyItem4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.privacySection3}
            </h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>{t.privacyUse1}</li>
              <li>{t.privacyUse2}</li>
              <li>{t.privacyUse3}</li>
              <li>{t.privacyUse4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.privacySection4}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.privacyText2}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.privacySection5}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.privacyText3}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
