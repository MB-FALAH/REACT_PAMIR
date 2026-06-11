// ./src/components/LabReports.jsx

import { useLanguage } from "../context/LanguageContext";

function LabReports() {
  const { t } = useLanguage();

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
            <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-gold">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                {t.lab1Title}
              </h3>
              <p className="text-4xl font-bold text-gold mb-2">≥65%</p>
              <p className="text-sm text-gray-500">{t.lab1Date}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-gold">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                {t.lab2Title}
              </h3>
              <p className="text-4xl font-bold text-primary mb-2">
                {t.lab2Result}
              </p>
              <p className="text-sm text-gray-500">{t.lab2Detector}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-gold">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                {t.lab3Title}
              </h3>
              <p className="text-4xl font-bold text-primary mb-2">10 CFU/g</p>
              <p className="text-sm text-gray-500">{t.lab3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LabReports;
