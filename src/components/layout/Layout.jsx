// ./src/components/layout/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import LanguageSwitcher from "../LanguageSwitcher";

/**
 * Layout Component
 * Wraps all pages with Navbar and Footer
 * Ensures consistent navigation across all routes
 */
function Layout({ children }) {
  return (
    <>
      {/* Language Switcher - Fixed position */}
      <LanguageSwitcher />

      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Layout;
