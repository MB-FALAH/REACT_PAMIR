// ./src/components/AboutUs.jsx

import { useLanguage } from "../context/LanguageContext";

function AboutUs() {
  const { t } = useLanguage();

  return (
    <div>
      <section
        id="about"
        className="py-20 bg-about-bg bg-cover bg-center bg-fixed relative"
      >
        <div className="absolute inset-0 bg-darkGreen/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-card backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="font-serif text-4xl font-bold text-white mb-2">
              {t.aboutTitle}
            </h2>
            <p className="text-gold font-medium mb-6 tracking-widest uppercase text-sm">
              {t.aboutSubtitle}
            </p>
            <p className="text-text leading-relaxed mb-6">{t.aboutText1}</p>
            <p className="text-text leading-relaxed">{t.aboutText2}</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              {/* <span className="px-4 py-1 bg-matteBlack text-primary rounded-full text-sm font-medium">
                {t.aboutTag1}
              </span> */}
              <span className="px-4 py-1 bg-matteBlack text-primary rounded-full text-sm font-medium">
                {t.aboutTag2}
              </span>
              <span className="px-4 py-1 bg-matteBlack text-primary rounded-full text-sm font-medium">
                {t.aboutTag3}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
