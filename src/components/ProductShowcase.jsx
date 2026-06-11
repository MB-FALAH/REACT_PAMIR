// ./src/components/ProductShowcase.jsx

import { useLanguage } from "../context/LanguageContext";

function ProductShowcase() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="products" className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gold mb-4">
              {t.showcaseTitle}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-md hover-shadow-gold transition duration-300 text-center">
              <div className="h-full flex items-center justify-center mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="./public/images/shilajit-3.png"
                    alt="30g Shilajit"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* 1 Shilajit */}
              {/* <h3 className="font-serif text-xl font-bold text-primary">
                {t.product1}
              </h3> */}
            </div>

            {/* 2 Shilajit */}
            <div className="bg-card p-6 rounded-xl shadow-md hover-shadow-gold transition duration-300 text-center">
              <div className="h-full flex items-center justify-center mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="./public/images/shilajit-4.png"
                    alt="30g Shilajit"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
              {/* <h3 className="font-serif text-xl font-bold text-primary">
                {t.product2}
              </h3> */}
            </div>

            {/* 3 Shilajit */}
            <div className="bg-card p-6 rounded-xl shadow-md hover-shadow-gold transition duration-300 text-center">
              <div className="h-full flex items-center justify-center mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="./public/images/shilajit-0.png"
                    alt="30g Shilajit"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
              {/* <h3 className="font-serif text-xl font-bold text-primary">
                {t.product3}
              </h3> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductShowcase;
