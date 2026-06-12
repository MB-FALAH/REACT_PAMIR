// ./src/components/LabReportsPage.jsx
import { useLanguage } from "../context/LanguageContext";

function LabReportsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-gold mb-8 text-center">
          {t.labReportsTitle || "Lab Reports & Certifications"}
        </h1>
        <p className="text-gray-400 text-center mb-12">
          {t.labReportsSubtitle ||
            "Third-party tested for purity, potency, and safety"}
        </p>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black p-6 rounded-xl border border-gold/20 text-center">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gold mb-2">
              {t.certTitle1 || "Third-Party Tested"}
            </h3>
            <p className="text-gray-400 text-sm">
              {t.certDesc1 || "Every batch tested by independent laboratories"}
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gold/20 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gold mb-2">
              {t.certTitle2 || "Heavy Metal Free"}
            </h3>
            <p className="text-gray-400 text-sm">
              {t.certDesc2 ||
                "Certified free from lead, mercury, arsenic, and cadmium"}
            </p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-gold/20 text-center">
            <div className="text-5xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold text-gold mb-2">
              {t.certTitle3 || "Pure & Authentic"}
            </h3>
            <p className="text-gray-400 text-sm">
              {t.certDesc3 || "Sourced from pristine Pamir Mountains"}
            </p>
          </div>
        </div>

        {/* Test Results */}
        <div className="bg-black p-8 rounded-2xl border border-gold/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t.testResultsTitle || "Test Results"}
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">
                {t.testFulvic || "Fulvic Acid Content"}
              </span>
              <span className="text-gold font-bold">≥65%</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">
                {t.testHeavyMetals || "Heavy Metals Test"}
              </span>
              <span className="text-green-400 font-bold">
                {t.testPass || "PASS"}
              </span>
            </div>

            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">
                {t.testMicrobial || "Microbial Analysis"}
              </span>
              <span className="text-green-400 font-bold">
                {t.testPass || "PASS"}
              </span>
            </div>

            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">
                {t.testPurity || "Overall Purity"}
              </span>
              <span className="text-gold font-bold">100%</span>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-linear-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border-2 border-gold/40 text-center">
          <h2 className="text-2xl font-bold text-gold mb-4">
            {t.downloadTitle || "Request Full Lab Reports"}
          </h2>
          <p className="text-gray-300 mb-6">
            {t.downloadText ||
              "For complete third-party lab reports and certificates of analysis, please contact us directly."}
          </p>
          <a
            href="mailto:contact@pamirshilajit.com?subject=Request Lab Reports"
            className="inline-block bg-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            {t.downloadButton || "Request Reports"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default LabReportsPage;
