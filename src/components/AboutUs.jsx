function AboutUs() {
  return (
    <div>
      <section
        id="about"
        className="py-20 bg-about-bg bg-cover bg-center bg-fixed relative"
      >
        <div className="absolute inset-0 bg-darkGreen/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-card backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center">
            <h2
              className="font-serif text-4xl font-bold text-matteBlack mb-2"
              data-i18n="aboutTitle"
            >
              About Us
            </h2>
            <p
              className="text-gold font-medium mb-6 tracking-widest uppercase text-sm"
              data-i18n="aboutSubtitle"
            >
              Our Story
            </p>
            <p
              className="text-text leading-relaxed mb-6"
              data-i18n="aboutText1"
            >
              Pamir Mountain Shilajit is sustainably harvested by hand at
              elevations exceeding 14,000 feet in the pristine Pamir range. Our
              commitment to purity begins with rigorous lab testing and ends
              with every drop of resin—unadulterated, wild-crafted, and
              ethically sourced.
            </p>
            <p className="text-text leading-relaxed" data-i18n="aboutText2">
              This tradition spans generations of mountain families who know the
              land, the seasons, and the sacred rhythm of harvest.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <span
                className="px-4 py-1 bg-matteBlack text-primary rounded-full text-sm font-medium"
                data-i18n="aboutTag1"
              >
                Since 1987
              </span>
              <span
                className="px-4 py-1 bg-matteBlack text-primary rounded-full text-sm font-medium"
                data-i18n="aboutTag2"
              >
                Sustainably Harvested
              </span>
              <span
                className="px-4 py-1 bg-matteBlack text-primary rounded-full text-sm font-medium"
                data-i18n="aboutTag3"
              >
                Lab-Tested Purity
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
