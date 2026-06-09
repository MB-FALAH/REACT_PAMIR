function ProductShowcase() {
  return (
    <div>
      <section id="products" className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 ">
            <h2
              className="font-serif text-4xl font-bold text-gold mb-4"
              data-i18n="showcaseTitle"
            >
              Product Showcase
              <br />
              <span className="text-2xl text-lightGold">Pure Resin - 30g</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover-shadow-gold transition duration-300 text-center ">
              <div className="h-48 flex items-center justify-center mb-4">
                <div className="w-32 h-40  flex items-center justify-center">
                  <img
                    src="/assets/images/30g.png"
                    alt="30g Shilajit"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3
                className="font-serif text-xl font-bold text-primary"
                data-i18n="product1"
              >
                Pure Resin - 30g
              </h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover-shadow-gold transition duration-300 text-center  delay-100">
              <div className="h-48 flex items-center justify-center mb-4">
                <div className="w-32 h-40  flex items-center justify-center">
                  <img
                    src="/assets/images/60g.png"
                    alt="60g Shilajit"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
              <h3
                className="font-serif text-xl font-bold text-primary"
                data-i18n="product2"
              >
                Pure Resin - 60g
              </h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover-shadow-gold transition duration-300 text-center delay-200">
              <div className="h-48 flex items-center justify-center mb-4">
                <div className="w-32 h-40  flex items-center justify-center">
                  <img
                    src="/assets/images/100g.png"
                    alt="100g Shilajit"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3
                className="font-serif text-xl font-bold text-primary"
                data-i18n="product3"
              >
                Pure Resin - 100g
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductShowcase;
