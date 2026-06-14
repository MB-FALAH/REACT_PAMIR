// ./src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Layout
import Layout from './components/layout/Layout';

// Components
import Benefits from './components/Benefits';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import StoryOfPamir from './components/StoryOfPamir';
import ProductShowcase from './components/ProductShowcase';
import LuxuryWellnessAuthenticity from './components/LuxuryWellnessAuthenticity';
import LabReports from './components/LabReports';
import ChooseYourResin from './components/ChooseYourResin';
import CustomerReviews from './components/CustomerReviews';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import GetInTouch from './components/GetInTouch';
import AdminDashboard from './components/ReviewAdmin';
import ShippingInfo from './components/ShippingInfo';
import ReturnsPolicy from './components/ReturnsPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import LabReportsPage from './components/LabReportsPage';

/**
 * HomePage Component
 */
function HomePage() {
  return (
    <>
      <Home />
      <Benefits />
      <AboutUs />
      <StoryOfPamir />
      <ProductShowcase />
      <LuxuryWellnessAuthenticity />
      <LabReports />
      <ChooseYourResin />
      <CustomerReviews />
      <FrequentlyAskedQuestions />
      <GetInTouch />
    </>
  );
}

/**
 * Main App Component
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* Customer Care Pages */}
        <Route
          path="/shipping"
          element={
            <Layout>
              <ShippingInfo />
            </Layout>
          }
        />
        <Route
          path="/returns"
          element={
            <Layout>
              <ReturnsPolicy />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />
        <Route
          path="/lab-reports"
          element={
            <Layout>
              <LabReportsPage />
            </Layout>
          }
        />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
