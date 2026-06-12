// ./src/components/TermsOfService.jsx
import { useLanguage } from "../context/LanguageContext";

function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-gold mb-8 text-center">
          {t.termsTitle}
        </h1>
        <p className="text-gray-400 text-center mb-8">{t.termsLastUpdated}</p>

        <div className="bg-black p-8 rounded-2xl border border-gold/20 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.termsSection1}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.termsText1}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.termsSection2}
            </h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>{t.termsItem1}</li>
              <li>{t.termsItem2}</li>
              <li>{t.termsItem3}</li>
              <li>{t.termsItem4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.termsSection3}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.termsText2}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.termsSection4}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.termsText3}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.termsSection5}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.termsText4}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
