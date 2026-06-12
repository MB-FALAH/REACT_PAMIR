// ./src/components/LabReports.jsx
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function LabReports() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div>
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              {t.labTitle}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-md text-center border-t-4 border-gold">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {t.lab1Title}
              </h3>
              <p className="text-4xl font-bold text-gold mb-2">≥65%</p>
              <p className="text-sm text-gray-500 font-bold">{t.lab1Date}</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md text-center border-t-4 border-gold">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {t.lab2Title}
              </h3>
              <p className="text-4xl font-bold text-matteBlack mb-2">
                {t.lab2Result}
              </p>
              <p className="text-sm text-gray-500 font-bold">
                {t.lab2Detector}
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md text-center border-t-4 border-gold">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {t.lab3Title}
              </h3>
              <p className="text-4xl font-bold text-matteBlack mb-2">
                10 CFU/g
              </p>
              <p className="text-sm text-gray-500 font-bold">{t.lab3Desc}</p>
            </div>
          </div>

          {/* Button to view full reports */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/lab-reports")}
              className="inline-block bg-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-gold/50"
            >
              {t.viewFullReports || "View Full Reports & Certifications →"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LabReports;
