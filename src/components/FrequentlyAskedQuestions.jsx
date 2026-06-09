import { useState } from "react";

function FrequentlyAskedQuestions() {
  // Track which FAQ is open by its index. null means all are closed.
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function: if clicked item is open, close it. Otherwise, open it.
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Store FAQ data in an array to keep the code clean, DRY, and easy to update
  const faqData = [
    {
      qKey: "faq1Q",
      qText: "Is Shilajit safe for daily use?",
      aKey: "faq1A",
      aText:
        "Yes, Shilajit is generally safe for daily use when taken in recommended amounts. It has been used for centuries in traditional medicine.",
    },
    {
      qKey: "faq2Q",
      qText: "How long before I see results?",
      aKey: "faq2A",
      aText:
        "Most users report feeling increased energy and vitality within 1-2 weeks of consistent daily use. Full benefits may take 4-8 weeks.",
    },
    {
      qKey: "faq3Q",
      qText: "What makes Pamir Shilajit different?",
      aKey: "faq3A",
      aText:
        "Our Shilajit is wild-harvested from the pristine Pamir Mountains at over 14,000 feet, traditionally purified, and rigorously lab-tested for purity and potency.",
    },
    {
      qKey: "faq4Q",
      qText: "How should I store it?",
      aKey: "faq4A",
      aText:
        "Store in a cool, dry place away from direct sunlight. Ensure the lid is tightly sealed after each use to maintain freshness.",
    },
  ];

  return (
    <section className="py-20 bg-faq-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2
            className="text-gold font-serif text-4xl font-bold mb-4"
            data-i18n="faqTitle"
          >
            Frequently Asked Questions
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
                {/* onClick is now on the whole button for better UX */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-start bg-bg hover:bg-gray-100 flex justify-between items-center font-medium text-white hover:text-black transition-colors duration-200 "
                >
                  <span data-i18n={faq.qKey}>{faq.qText}</span>

                  {/* Bonus: Rotates the '+' into an 'x' when open */}
                  <span
                    className={`faq-icon transform transition-transform duration-300 ms-4 text-xl ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                {/* Conditionally render the answer only if this specific index is open */}
                {isOpen && (
                  <div className="px-6 py-4 bg-white text-gray-600 text-sm border-t border-gray-100">
                    <span data-i18n={faq.aKey}>{faq.aText}</span>
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
