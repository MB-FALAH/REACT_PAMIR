import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { subscribeNewsletter } from "../../utils/newsletterApi";

function Footer() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  // ================= SUBSCRIBE =================
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);

      return;
    }

    try {
      setStatus("loading");

      const res = await subscribeNewsletter(email);

      console.log("SUBSCRIBE RESPONSE:", res);

      if (res.success) {
        setStatus("success");
        setMessage("✓ Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(res.message || "Subscription failed");
      }
    } catch (error) {
      console.log(error);

      setStatus("error");
      setMessage(
        error?.response?.data?.message ||
          error.message ||
          "Failed to subscribe",
      );
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <footer className="bg-darkGreen text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo/shilajit-logo2.png"
                src="./src/assets/logo/shilajit-logo2.webp"
                className="w-8 h-8 rounded-full object-cover"
                alt="Logo"
                className="w-8 h-8 rounded-full"
              />

              <span className="font-bold text-gold">{t.footerBrand}</span>
            </div>

            <p className="text-gray-400">{t.footerDesc}</p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-gold font-bold mb-4">{t.footerQuickLinks}</h4>

            <ul className="space-y-2">
              <li>
                <a href="/#home">{t.navHome}</a>
              </li>
              <li>
                <a href="/#products">{t.navProducts}</a>
              </li>
              <li>
                <a href="/#about">{t.navAbout}</a>
              </li>
              <li>
                <a href="/#contact">{t.navContact}</a>
              </li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div>
            <h4 className="text-gold font-bold mb-4">{t.footerCustomerCare}</h4>

            <ul className="space-y-2">
              <li>
                <Link to="/shipping">{t.footerShipping}</Link>
              </li>
              <li>
                <Link to="/returns">{t.footerReturns}</Link>
              </li>
              <li>
                <Link to="/privacy">{t.footerPrivacy}</Link>
              </li>
              <li>
                <Link to="/terms">{t.footerTerms}</Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          {/* Third column: Customer care - Links to separate pages */}
          <div>
            <h4 className="font-bold text-gold mb-4">{t.footerCustomerCare}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/shipping" className="hover:text-white transition">
                  {t.footerShipping}
                </Link>
              </li>

              <li>
                <Link to="/returns" className="hover:text-white transition">
                  {t.footerReturns}
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  {t.footerPrivacy}
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-white transition">
                  {t.footerTerms}
                </Link>
              </li>

              <li>
                <Link to="/lab-reports" className="hover:text-white transition">
                  {t.footerLab}
                </Link>
              </li>
            </ul>
          </div>
          {/* Fourth column: Newsletter */}
          <div>
            <h4 className="text-gold font-bold mb-4">{t.footerNewsletter}</h4>

            <p className="text-gray-400 mb-4">{t.footerJoin}</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.formEmail}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold text-black py-2 rounded-lg font-bold hover:opacity-90 transition"
              >
                {status === "loading" ? "Loading..." : t.footerSubscribe}
              </button>
            </form>

            {/* MESSAGE */}
            {message && (
              <p
                className={`mt-2 text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-400">{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
