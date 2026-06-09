import Benefits from "./components/Benefits";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutUs from "./components/AboutUs";
import ProductShowcase from "./components/ProductShowcase";
import LuxuryWellnessAuthenticity from "./components/LuxuryWellnessAuthenticity";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Benefits />
      <AboutUs />
      <ProductShowcase />
      <LuxuryWellnessAuthenticity />
      <Footer />
    </div>
  );
}

export default App;
