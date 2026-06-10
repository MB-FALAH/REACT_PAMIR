function Benefits() {
  return (
    <div>
      {/* <!-- Benefits Section --> */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="font-serif text-4xl font-bold text-gold mb-4"
              data-i18n="benefitsTitle"
            >
              Benefits
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Benefit 1 --> */}
            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-sh">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3
                className="font-serif text-xl font-bold text-matteBlack mb-2"
                data-i18n="benefit1Title"
              >
                Natural Energy Support
              </h3>
              <p className="text-text text-sm" data-i18n="benefit1Desc">
                Sustainably sourced from pristine Pamir highlands, supporting
                vitality and endurance.
              </p>
            </div>
            {/* <!-- Benefit 2 --> */}
            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-sh">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3
                className="font-serif text-xl font-bold text-matteBlack mb-2"
                data-i18n="benefit2Title"
              >
                Rich in 85+ Minerals
              </h3>
              <p className="text-text text-sm" data-i18n="benefit2Desc">
                Naturally occurring trace elements including fulvic acid, iron,
                zinc, and selenium.
              </p>
            </div>
            {/* <!-- Benefit 3 --> */}
            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-shhw -200">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3
                className="font-serif text-xl font-bold text-matteBlack mb-2"
                data-i18n="benefit3Title"
              >
                Carefully Purified
              </h3>
              <p className="text-text text-sm" data-i18n="benefit3Desc">
                Triple-filtered and lab-tested for heavy metals and microbial
                purity.
              </p>
            </div>
            {/* <!-- Benefit 4 --> */}
            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-shhw -200">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3
                className="font-serif text-xl font-bold text-matteBlack mb-2"
                data-i18n="benefit4Title"
              >
                Traditional Herbal Resin
              </h3>
              <p className="text-text text-sm" data-i18n="benefit4Desc">
                Hand-collected and sun-dried using centuries-old Himalayan
                methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
