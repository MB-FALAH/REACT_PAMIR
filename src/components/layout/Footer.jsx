// ./src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    const subscribers = JSON.parse(
      localStorage.getItem("newsletterSubscribers") || "[]",
    );

    const exists = subscribers.some((sub) => sub.email === email);
    if (exists) {
      setStatus("error");
      setMessage("This email is already subscribed!");
      return;
    }

    subscribers.push({
      email: email,
      subscribedAt: new Date().toISOString(),
    });

    localStorage.setItem("newsletterSubscribers", JSON.stringify(subscribers));

    setStatus("success");
    setMessage("✓ Subscribed successfully!");
    setEmail("");

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <footer className="bg-darkGreen text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* First column: Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="./src/assets/logo/shilajit-logo2.png"
                className="w-8 h-8 rounded-full object-cover"
                alt="Logo"
              />
              <span className="font-serif text-lg font-bold text-gold">
                {t.footerBrand}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t.footerDesc}</p>
          </div>

          {/* Second column: Quick links - Links to homepage sections */}
          <div>
            <h4 className="font-bold text-gold mb-4">{t.footerQuickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/#home" className="hover:text-white transition">
                  {t.navHome}
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-white transition">
                  {t.navProducts}
                </a>
              </li>
              <li>
                <a
                  href="/#order"
                  className="text-matteBlack hover:text-white font-medium transition"
                >
                  {t.orderTitle || "Order Now"}
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

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
            <h4 className="font-bold text-gold mb-4">{t.footerNewsletter}</h4>
            <p className="text-sm text-gray-400 mb-4">{t.footerJoin}</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") {
                    setStatus("idle");
                    setMessage("");
                  }
                }}
                placeholder={t.formEmail}
                disabled={status === "success"}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold w-full disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={status === "success"}
                className={`w-full px-4 py-2 rounded-lg font-bold transition ${
                  status === "success"
                    ? "bg-green-600 text-white"
                    : "bg-gold text-darkGreen hover:bg-lightGold"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "success" ? "✓ Subscribed!" : t.footerSubscribe}
              </button>
            </form>

            {message && (
              <p
                className={`text-sm mt-2 ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/10 pt-8 flex justify-center">
          <p className="text-sm text-gray-400" dir="auto">
            {t.footerCopyright.replace("&copy;", "©")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
