// ./src/components/Home.jsx
import { useLanguage } from "../context/LanguageContext";

/**
 * Home Component
 * Hero section with product image and call-to-action buttons
 */
function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <section
        id="home"
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-hero-bg bg-cover bg-center"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-darkGreen/20 via-darkGreen/80 to-darkGreen/30"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-20">
          {/* Text Content */}
          <div className="md:w-1/2 text-white mb-12 md:mb-0 text-center md:text-start animate-fade-in-up">
            <h1
              className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t.heroTitle }}
            />
            <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide border-s-4 border-gold ps-4">
              {t.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:+93700123456"
                className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
              >
                {t.btnCallNow}
              </a>
              <a
                href="https://wa.me/93700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
              >
                {t.btnWhatsApp}
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in-up delay-200">
            <div className="product-bottle-container relative">
              <img
                src="/images/shilajit-1.png"
                alt="Pamir Mountain Shilajit Bottle"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl relative z-10"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl z-0 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
