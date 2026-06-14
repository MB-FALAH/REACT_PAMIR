// ./src/components/ReviewModal.jsx
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * ReviewModal Component
 * Modal form for submitting customer reviews
 * Includes character limit of 300 characters
 */
function ReviewModal({ isOpen, onClose, onReviewSubmit }) {
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_CHARACTERS = 300;

  /**
   * Handle review text change with character limit
   */
  const handleReviewTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARACTERS) {
      setReviewText(text);
      setError('');
    } else {
      setError(`Maximum ${MAX_CHARACTERS} characters allowed`);
    }
  };

  /**
   * Reset form fields
   */
  const resetForm = () => {
    setRating(0);
    setName('');
    setReviewText('');
    setError('');
    setIsSubmitting(false);
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!rating) {
      setError('Please select a rating');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!reviewText.trim()) {
      setError('Please write your review');
      return;
    }

    if (reviewText.length > MAX_CHARACTERS) {
      setError(`Review cannot exceed ${MAX_CHARACTERS} characters`);
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
      verified: false,
    };

    // Save to localStorage
    const existingReviews = JSON.parse(
      localStorage.getItem('customerReviews') || '[]',
    );
    const updatedReviews = [newReview, ...existingReviews];
    localStorage.setItem('customerReviews', JSON.stringify(updatedReviews));

    // Call parent callback
    onReviewSubmit(newReview);

    // Reset and close
    setTimeout(() => {
      resetForm();
      onClose();
    }, 500);
  };

  /**
   * Handle modal close
   */
  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#222222] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gold/30">
        {/* Header */}
        <div className="sticky top-0 bg-[#222222] border-b border-gold/20 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gold">{t.writeReview}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              {t.ratingLabel}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-4xl transition-transform hover:scale-110"
                >
                  <span
                    className={
                      star <= (hoverRating || rating)
                        ? 'text-gold'
                        : 'text-gray-600'
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-gold mt-2">
                {t.ratingDescriptions[rating - 1]}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
              placeholder={t.namePlaceholder}
              required
            />
          </div>

          {/* Review Text with Character Counter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t.reviewLabel}
            </label>
            <textarea
              value={reviewText}
              onChange={handleReviewTextChange}
              className={`w-full px-4 py-3 bg-white/5 border text-white rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none ${
                reviewText.length > MAX_CHARACTERS
                  ? 'border-red-500'
                  : 'border-gold/30'
              }`}
              placeholder={t.reviewPlaceholder}
              rows={6}
              required
            />

            {/* Character Counter */}
            <div className="flex justify-between items-center mt-2">
              <div className="text-sm">
                {reviewText.length > MAX_CHARACTERS ? (
                  <span className="text-red-400 font-bold">
                    ⚠️ Maximum {MAX_CHARACTERS} characters exceeded
                  </span>
                ) : (
                  <span className="text-gray-400">
                    <span
                      className={
                        reviewText.length > 250 ? 'text-yellow-400' : ''
                      }
                    >
                      {reviewText.length}
                    </span>
                    <span className="text-gray-500">
                      {' '}
                      / {MAX_CHARACTERS} characters
                    </span>
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-400">
                {MAX_CHARACTERS - reviewText.length > 0 ? (
                  <span>
                    <span
                      className={
                        MAX_CHARACTERS - reviewText.length < 50
                          ? 'text-yellow-400'
                          : ''
                      }
                    >
                      {MAX_CHARACTERS - reviewText.length}
                    </span>
                    <span className="text-gray-500"> characters remaining</span>
                  </span>
                ) : (
                  <span className="text-red-400 font-bold">
                    0 characters remaining
                  </span>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  reviewText.length > MAX_CHARACTERS
                    ? 'bg-red-500'
                    : reviewText.length > 250
                      ? 'bg-yellow-500'
                      : 'bg-gold'
                }`}
                style={{
                  width: `${Math.min((reviewText.length / MAX_CHARACTERS) * 100, 100)}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting || reviewText.length > MAX_CHARACTERS}
              className={`flex-1 py-3 rounded-lg font-bold transition ${
                isSubmitting || reviewText.length > MAX_CHARACTERS
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gold text-primary hover:bg-yellow-400'
              }`}
            >
              {isSubmitting ? t.submitting : t.submitReview}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition"
            >
              {t.closeForm}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;
