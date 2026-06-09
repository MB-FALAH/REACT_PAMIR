function LabReports() {
  return (
    <div>
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 className">
            <h2
              className="font-serif text-4xl font-bold text-white mb-4"
              data-i18n="labTitle"
            >
              Lab Reports & Certifications
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-gold className">
              <h3
                className="font-serif text-xl font-bold text-primary mb-2"
                data-i18n="lab1Title"
              >
                Fulvic Acid Content
              </h3>
              <p className="text-4xl font-bold text-gold mb-2">≥65%</p>
              <p className="text-sm text-gray-500" data-i18n="lab1Date">
                Report Date: 2024.06.12
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-gold className -100">
              <h3
                className="font-serif text-xl font-bold text-primary mb-2"
                data-i18n="lab2Title"
              >
                Heavy Metal Test
              </h3>
              <p
                className="text-4xl font-bold text-primary mb-2"
                data-i18n="lab2Result"
              >
                PASS
              </p>
              <p className="text-sm text-gray-500" data-i18n="lab2Detector">
                Detector: Eurofins Scientific
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-gold className -200">
              <h3
                className="font-serif text-xl font-bold text-primary mb-2"
                data-i18n="lab3Title"
              >
                Microbial Purity
              </h3>
              <p className="text-4xl font-bold text-primary mb-2"> 10 CFU/g</p>
              <p className="text-sm text-gray-500" data-i18n="lab3Desc">
                Total Aerobic Count
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LabReports;
