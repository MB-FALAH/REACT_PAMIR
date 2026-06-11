// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    brandName: "Pamir Mountain Shilajit",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About",
    navContact: "Contact",
    heroTitle: "Pure Pamir<br>Mountain Shilajit",
    heroSubtitle: "Wild-harvested • Lab-verified • Traditionally purified",
    btnCallNow: "Call Now",
    btnWhatsApp: "WhatsApp Order",
    bottleBrand: "Pamir Mountain",
    bottleProduct: "Shilajit",
    bottleTagline: "Pure Pamir Resin",
    benefitsTitle: "Benefits",
    benefit1Title: "Natural Energy Support",
    benefit1Desc:
      "Sustainably sourced from pristine Pamir highlands, supporting vitality and endurance.",
    benefit2Title: "Rich in 85+ Minerals",
    benefit2Desc:
      "Naturally occurring trace elements including fulvic acid, iron, zinc, and selenium.",
    benefit3Title: "Carefully Purified",
    benefit3Desc:
      "Triple-filtered and lab-tested for heavy metals and microbial purity.",
    benefit4Title: "Traditional Herbal Resin",
    benefit4Desc:
      "Hand-collected and sun-dried using centuries-old Pamir methods.",
    aboutTitle: "About Us",
    aboutSubtitle: "Our Story",
    aboutText1:
      "Pamir Mountain Shilajit is sustainably harvested by hand at elevations exceeding 14,000 feet in the pristine Pamir range. Our commitment to purity begins with rigorous lab testing and ends with every drop of resin—unadulterated, wild-crafted, and ethically sourced.",
    aboutText2:
      "This tradition spans generations of mountain families who know the land, the seasons, and the sacred rhythm of harvest.",
    aboutTag1: "Since 1987",
    aboutTag2: "Sustainably Harvested",
    aboutTag3: "Lab-Tested Purity",
    showcaseTitle: "Product Showcase",
    product1: "Pure Resin - 30g",
    product2: "Pure Resin - 60g",
    product3: "Pure Resin - 100g",
    authTitle: "Luxury Wellness Authenticity",
    authSubtitle: "Verified Step-by-Step Process",
    badgeISO: "Certified",
    badgeTested: "Third-Party Tested",
    badgeWild: "Wild",
    badgeHarvested: "Harvested",
    howToUseTitle: "How To Use",
    step1Title: "Measure",
    step1Desc: "Take a rice-grain sized portion",
    step2Title: "Mix",
    step2Desc: "Dissolve in warm water or milk",
    step3Title: "Stir",
    step3Desc: "Stir gently until fully dissolved",
    step4Title: "Thrive",
    step4Desc: "Drink on an empty stomach",
    labTitle: "Lab Reports & Certifications",
    lab1Title: "Fulvic Acid Content",
    lab1Date: "Report Date: 2024.06.12",
    lab2Title: "Heavy Metal Test",
    lab2Result: "PASS",
    lab2Detector: "Detector: Eurofins Scientific",
    lab3Title: "Microbial Purity",
    lab3Desc: "Total Aerobic Count",
    chooseTitle: "Order Now",
    chooseSubtitle: "100% Raw & Unprocessed • Rich in Fulvic Acid",
    cardTitle: "Pure Shilajit Resin",
    card1Size: "30g Jar",
    card2Size: "60g Jar",
    card3Size: "100g Jar",
    cardFeat1: "≥65% Fulvic Acid",
    cardFeat1b: "≥66% Fulvic Acid",
    cardFeat2: "Lab-Tested Purity",
    cardFeat3: "Pamir Mountain Origin",
    btnInfo: "Info",
    btnWhatsappOrder: "Whatsapp Order",
    badgePopular: "POPULAR",
    reviewsTitle: "Customer Reviews",
    review1Text:
      '"I\'ve been using Pamir Shilajit for a month now. The energy boost is incredible and it feels completely natural. Highly recommend!"',
    review1Name: "Ahmed R.",
    review2Text:
      '"The purity is unmatched. You can tell this is the real deal. My stamina during workouts has improved significantly."',
    review2Name: "Sarah M.",
    review3Text:
      '"Fast shipping and excellent packaging. The resin dissolves perfectly in warm milk. Will definitely buy again."',
    review3Name: "John D.",
    reviewVerified: "Verified Buyer",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is Shilajit safe for daily use?",
    faq1A:
      "Yes, Shilajit is generally safe for daily use when taken in recommended amounts. It has been used for centuries in traditional medicine.",
    faq2Q: "How long before I see results?",
    faq2A:
      "Most users report feeling increased energy and vitality within 1-2 weeks of consistent daily use. Full benefits may take 4-8 weeks.",
    faq3Q: "What makes Pamir Shilajit different?",
    faq3A:
      "Our Shilajit is wild-harvested from the pristine Pamir Mountains at over 14,000 feet, traditionally purified, and rigorously lab-tested for purity and potency.",
    faq4Q: "How should I store it?",
    faq4A:
      "Store in a cool, dry place away from direct sunlight. Ensure the lid is tightly sealed after each use to maintain freshness.",
    contactTitle: "Get In Touch",
    contactSubtitle: "Join the Altitude Wellness Circle",
    contactInfoTitle: "Contact Information",
    contactAddress: "Pamir Mountains, Afghanistan",
    contactFollow: "Follow us for wellness tips and exclusive offers.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    btnSendMessage: "Send Message",
    footerBrand: "Pamir Mountain",
    footerDesc:
      "Pure Pamir Resin, Sustainably Sourced from the roof of the world.",
    footerQuickLinks: "Quick Links",
    footerCustomerCare: "Customer Care",
    footerShipping: "Shipping Info",
    footerReturns: "Returns Policy",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerLab: "Lab Reports",
    footerNewsletter: "Newsletter",
    footerJoin: "Join the Altitude Wellness Circle",
    footerSubscribe: "Subscribe",
    footerCopyright:
      "&copy; 2026 Pamir Mountain Shilajit. All rights reserved.",
    modalTitle: "Shilajit Information",
    modalMinerals: "• Naturally rich in over 85 trace minerals",
    modalFulvic: "• Contains high levels of fulvic acid for absorption",
    modalTraditional: "• Traditionally used for energy and stamina support",
    modalHarvested: "• Harvested from high-altitude Pamir rocks",
    modalLabTested: "• Lab-tested for purity and heavy metals",

    // customer reviwes en
    writeReview: "Write a Review",
    ratingLabel: "Your Rating",
    ratingPlaceholder: "Select your rating",
    ratingDescriptions: ["Very Poor", "Poor", "Average", "Good", "Excellent"],
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    reviewLabel: "Your Review",
    reviewPlaceholder: "Share your experience with the product...",
    submitReview: "Submit Review",
    submitting: "Submitting...",
    successMessage: "✓ Your review has been submitted successfully!",
    fillAllFields: "Please fill in all required fields",
    closeForm: "Close Form",
    writeReviewBtn: "✍ Write a Review",
    showingReviews: "Showing",
    reviewsCount: "reviews",
    sortBy: "Sort by",
    sortNewest: "Newest",
    sortHighest: "Highest Rating",
    sortLowest: "Lowest Rating",
    noReviews: "No reviews yet. Be the first!",
    verifiedBuyer: "Verified Buyer",
  },
  da: {
    brandName: "موملایی کوه‌های پامیر",
    navHome: "صفحه اصلی",
    navProducts: "محصولات",
    navAbout: "درباره ما",
    navContact: "تماس با ما",
    heroTitle: "موملایی خالص<br>کوه‌های پامیر",
    heroSubtitle: "برداشت وحشی • تایید شده در آزمایشگاه • تصفیه سنتی",
    btnCallNow: "تماس بگیرید",
    btnWhatsApp: "سفارش واتساپ",
    bottleBrand: "کوه‌های پامیر",
    bottleProduct: "موملایی",
    bottleTagline: "رزین خالص پامیر",
    benefitsTitle: "فواید",
    benefit1Title: "پشتیبانی طبیعی از انرژی",
    benefit1Desc:
      "برداشت پایدار از ارتفاعات دست‌نخورده پامیر، پشتیبانی از سرزندگی و استقامت.",
    benefit2Title: "غنی از بیش از ۵ ماده معدنی",
    benefit2Desc: "عناصر کمیاب طبیعی شامل اسید فولویک، آهن، روی و سلنیوم.",
    benefit3Title: "با دقت تصفیه شده",
    benefit3Desc:
      "سه بار فیلتر شده و آزمایشگاهی برای فلزات سنگین و خلوص میکروبی.",
    benefit4Title: "رزین گیاهی سنتی",
    benefit4Desc:
      "دست‌چین و خشک شده در آفتاب با استفاده از روش‌های چندهزار ساله پامیر.",
    aboutTitle: "درباره ما",
    aboutSubtitle: "داستان ما",
    aboutText1:
      "موملایی کوه‌های پامیر به صورت پایدار و با دست در ارتفاعات بیش از ۱۰۰۰ فوت در رشته‌کوه دست‌نخورده پامیر برداشت می‌شود. تعهد ما به خلوص با آزمایش‌های دقیق آزمایشگاهی آغاز می‌شود و با هر قطره رزین - خالص، برداشت وحشی و با منبع اخلاقی - به پایان می‌رسد.",
    aboutText2:
      "این سنت نسل‌ها از خانواده‌های کوهستانی را در بر می‌گیرد که زمین، فصل‌ها و ریتم مقدس برداشت را می‌شناسند.",
    aboutTag1: "از سال ۱۹۸۷",
    aboutTag2: "برداشت پایدار",
    aboutTag3: "خلوص آزمایشگاهی",
    showcaseTitle: "نمایش محصولات",
    product1: "رزین خالص - ۳۰ گرم",
    product2: "رزین خالص - ۶ گرم",
    product3: "رزین خالص - ۱۰۰ گرم",
    authTitle: "اصالت سلامت لوکس",
    authSubtitle: "فرآیند مرحله به مرحله تایید شده",
    badgeISO: "گواهی ISO",
    badgeTested: "تست شده توسط شخص ثالث",
    badgeWild: "وحشی",
    badgeHarvested: "برداشت شده",
    howToUseTitle: "طریقه مصرف",
    step1Title: "اندازه‌گیری",
    step1Desc: "به اندازه یک دانه برنج بردارید",
    step2Title: "مخلوط کردن",
    step2Desc: "در آب گرم یا شیر حل کنید",
    step3Title: "هم زدن",
    step3Desc: "به آرامی هم بزنید تا کاملا حل شود",
    step4Title: "شکوفا شدن",
    step4Desc: "با معده خالی بنوشید",
    labTitle: "گزارش‌های آزمایشگاه و گواهینامه‌ها",
    lab1Title: "محتوای اسید فولویک",
    lab1Date: "تاریخ گزارش: ۲۰۲۴.۰۶.۱۲",
    lab2Title: "تست فلزات سنگین",
    lab2Result: "قبول",
    lab2Detector: "آزمایشگاه: Eurofins Scientific",
    lab3Title: "خلوص میکروبی",
    lab3Desc: "شمارش کل هوازی",
    chooseTitle: "همین حالا سفارش دهید",
    chooseSubtitle: "۱۰۰٪ خام و فرآوری نشده • غنی از اسید فولویک",
    cardTitle: "رزین خالص موملایی",
    card1Size: "شیشه ۳۰ گرمی",
    card2Size: "شیشه ۶۰ گرمی",
    card3Size: "شیشه ۱۰۰ گرمی",
    cardFeat1: "≥۵٪ اسید فولویک",
    cardFeat1b: "≥۶۶٪ اسید فولویک",
    cardFeat2: "خلوص آزمایشگاهی",
    cardFeat3: "منشأ کوه‌های پامیر",
    btnInfo: "معلومات",
    btnWhatsappOrder: "خرید از وتسپ",
    badgePopular: "محبوب",
    reviewsTitle: "نظرات مشتریان",
    review1Text:
      '"من یک ماه است که از موملایی پامیر استفاده می‌کنم. افزایش انرژی فوق‌العاده است و کاملا طبیعی احساس می‌شود. بسیار توصیه می‌کنم!"',
    review1Name: "احمد ر.",
    review2Text:
      '"خلوص آن بی‌نظیر است. می‌توانید بگویید که این یک چیز واقعی است. استقامت من در طول تمرینات به طور قابل توجهی بهبود یافته است."',
    review2Name: "سارا م.",
    review3Text:
      '"حمل و نقل سریع و بسته‌بندی عالی. رزین به طور کامل در شیر گرم حل می‌شود. قطعا دوباره خرید خواهم کرد."',
    review3Name: "جان د.",
    reviewVerified: "خریدار تایید شده",
    faqTitle: "سوالات متداول",
    faq1Q: "آیا موملایی برای مصرف روزانه ایمن است؟",
    faq1A:
      "بله، موملایی به طور کلی برای مصرف روزانه در مقادیر توصیه شده ایمن است. قرن‌ها در طب سنتی استفاده شده است.",
    faq2Q: "چه مدت طول می‌کشد تا نتایج را ببینم؟",
    faq2A:
      "بیشتر کاربران گزارش می‌دهند که در عرض ۱-۲ هفته استفاده روزانه منظم، افزایش انرژی و سرزندگی را احساس می‌کنند. فواید کامل ممکن است ۴-۸ هفته طول بکشد.",
    faq3Q: "چه چیزی موملایی پامیر را متفاوت می‌کند؟",
    faq3A:
      "موملایی ما از کوه‌های دست‌نخورده پامیر در ارتفاع بیش از ۱۴۰۰۰ فوت برداشت وحشی می‌شود، به روش سنتی تصفیه می‌شود و برای خلوص و قدرت به طور دقیق آزمایشگاهی تست می‌شود.",
    faq4Q: "چگونه باید آن را ذخیره کنم؟",
    faq4A:
      "در مکانی خنک و خشک دور از نور مستقیم خورشید نگهداری کنید. پس از هر استفاده مطمئن شوید که درب آن محکم بسته شده است تا تازگی آن حفظ شود.",
    contactTitle: "با ما در تماس باشید",
    contactSubtitle: "به حلقه سلامت ارتفاع بپیوندید",
    contactInfoTitle: "اطلاعات تماس",
    contactAddress: "کوه‌های پامیر، افغانستان",
    contactFollow: "برای نکات سلامتی و پیشنهادات ویژه ما را دنبال کنید.",
    formName: "نام",
    formEmail: "ایمیل",
    formMessage: "پیام",
    btnSendMessage: "ارسال پیام",
    footerBrand: "کوه‌های پامیر",
    footerDesc: "رزین خالص پامیر، با منبع پایدار از بام جهان.",
    footerQuickLinks: "لینک‌های سریع",
    footerCustomerCare: "مراقبت از مشتری",
    footerShipping: "اطلاعات حمل و نقل",
    footerReturns: "سیاست بازگشت",
    footerPrivacy: "سیاست حریم خصوصی",
    footerTerms: "شرایط استفاده",
    footerLab: "گزارش‌های آزمایشگاه",
    footerNewsletter: "خبرنامه",
    footerJoin: "به حلقه سلامت ارتفاع بپیوندید",
    footerSubscribe: "اشتراک",
    footerCopyright:
      "&copy; 2026 Pamir Mountain Shilajit. All rights reserved.",
    modalTitle: "اطلاعات موملایی",
    modalMinerals: "• به طور طبیعی غنی از بیش از ۸۵ ماده معدنی کمیاب",
    modalFulvic: "• حاوی سطوح بالای اسید فولویک برای جذب",
    modalTraditional:
      "• به طور سنتی برای حمایت از انرژی و استقامت استفاده می‌شود",
    modalHarvested: "• برداشت شده از صخره‌های بلند پامیر",
    modalLabTested: "• آزمایش شده در آزمایشگاه برای خلوص و فلزات سنگین",

    // customer reviews da
    writeReview: "نظر خود را بنویسید",
    ratingLabel: "امتیاز شما",
    ratingPlaceholder: "امتیاز خود را انتخاب کنید",
    ratingDescriptions: ["بسیار بد", "بد", "متوسط", "خوب", "عالی"],
    nameLabel: "نام شما",
    namePlaceholder: "نام خود را وارد کنید",
    reviewLabel: "نظر شما",
    reviewPlaceholder: "تجربه خود را با محصول به اشتراک بگذارید...",
    submitReview: "ثبت نظر",
    submitting: "در حال ارسال...",
    successMessage: "✓ نظر شما با موفقیت ثبت شد!",
    fillAllFields: "لطفاً همه فیلدها را پر کنید",
    closeForm: "بستن فرم",
    writeReviewBtn: "✍ نوشتن نظر",
    showingReviews: "نمایش",
    reviewsCount: "نظر",
    sortBy: "مرتب‌سازی",
    sortNewest: "جدیدترین",
    sortHighest: "بالاترین امتیاز",
    sortLowest: "پایین‌ترین امتیاز",
    noReviews: "هنوز نظری ثبت نشده است. اولین نفر باشید!",
    verifiedBuyer: "خریدار تایید شده",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("preferredLang") || "en";
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "da" ? "rtl" : "ltr";
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
