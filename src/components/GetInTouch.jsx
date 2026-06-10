// ./src/components/GetInTouch.jsx

import { useLanguage } from "../context/LanguageContext";

function GetInTouch() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="contact" className="bg-contact-bg py-20 bg-bg">
        <div className="container mx-auto px-6">
          {/* TITLE SECTION */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              {t.contactTitle}
            </h2>

            <p className="text-gray-600 text-lg">{t.contactSubtitle}</p>
          </div>

          {/* MAIN CARD */}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - CONTACT INFO */}
              <div className="bg-primary p-10 text-white">
                <h3 className="font-serif text-2xl font-bold mb-8 text-gold">
                  {t.contactInfoTitle}
                </h3>

                <div className="space-y-5">
                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.738 1.997 4.368 4.332 6.701.333.333.742.531 1.173.63.022 0 .044-.001.065-.003l.041.003c.431.099.84.297 1.173.63 2.335-2.333 3.914-4.963 4.332-6.701l-1.548-.773a1 1 0 01-.54-1.06l.74-4.435A1 1 0 0115.847 2H18a1 1 0 011 1v2.847a1 1 0 01-.138.52l-.738 1.154a1 1 0 01-.986.336l-4.435-.74a1 1 0 01-1.06.54l-.773 1.548c1.738.418 4.368 1.997 6.701 4.332.333.333.531.742.63 1.173 0 .022-.001.044-.003.065l.003.041c.099.431.297.84.63 1.173-2.333 2.335-4.963 3.914-6.701 4.332l.773-1.548a1 1 0 01.54-1.06l4.435.74a1 1 0 01.986-.336l1.154.738A1 1 0 0118 18v-2.153a1 1 0 01-.836-.986l-.477-2.384a6 6 0 00-.517-3.86l.158-.318a6 6 0 01.517-3.86l.477-2.384A1 1 0 0118 5.847V3z"></path>
                    </svg>

                    <a
                      href="tel:+93700123456"
                      className="text-lg font-semibold hover:text-lightGold transition"
                    >
                      +93 700 123 456
                    </a>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>

                    <a
                      href="mailto:contact@pamirshilajit.com"
                      className="text-lg font-semibold hover:text-lightGold transition"
                    >
                      contact@pamirshilajit.com
                    </a>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-gold shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>

                    <a
                      href="https://maps.app.goo.gl/Nnjr67Tkx37Pf6sd8"
                      className="text-lg font-semibold"
                    >
                      Pamir Mountains, Afghanistan
                    </a>
                  </div>
                </div>

                {/* MAP */}
                <div className="mt-10 pt-10 border-t border-primary-light">
                  <div className="rounded-3xl overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?q=39.0673413187052,71.99399085852079&z=13&output=embed"
                      className="w-full h-64 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - FORM */}
              <div className="bg-primary p-10">
                <form className="space-y-5">
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formName}
                    </label>

                    <input
                      type="text"
                      className="w-full px-4 py-3 border text-white border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formEmail}
                    </label>

                    <input
                      type="email"
                      className="w-full px-4 py-3 border text-white border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formMessage}
                    </label>

                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 text-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-gold text-darkGreen font-bold py-3 rounded-xl hover:bg-lightGold transition duration-300"
                  >
                    {t.btnSendMessage}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInTouch;
