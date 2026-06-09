function Home() {
  return (
    <div>
      <section
        id="home"
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-bg bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-linear-to-r from-darkGreen/95 via-darkGreen/80 to-darkGreen/40"></div>

        <div className="  relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-20">
          <div className="md:w-1/2 text-white mb-12 md:mb-0 text-center md:text-start animate-fade-in-up">
            <h1
              className="font-serif text-5xl md:text-5xl font-bold mb-6 leading-tight"
              data-i18n="heroTitle"
            >
              Pure Pamir
              <br />
              Mountain Shilajit
            </h1>
            <p
              className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide border-s-4 border-gold ps-4"
              data-i18n="heroSubtitle"
            >
              Wild-harvested • Lab-verified • Traditionally purified
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:+93700123456"
                className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-tr-lg rounded-tl-lg font-semibold hover:bg-gold hover:text-darkGreen transition duration-300 text-center"
                data-i18n="btnCallNow"
              >
                Call now
              </a>
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
          <div className="md:w-1/2 flex justify-center animate-fade-in-up delay-200">
            {/* <!-- Shilajit Bottle Image --> */}
            <div className="product-bottle-container relative">
              <img
                src="/images/shilajit-0.png"
                alt="Pamir Mountain Shilajit Bottle"
                className="w-156 h-116 object-contain drop-shadow-2xl relative z-10"
              />
              {/* <!-- Glow effect --> */}
              <div className="absolute  bg-gold/20 blur-3xl z-0 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
