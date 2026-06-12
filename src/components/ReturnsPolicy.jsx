// ./src/components/ReturnsPolicy.jsx
import { useLanguage } from "../context/LanguageContext";

function ReturnsPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-gold mb-8 text-center">
          {t.returnsTitle}
        </h1>

        <div className="bg-black p-8 rounded-2xl border border-gold/20 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.returnsSection1}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.returnsText1}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.returnsSection2}
            </h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>{t.returnsItem1}</li>
              <li>{t.returnsItem2}</li>
              <li>{t.returnsItem3}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.returnsSection3}
            </h2>
            <ol className="text-gray-300 space-y-2 list-decimal list-inside">
              <li>{t.returnsStep1}</li>
              <li>{t.returnsStep2}</li>
              <li>{t.returnsStep3}</li>
              <li>{t.returnsStep4}</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.returnsSection4}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.returnsText2}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ReturnsPolicy;
