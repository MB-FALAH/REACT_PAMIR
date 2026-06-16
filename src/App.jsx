// ./src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Layout from "./components/layout/Layout";

// Main Page Components
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import AboutUs from "./components/AboutUs";
import StoryOfPamir from "./components/StoryOfPamir";
import ProductShowcase from "./components/ProductShowcase";
import LuxuryWellnessAuthenticity from "./components/LuxuryWellnessAuthenticity";
import LabReports from "./components/LabReports";
import ChooseYourResin from "./components/ChooseYourResin";
import CustomerReviews from "./components/CustomerReviews";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import GetInTouch from "./components/GetInTouch";

// Customer Care & Policy Pages
import ShippingInfo from "./components/ShippingInfo";
import ReturnsPolicy from "./components/ReturnsPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import LabReportsPage from "./components/LabReportsPage";

// Authentication & Admin Pages
import SignupForm from "./components/SignupForm";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/ReviewAdmin";

// Routing Utilities
import ProtectedRoute from "./routes/ProtectedRoute";

/**
 * HomePage Component
 * Aggregates all primary sections displayed on the main landing page.
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
 * Configures the application router, defining all public and protected routes.
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

        {/* Customer Care & Policy Pages */}
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

        {/* Authentication Pages */}
        <Route
          path="/signup"
          element={
            <Layout>
              <SignupForm />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <AdminLogin />
            </Layout>
          }
        />

        {/* Admin Dashboard (Protected Route) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
