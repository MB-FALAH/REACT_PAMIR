// ./src/components/FrequentlyAskedQuestions.jsx

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function FrequentlyAskedQuestions() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { qKey: "faq1Q", aKey: "faq1A" },
    { qKey: "faq2Q", aKey: "faq2A" },
    { qKey: "faq3Q", aKey: "faq3A" },
    { qKey: "faq4Q", aKey: "faq4A" },
  ];

  return (
    <section className="py-20 bg-faq-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-gold font-serif text-4xl font-bold mb-4">
            {t.faqTitle}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-start bg-bg hover:bg-gray-100 flex justify-between items-center font-medium text-white hover:text-black transition-colors duration-200"
                >
                  <span>{t[faq.qKey]}</span>
                  <span
                    className={`faq-icon transform transition-transform duration-300 ms-4 text-xl ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-white text-gray-600 text-sm border-t border-gray-100">
                    {t[faq.aKey]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
