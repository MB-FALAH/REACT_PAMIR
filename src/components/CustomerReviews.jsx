// ./src/components/CustomerReviews.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import ReviewModal from "./ReviewModal";

/**
 * CustomerReviews Component
 * Displays customer reviews with ratings, sorting, and modal submission form
 */
function CustomerReviews() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  /**
   * Delete a review by ID
   */
  const handleDeleteReview = (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updatedReviews = reviews.filter((review) => review.id !== reviewId);
      setReviews(updatedReviews);
      localStorage.setItem("customerReviews", JSON.stringify(updatedReviews));
    }
  };

  /**
   * Load reviews from localStorage on component mount
   * Initialize with default reviews if empty
   */
  useEffect(() => {
    const storedReviews = JSON.parse(
      localStorage.getItem("customerReviews") || "[]",
    );

    if (storedReviews.length === 0) {
      const defaultReviews = [
        {
          id: 1,
          name: t.review1Name,
          rating: 5,
          text: t.review1Text.replace(/"/g, ""),
          date: new Date().toISOString(),
          verified: true,
        },
        {
          id: 2,
          name: t.review2Name,
          rating: 5,
          text: t.review2Text.replace(/"/g, ""),
          date: new Date().toISOString(),
          verified: true,
        },
        {
          id: 3,
          name: t.review3Name,
          rating: 5,
          text: t.review3Text.replace(/"/g, ""),
          date: new Date().toISOString(),
          verified: true,
        },
      ];
      setReviews(defaultReviews);
      localStorage.setItem("customerReviews", JSON.stringify(defaultReviews));
    } else {
      setReviews(storedReviews);
    }
  }, [t]);

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, review) => acc + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  // Sort reviews based on selected criteria
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0;
  });

  // Calculate rating distribution (5-star to 1-star)
  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    stars: star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage:
      reviews.length > 0
        ? (reviews.filter((r) => r.rating === star).length / reviews.length) *
          100
        : 0,
  }));

  /**
   * Handle new review submission
   * Adds new review to the top of the list
   */
  const handleNewReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div>
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              {t.reviewsTitle}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>

            {/* Average rating display */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="text-5xl font-bold text-white">
                {averageRating}
              </div>
              <div>
                <div className="flex text-gold text-2xl">
                  {"★".repeat(Math.round(averageRating))}
                  {"☆".repeat(5 - Math.round(averageRating))}
                </div>
                <p className="text-gray-400 mt-1">
                  {reviews.length} {t.reviewsCount}
                </p>
              </div>
            </div>

            {/* Rating distribution bars */}
            <div className="mt-8 max-w-md mx-auto space-y-2">
              {ratingDistribution.map(({ stars, count, percentage }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-white w-3">{stars}</span>
                  <span className="text-gold">★</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gold h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-400 text-sm w-8">{count}</span>
                </div>
              ))}
            </div>

            {/* Button to open review modal */}
            <button
              onClick={() => setShowModal(true)}
              className="mt-8 bg-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t.writeReviewBtn}
            </button>
          </div>

          {/* Review Modal Component */}
          <ReviewModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onReviewSubmit={handleNewReview}
          />

          {/* Sorting controls */}
          {reviews.length > 0 && (
            <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-white">
                {t.showingReviews} {reviews.length} {t.reviewsCount}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-gold w-full sm:w-auto"
              >
                <option value="newest">{t.sortNewest}</option>
                <option value="highest">{t.sortHighest}</option>
                <option value="lowest">{t.sortLowest}</option>
              </select>
            </div>
          )}

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sortedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#222222] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Star rating display */}
                <div className="flex text-gold mb-4">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* Review text */}
                <p className="text-gray-300 mb-6 italic">"{review.text}"</p>

                {/* Reviewer info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary font-bold">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-xs text-gray-400">
                        {review.verified
                          ? t.verifiedBuyer
                          : new Date(review.date).toLocaleDateString(
                              document.documentElement.lang === "da"
                                ? "fa-IR"
                                : "en-US",
                            )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Delete button - ONLY show for non-verified reviews */}
                {!review.verified && (
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    className="mt-4 text-red-400 hover:text-red-500 text-sm flex items-center gap-1 transition-colors"
                  >
                    🗑 Delete Review
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Empty state message */}
          {reviews.length === 0 && (
            <div className="text-center text-gray-400 py-12">{t.noReviews}</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CustomerReviews;
