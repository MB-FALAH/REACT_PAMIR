// ./src/components/CustomerReviews.jsx

import { useLanguage } from "../context/LanguageContext";

function CustomerReviews() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              {t.reviewsTitle}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">{t.review1Text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-primary">{t.review1Name}</p>
                  <p className="text-xs text-gray-500">{t.reviewVerified}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">{t.review2Text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-primary">{t.review2Name}</p>
                  <p className="text-xs text-gray-500">{t.reviewVerified}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">{t.review3Text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="font-bold text-primary">{t.review3Name}</p>
                  <p className="text-xs text-gray-500">{t.reviewVerified}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerReviews;
