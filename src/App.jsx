// ./src/app.jsx

// components
// components

import Benefits from "./components/Benefits";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutUs from "./components/AboutUs";
import ProductShowcase from "./components/ProductShowcase";
import LuxuryWellnessAuthenticity from "./components/LuxuryWellnessAuthenticity";
import LabReports from "./components/LabReports";
import ChooseYourResin from "./components/ChooseYourResin";
import CustomerReviews from "./components/CustomerReviews";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import GetInTouch from "./components/GetInTouch";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { changeLanguage } = useLanguage();

  return (
    <>
      {/* Temporary Language Buttons */}
      <div className="fixed top-5 right-5 z-50 flex gap-2">
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 bg-black text-white rounded"
        >
          EN
        </button>

        <button
          onClick={() => changeLanguage("da")}
          className="px-4 py-2 bg-black text-white rounded"
        >
          دری
        </button>
      </div>

      <Navbar />
      <Home />
      <Benefits />
      <AboutUs />
      <ProductShowcase />
      <LuxuryWellnessAuthenticity />
      <LabReports />
      <ChooseYourResin />
      <CustomerReviews />
      <FrequentlyAskedQuestions />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
