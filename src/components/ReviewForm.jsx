// ./src/components/ReviewForm.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * ReviewForm Component
 * Allows customers to submit reviews with star ratings
 */
function ReviewForm({ onReviewSubmit }) {
  const { t } = useLanguage();

  // Form state management
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Handle form submission
   * Validates inputs and saves review to localStorage
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    if (rating === 0 || !name.trim() || !reviewText.trim()) {
      alert(t.fillAllFields);
      return;
    }

    setIsSubmitting(true);

    // Create new review object
    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: rating,
      text: reviewText.trim(),
      date: new Date().toISOString(),
      verified: false, // User-submitted reviews are not verified buyers
    };

    // Save to localStorage (retrieve existing reviews first)
    const existingReviews = JSON.parse(
      localStorage.getItem("customerReviews") || "[]",
    );
    existingReviews.push(newReview);
    localStorage.setItem("customerReviews", JSON.stringify(existingReviews));

    // Notify parent component
    onReviewSubmit(newReview);

    // Reset form fields
    setName("");
    setReviewText("");
    setRating(0);
    setIsSubmitting(false);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        {t.writeReview}
      </h3>

      {/* Success message display */}
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {t.successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Star rating selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.ratingLabel} *
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-3xl focus:outline-none transition-transform hover:scale-110"
              >
                {star <= (hoverRating || rating) ? (
                  <span className="text-gold">★</span>
                ) : (
                  <span className="text-gray-300">★</span>
                )}
              </button>
            ))}
          </div>
          {/* Display rating description */}
          {rating > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              {t.ratingDescriptions[rating - 1]}
            </p>
          )}
        </div>

        {/* Name input field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.nameLabel} *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t.namePlaceholder}
            required
          />
        </div>

        {/* Review text area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.reviewLabel} *
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t.reviewPlaceholder}
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.submitting : t.submitReview}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
