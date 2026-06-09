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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
