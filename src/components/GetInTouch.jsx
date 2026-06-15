// ./src/components/GetInTouch.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * GetInTouch Component
 * Contact form with FormSubmit integration
 * Sends emails directly to contact@pamirshilajit.com
 */
function GetInTouch() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Handle form input changes
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handle form submission
   * FormSubmit will handle the actual email sending
   */
  const handleSubmit = (e) => {
    // Let FormSubmit handle the submission
    setStatus("loading");

    // FormSubmit will redirect, so we set a timeout to reset status
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      <section id="contact" className="bg-contact-bg py-20 bg-bg">
        <div className="container mx-auto px-6">
          {/* TITLE SECTION */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              {t.contactTitle}
            </h2>
            <p className="text-gray-400 text-lg">{t.contactSubtitle}</p>
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
                      stroke="none"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.02 3.06a1 1 0 01-.272 1.04L7.21 9.79a16.001 16.001 0 006.99 6.99l1.006-1.766a1 1 0 011.04-.272l3.06 1.02A1 1 0 0121 17.72V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z" />
                    </svg>
                    <a
                      href="tel:+971 56 825 3269"
                      className="text-lg font-semibold hover:text-lightGold transition"
                      dir="ltr"
                    >
                      +971-568-253-269
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
                      href="mailto:sales@pamirmountainshilajit.com"
                      className="text-lg font-semibold hover:text-lightGold transition"
                      dir="ltr"
                    >
                      sales@pamirmountainshilajit.com
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                      title="Pamir Mountains Location"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - FORM */}
              <div className="bg-primary p-10">
                {/* FormSubmit Integration */}
                <form
                  action="https://formsubmit.co/contact@pamirshilajit.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* FormSubmit Configuration */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Message from Website!"
                  />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://your-website.com/thank-you"
                  />

                  {/* Honeypot for spam protection */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />

                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                      dir="ltr"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      {t.formMessage}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gold text-darkGreen font-bold py-3 rounded-xl hover:bg-lightGold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      t.btnSendMessage
                    )}
                  </button>

                  {/* Success Message */}
                  {status === "success" && (
                    <p className="text-green-400 text-sm text-center">
                      ✓ Message sent successfully!
                    </p>
                  )}
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
