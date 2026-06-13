// ./src/components/StoryOfPamir.jsx
import { useLanguage } from "../context/LanguageContext";

function StoryOfPamir() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section with Mountain Background */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545569341-9eb8b3097999?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gold mb-6 animate-fade-in-up">
              {t.storyTitle}
            </h1>
            <p className="text-xl text-white leading-relaxed">
              {t.storySubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* First Paragraph */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              {t.storyText1}
            </p>
          </div>

          {/* Image Grid 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Pamir Mountains Peak"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-gold">
                  {t.storyImg1Title}
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
                alt="Mountain Valley"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-gold">
                  {t.storyImg2Title}
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
                alt="High Altitude"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-gold">
                  {t.storyImg3Title}
                </h3>
              </div>
            </div>
          </div>

          {/* Second Paragraph */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              {t.storyText2}
            </p>
          </div>

          {/* Full Width Image */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600"
                alt="Pamir Landscape"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-black p-12 rounded-3xl border border-gold/20 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-gold mb-6">
                {t.storyMissionTitle}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.storyMissionText}
              </p>
            </div>
          </div>

          {/* Final Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800"
                alt="Mountain Rocks"
                className="w-full h-96 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800"
                alt="Alpine Nature"
                className="w-full h-96 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {t.storyFinalText}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-b from-bg to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-gold mb-6">
            {t.storyCTATitle}
          </h2>
          <p className="text-lg text-gray-400 mb-8">{t.storyCTAText}</p>
          <a
            href="/#order"
            className="inline-block bg-gold text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-gold/50"
          >
            {t.storyCTAButton}
          </a>
        </div>
      </section>
    </div>
  );
}

export default StoryOfPamir;
