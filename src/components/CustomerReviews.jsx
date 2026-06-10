// ./src/components/CustomerReviews.jsx

function CustomerReviews() {
  return (
    <div>
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 ">
            <h2
              className="font-serif text-4xl font-bold text-white mb-4"
              data-i18n="reviewsTitle"
            >
              Customer Reviews
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md ">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic" data-i18n="review1Text">
                "I've been using Pamir Shilajit for a month now. The energy
                boost is incredible and it feels completely natural. Highly
                recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-primary" data-i18n="review1Name">
                    Ahmed R.
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    data-i18n="reviewVerified"
                  >
                    Verified Buyer
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md  -100">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic" data-i18n="review2Text">
                "The purity is unmatched. You can tell this is the real deal. My
                stamina during workouts has improved significantly."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-primary" data-i18n="review2Name">
                    Sarah M.
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    data-i18n="reviewVerified"
                  >
                    Verified Buyer
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md  -200">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic" data-i18n="review3Text">
                "Fast shipping and excellent packaging. The resin dissolves
                perfectly in warm milk. Will definitely buy again."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="font-bold text-primary" data-i18n="review3Name">
                    John D.
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    data-i18n="reviewVerified"
                  >
                    Verified Buyer
                  </p>
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
