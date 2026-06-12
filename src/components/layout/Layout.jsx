// ./src/components/layout/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout Component
 * Wraps all pages with Navbar and Footer
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
