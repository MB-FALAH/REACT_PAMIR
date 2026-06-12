// ./src/components/ShippingInfo.jsx
import { useLanguage } from "../context/LanguageContext";

function ShippingInfo() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-gold mb-8 text-center">
          {t.shippingTitle}
        </h1>

        <div className="bg-black p-8 rounded-2xl border border-gold/20 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.shippingSection1}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.shippingText1}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.shippingSection2}
            </h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>{t.shippingItem1}</li>
              <li>{t.shippingItem2}</li>
              <li>{t.shippingItem3}</li>
              <li>{t.shippingItem4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.shippingSection3}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.shippingText2}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.shippingSection4}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.shippingText3}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;
