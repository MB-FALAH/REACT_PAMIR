function LuxuryWellnessAuthenticity() {
  return (
    <div>
      <section className="py-20 bg-contact-bg text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 ">
            <h2
              className="font-serif text-4xl font-bold mb-4"
              data-i18n="authTitle"
            >
              Luxury Wellness Authenticity
            </h2>
            <p className="text-gold" data-i18n="authSubtitle">
              Verified Step-by-Step Process
            </p>
          </div>

          {/* <!-- Badges --> */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 ">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gold/30">
              <span className="text-gold font-bold text-lg">ISO</span>
              <span className="font-medium" data-i18n="badgeISO">
                Certified
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gold/30">
              <span className="text-gold font-bold text-lg">100%</span>
              <span className="font-medium" data-i18n="badgeTested">
                Third-Party Tested
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gold/30">
              <span
                className="text-gold font-bold text-lg"
                data-i18n="badgeWild"
              >
                Wild
              </span>
              <span className="font-medium" data-i18n="badgeHarvested">
                Harvested
              </span>
            </div>
          </div>

          {/* <!-- Steps --> */}
          <div className="max-w-4xl mx-auto ">
            <h3
              className="text-center font-serif text-2xl mb-8 text-gold"
              data-i18n="howToUseTitle"
            >
              How To Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-darkGreen p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">01</div>
                <h4 className="font-bold mb-2" data-i18n="step1Title">
                  Measure
                </h4>
                <p className="text-sm text-gray-300" data-i18n="step1Desc">
                  Take a rice-grain sized portion
                </p>
              </div>
              <div className="bg-darkGreen p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">02</div>
                <h4 className="font-bold mb-2" data-i18n="step2Title">
                  Mix
                </h4>
                <p className="text-sm text-gray-300" data-i18n="step2Desc">
                  Dissolve in warm water or milk
                </p>
              </div>
              <div className="bg-darkGreen p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">03</div>
                <h4 className="font-bold mb-2" data-i18n="step3Title">
                  Stir
                </h4>
                <p className="text-sm text-gray-300" data-i18n="step3Desc">
                  Stir gently until fully dissolved
                </p>
              </div>
              <div className="bg-darkGreen p-6 rounded-xl border border-gold/20 text-center">
                <div className="text-gold font-bold text-2xl mb-2">04</div>
                <h4 className="font-bold mb-2" data-i18n="step4Title">
                  Thrive
                </h4>
                <p className="text-sm text-gray-300" data-i18n="step4Desc">
                  Drink on an empty stomach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LuxuryWellnessAuthenticity;
