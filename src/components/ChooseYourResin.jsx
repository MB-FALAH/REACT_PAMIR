// ./src/components/ChooseYourResin.jsx

function ChooseYourResin() {
  return (
    <div>
      <section className="py-20 bg-contact-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 ">
            <h2
              className="font-serif text-4xl font-bold text-gold mb-4"
              data-i18n="chooseTitle"
            >
              Choose Your Resin
            </h2>
            <p className="text-gray-600" data-i18n="chooseSubtitle">
              100% Raw & Unprocessed • Rich in Fulvic Acid
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* <!-- 30g --> */}
            <div className="bg-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 ">
              {/* <div className="h-40 flex items-center justify-center mb-6">
                <img
                  src="./images/30g.png"
                  alt="30g Shilajit"
                  className="w-32 h-40 "
                />
              </div>
              <h3
                className="font-serif text-2xl font-bold text-lightGold text-center mb-2"
                data-i18n="cardTitle"
              >
                Pure Shilajit Resin
              </h3>
              <p
                className="text-center text-gold font-bold text-lg mb-4"
                data-i18n="card1Size"
              >
                30g Jar
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat1">≥65% Fulvic Acid</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat2">Lab-Tested Purity</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat3">Pamir Mountain Origin</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-darkGreen transition border border-white"
                  data-i18n="btnInfo"
                >
                  Info
                </button>
                <a
                  href="https://wa.me/93700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
                  data-i18n="btnWhatsApp"
                >
                  WhatsApp Order
                </a>
              </div> */}
            </div>
            {/* <!-- 60g --> */}
            <div className="bg-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-2 border-gold relative  -100">
              <div
                className="absolute w-20 top-2 left-2 text-center  inset-e-0 bg-gold text-darkGreen text-xs font-bold px-3 py-1 rounded-bl-lg rounded-lg"
                data-i18n="badgePopular"
              >
                POPULAR
              </div>
              <div className="h-40 flex items-center justify-center mb-6">
                <div className="w-32 h-40 flex items-center justify-center">
                  <img
                    src="/images/60g.png"
                    alt="60g Shilajit"
                    className="w-32 h-40 "
                  />
                </div>
              </div>
              <h3
                className="font-serif text-2xl font-bold text-lightGold text-center mb-2"
                data-i18n="cardTitle"
              >
                Pure Shilajit Resin
              </h3>
              <p
                className="text-center text-gold font-bold text-lg mb-4"
                data-i18n="card2Size"
              >
                60g Jar
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat1b">≥66% Fulvic Acid</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat2">Lab-Tested Purity</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat3">Pamir Mountain Origin</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg border border-white transition"
                  data-i18n="btnInfo"
                >
                  Info
                </button>
                <a
                  href="https://wa.me/93700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
                  data-i18n="btnWhatsApp"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
            {/* <!-- 100g --> */}
            <div className="bg-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100  -200">
              {/* <div className="h-40 flex items-center justify-center mb-6">
                <div className="w-36 h-44 flex items-center justify-center">
                  <img
                    src="/images/100g.png"
                    alt="100g Shilajit"
                    className="w-36 h-44 object-contain rounded-lg"
                  />
                </div>
              </div>
              <h3
                className="font-serif text-2xl font-bold text-lightGold text-center mb-2"
                data-i18n="cardTitle"
              >
                Pure Shilajit Resin
              </h3>
              <p
                className="text-center text-gold font-bold text-lg mb-4"
                data-i18n="card3Size"
              >
                100g Jar
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat1">≥65% Fulvic Acid</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat2">Lab-Tested Purity</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-i18n="cardFeat3">Pamir Mountain Origin</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-darkGreen transition border border-white"
                  data-i18n="btnInfo"
                >
                  Info
                </button>
                <a
                  href="https://wa.me/93700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
                  data-i18n="btnWhatsApp"
                >
                  WhatsApp Order
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChooseYourResin;
