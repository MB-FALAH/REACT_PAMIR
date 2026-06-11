// ./src/components/ReviewAdmin.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * ReviewAdmin Component
 * Admin panel for managing customer reviews
 * Protected by simple password authentication
 */
function ReviewAdmin() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Admin password (in production, use proper authentication)
  const ADMIN_PASSWORD = "admin123"; // Change this!

  /**
   * Load reviews from localStorage
   */
  useEffect(() => {
    if (isAuthenticated) {
      const storedReviews = JSON.parse(
        localStorage.getItem("customerReviews") || "[]",
      );
      setReviews(storedReviews);
    }
  }, [isAuthenticated]);

  /**
   * Handle admin login
   */
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password");
      setPassword("");
    }
  };

  /**
   * Delete a single review
   */
  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updated = reviews.filter((r) => r.id !== id);
      setReviews(updated);
      localStorage.setItem("customerReviews", JSON.stringify(updated));
    }
  };

  /**
   * Toggle verified status of a review
   * Marks a review as verified buyer or removes verification
   */
  const toggleVerified = (id) => {
    const updated = reviews.map((r) => {
      if (r.id === id) {
        return { ...r, verified: !r.verified };
      }
      return r;
    });
    setReviews(updated);
    localStorage.setItem("customerReviews", JSON.stringify(updated));
  };

  /**
   * Clear all reviews
   */
  const clearAllReviews = () => {
    if (window.confirm("⚠️ Delete ALL reviews? This cannot be undone!")) {
      setReviews([]);
      localStorage.removeItem("customerReviews");
    }
  };

  /**
   * Logout from admin panel
   */
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🔒 Admin Login
          </h2>

          {loginError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Default password: admin123 (change in code)
          </p>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">📊 Review Management</h2>
          <button
            onClick={handleLogout}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Total Reviews</p>
            <p className="text-3xl font-bold text-primary">{reviews.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Average Rating</p>
            <p className="text-3xl font-bold text-gold">
              {reviews.length > 0
                ? (
                    reviews.reduce((acc, r) => acc + r.rating, 0) /
                    reviews.length
                  ).toFixed(1)
                : "0"}
              ★
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Verified Buyers</p>
            <p className="text-3xl font-bold text-green-600">
              {reviews.filter((r) => r.verified).length}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mb-6">
          <button
            onClick={clearAllReviews}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-bold"
          >
            🗑 Clear All Reviews
          </button>
        </div>

        {/* Reviews list */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-lg">{review.name}</p>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">
                        ✓ Verified Buyer
                      </span>
                    )}
                  </div>
                  <p className="text-gold text-lg mb-2">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                  <p className="text-gray-700 mb-2">{review.text}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(review.date).toLocaleString()}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-2 shrink-0">
                  {/* Toggle Verified button */}
                  <button
                    onClick={() => toggleVerified(review.id)}
                    className={`px-4 py-2 rounded font-bold text-sm transition-colors ${
                      review.verified
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                  >
                    {review.verified ? "✓ Remove Verified" : "Mark as Verified"}
                  </button>

                  {/* Delete button */}
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-bold text-sm transition-colors"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="bg-white p-12 rounded-lg shadow text-center">
            <p className="text-gray-500 text-lg">No reviews found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewAdmin;
