// ./src/components/ReviewForm.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * ReviewModal Component
 * Modal popup for writing reviews with email auto-fill
 */
function ReviewModal({ isOpen, onClose, onReviewSubmit }) {
  const { t } = useLanguage();

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Load saved user info from localStorage when modal opens
   */
  useEffect(() => {
    if (isOpen) {
      const savedName = localStorage.getItem("reviewerName");
      const savedEmail = localStorage.getItem("reviewerEmail");
      if (savedName) setName(savedName);
      if (savedEmail) setEmail(savedEmail);
    }
  }, [isOpen]);

  /**
   * Auto-fill name from email when email changes
   */
  useEffect(() => {
    if (email && !name) {
      const emailName = email.split("@")[0];
      const cleanName = emailName.replace(/[0-9._]/g, " ").trim();
      if (cleanName) {
        setName(
          cleanName
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        );
      }
    }
  }, [email, name]);

  /**
   * Close modal on Escape key press
   */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || !name.trim() || !email.trim() || !reviewText.trim()) {
      alert(t.fillAllFields);
      return;
    }

    setIsSubmitting(true);

    // Save user info to localStorage
    localStorage.setItem("reviewerName", name.trim());
    localStorage.setItem("reviewerEmail", email.trim());

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      rating: rating,
      text: reviewText.trim(),
      date: new Date().toISOString(),
      verified: false,
    };

    const existingReviews = JSON.parse(
      localStorage.getItem("customerReviews") || "[]",
    );
    existingReviews.push(newReview);
    localStorage.setItem("customerReviews", JSON.stringify(existingReviews));

    onReviewSubmit(newReview);

    // Reset form
    setReviewText("");
    setRating(0);
    setName("");
    setEmail("");
    setIsSubmitting(false);
    setShowSuccess(true);

    // Close modal after showing success message
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  /**
   * Handle backdrop click to close modal
   */
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h3 id="modal-title" className="text-2xl font-bold text-primary">
            {t.writeReview}
          </h3>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus:text-gold"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-medium">{t.successMessage}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Star rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.ratingLabel} *
              </label>
              <div className="flex gap-3 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-5xl focus:outline-none transition-all hover:scale-125"
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  >
                    {star <= (hoverRating || rating) ? (
                      <span className="text-gold drop-shadow-lg">★</span>
                    ) : (
                      <span className="text-gray-300">★</span>
                    )}
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {t.ratingDescriptions[rating - 1]}
                </p>
              )}
            </div>

            {/* Email input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Name input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.nameLabel} *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t.namePlaceholder}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Name is auto-filled from your email, but you can change it
              </p>
            </div>

            {/* Review text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reviewLabel} *
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder={t.reviewPlaceholder}
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {t.submitting}
                </span>
              ) : (
                t.submitReview
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
