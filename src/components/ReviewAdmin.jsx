import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getUser, logoutUser } from "../utils/authApi";
import {
  getSubscribers,
  clearSubscribers,
} from "../utils/newsletterApi";
import {
  getReviews,
  deleteReview as deleteReviewApi,
  clearReviews, // ✅ FIX ADDED
} from "../utils/reviewApi";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("reviews");
  const [reviews, setReviews] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [passwordHint, setPasswordHint] = useState("");

  // ================= LOAD DATA =================
  const loadData = async () => {
    try {
      setLoading(true);

      const reviewRes = await getReviews();
      if (reviewRes.success) setReviews(reviewRes.reviews);

      const subscriberRes = await getSubscribers();
      if (subscriberRes.success) setSubscribers(subscriberRes.subscribers);

      const userRes = await getUser();
      if (userRes.success) setUser(userRes.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ================= LOGOUT =================
  const LOGOUT = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // ================= DELETE REVIEW =================
  const deleteReview = async (id) => {
    const confirmDelete = window.confirm("Delete this review?");
    if (!confirmDelete) return;

    try {
      await deleteReviewApi(id);
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.log(err);
      alert("Failed to delete review");
    }
  };

  // ================= TOGGLE VERIFY =================
  const toggleVerified = (id) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, verified: !r.verified } : r
      )
    );
  };

  // ================= CLEAR REVIEWS (FIXED) =================
  const clearAllReviews = async () => {
    const confirmDelete = window.confirm("Delete ALL reviews?");
    if (!confirmDelete) return;

    try {
      const res = await clearReviews();

      if (res.success) {
        setReviews([]); 
      }
    } catch (error) {
      console.log(error);
      alert("Failed to clear reviews");
    }
  };

  // ================= CLEAR SUBSCRIBERS =================
const clearAllSubscribers = async () => {
  const confirmDelete = window.confirm(
    "Delete ALL subscribers?"
  );

  if (!confirmDelete) return;

  try {
    const res = await clearSubscribers();

    if (res.success) {
      setSubscribers([]);
      alert("All subscribers deleted");
    }
  } catch (error) {
    console.log(error);
    alert("Failed to delete subscribers");
  }
};

  // ================= SETTINGS =================
  const handleSaveHint = () => {
    alert("Hint Saved");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg py-8 text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gold">
            📊 Admin Dashboard
          </h2>

          <p className="text-gray-400 mt-2">
            Logged in as: {user?.username}
          </p>
        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-8 border-b border-gold/20">

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-3 ${
              activeTab === "reviews"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400"
            }`}
          >
            Reviews ({reviews.length})
          </button>

          <button
            onClick={() => setActiveTab("newsletter")}
            className={`px-5 py-3 ${
              activeTab === "newsletter"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400"
            }`}
          >
            Newsletter ({subscribers.length})
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`px-5 py-3 ${
              activeTab === "settings"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400"
            }`}
          >
            Settings
          </button>

        </div>

        {/* ================= REVIEWS ================= */}
        {activeTab === "reviews" && (
          <div>

            <div className="flex gap-3 mb-6">
              <button
                onClick={clearAllReviews}
                className="bg-red-600 px-5 py-2 rounded"
              >
                Clear Reviews
              </button>

              <button
                onClick={LOGOUT}
                className="bg-gray-700 px-5 py-2 rounded"
              >
                Logout
              </button>
            </div>

            {reviews.length === 0 ? (
              <p className="text-gray-400">No reviews found</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-black p-6 rounded-xl"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">{review.name}</h3>
                        <p className="text-gray-400">{review.email}</p>
                      </div>

                      <div className="text-gold">
                        {"★".repeat(review.rating)}
                      </div>
                    </div>

                    <p className="mt-3 text-gray-300">{review.text}</p>

                    <p className="text-gray-500 text-sm mt-2">
                      {new Date(review.date).toLocaleString()}
                    </p>

                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => toggleVerified(review.id)}
                        className="bg-green-600 px-4 py-2 rounded"
                      >
                        {review.verified ? "Verified" : "Verify"}
                      </button>

                      <button
                        onClick={() => deleteReview(review.id)}
                        className="bg-red-600 px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

{/* ================= NEWSLETTER ================= */}
{activeTab === "newsletter" && (
  <div>

    <div className="mb-6 flex gap-3">
      <button
        onClick={loadData}
        className="bg-blue-600 px-5 py-2 rounded"
      >
        Refresh
      </button>

      <button
        onClick={clearAllSubscribers}
        className="bg-red-600 px-5 py-2 rounded"
      >
        Clear Subscribers
      </button>
    </div>

    {(!subscribers || subscribers.length === 0) ? (
      <p className="text-gray-400">No Subscribers Found</p>
    ) : (
      <div className="space-y-3">
        {subscribers.map((sub) => (
          <div
            key={sub.id}
            className="bg-black p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="text-white">{sub.email}</p>

              <p className="text-gray-500 text-sm">
                {sub.created_at
                  ? new Date(sub.created_at).toLocaleString()
                  : "No date"}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}

  </div>
)}

        {/* ================= SETTINGS ================= */}
   {/* ================= SETTINGS ================= */}
{activeTab === "settings" && (
  <div className="space-y-6">

    {/* Password Hint */}
    <div className="bg-black p-6 rounded-xl border border-gold/20">
      <h3 className="text-gold font-bold text-xl mb-3">
        Password Hint
      </h3>

      <input
        value={passwordHint}
        onChange={(e) => setPasswordHint(e.target.value)}
        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
        placeholder="Enter password hint"
      />

      <button
        onClick={handleSaveHint}
        className="mt-4 bg-gold text-black px-5 py-2 rounded-lg font-bold"
      >
        Save Hint
      </button>
    </div>

    {/* Security */}
    <div className="bg-black p-6 rounded-xl border border-gold/20">
      <h3 className="text-gold font-bold text-xl mb-3">
        Security
      </h3>

      <p className="text-gray-400">
        Security questions feature coming soon.
      </p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Security Question"
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 mb-3"
        />

        <input
          type="text"
          placeholder="Security Answer"
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
        />

        <button
          className="mt-4 bg-gold text-black px-5 py-2 rounded-lg font-bold"
        >
          Save Security Settings
        </button>
      </div>
    </div>

    {/* Account Info */}
    <div className="bg-black p-6 rounded-xl border border-gold/20">
      <h3 className="text-gold font-bold text-xl mb-3">
        Account Information
      </h3>

      <p className="text-gray-300">
        Username:
        <span className="text-white font-bold ml-2">
          {user?.username}
        </span>
      </p>

      <p className="text-gray-400 mt-2">
        Admin Dashboard Access
      </p>
    </div>

  </div>
)}

      </div>
    </div>
  );
}

export default AdminDashboard;