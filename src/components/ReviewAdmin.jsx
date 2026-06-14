// ./src/components/ReviewAdmin.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * AdminDashboard Component
 * Complete admin panel with Reviews, Newsletter, and Settings
 * Includes Password Hint and Security Question features
 * Security question appears after 3 failed login attempts
 */
function AdminDashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("reviews");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Security Question states for login
  const [showSecurityQuestion, setShowSecurityQuestion] = useState(false);
  const [securityQuestionForLogin, setSecurityQuestionForLogin] = useState("");
  const [securityAnswerInput, setSecurityAnswerInput] = useState("");
  const [securityError, setSecurityError] = useState("");
  const [tempUserData, setTempUserData] = useState(null);

  // Failed login attempts tracking
  const [failedAttempts, setFailedAttempts] = useState(0);
  const MAX_ATTEMPTS = 3;

  // Data states
  const [reviews, setReviews] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // Settings states
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordHint, setPasswordHint] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");

  /**
   * Initialize default admin user
   */
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("adminUsers") || "[]");
    if (storedUsers.length === 0) {
      const defaultAdmin = {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin",
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("adminUsers", JSON.stringify([defaultAdmin]));
    }

    // Load failed attempts from localStorage
    const attempts = localStorage.getItem("failedLoginAttempts") || "0";
    setFailedAttempts(parseInt(attempts));
  }, []);

  /**
   * Load data from localStorage after authentication
   */
  useEffect(() => {
    if (isAuthenticated) {
      const storedReviews = JSON.parse(
        localStorage.getItem("customerReviews") || "[]",
      );
      setReviews(storedReviews);

      const storedSubscribers = JSON.parse(
        localStorage.getItem("newsletterSubscribers") || "[]",
      );
      setSubscribers(storedSubscribers);

      // Load hint and security question
      if (currentUser) {
        const hint =
          localStorage.getItem(`passwordHint_${currentUser.id}`) || "";
        const question =
          localStorage.getItem(`securityQuestion_${currentUser.id}`) || "";
        const answer =
          localStorage.getItem(`securityAnswer_${currentUser.id}`) || "";

        setPasswordHint(hint);
        setSecurityQuestion(question);
        setSecurityAnswer(answer);
      }
    }
  }, [isAuthenticated, currentUser]);

  /**
   * Handle admin login
   */
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("adminUsers") || "[]");
    const user = storedUsers.find((u) => u.username === loginUsername);

    if (!user) {
      setLoginError("Invalid username or password");
      setPassword("");
      setShowSecurityQuestion(false);
      return;
    }

    // Check if password is correct
    if (user.password === password) {
      // Successful login - reset failed attempts
      setIsAuthenticated(true);
      setCurrentUser(user);
      setLoginError("");
      setLoginUsername("");
      setPassword("");
      setShowSecurityQuestion(false);

      // Reset failed attempts counter
      localStorage.removeItem("failedLoginAttempts");
      setFailedAttempts(0);
      return;
    }

    // Password is wrong - increment failed attempts
    const currentAttempts = failedAttempts + 1;
    localStorage.setItem("failedLoginAttempts", currentAttempts.toString());
    setFailedAttempts(currentAttempts);

    // Check if max attempts reached and security question exists
    const question = localStorage.getItem(`securityQuestion_${user.id}`) || "";

    if (currentAttempts >= MAX_ATTEMPTS && question) {
      setSecurityQuestionForLogin(question);
      setTempUserData(user);
      setShowSecurityQuestion(true);
      setLoginError(
        `⚠️ ${MAX_ATTEMPTS} failed attempts. Please answer security question to reset password.`,
      );
    } else if (currentAttempts >= MAX_ATTEMPTS && !question) {
      setLoginError(
        `⚠️ ${MAX_ATTEMPTS} failed attempts. No security question set. Contact administrator.`,
      );
    } else {
      // Show remaining attempts
      const remaining = MAX_ATTEMPTS - currentAttempts;
      setLoginError(
        `❌ Incorrect password. ${remaining} attempt${
          remaining === 1 ? "" : "s"
        } remaining before security question appears.`,
      );
    }

    setPassword("");
  };

  /**
   * Handle security question verification
   */
  const handleSecurityQuestionSubmit = (e) => {
    e.preventDefault();

    if (!tempUserData) return;

    const storedAnswer =
      localStorage.getItem(`securityAnswer_${tempUserData.id}`) || "";

    if (
      securityAnswerInput.toLowerCase().trim() ===
      storedAnswer.toLowerCase().trim()
    ) {
      // Security question answered correctly - allow password reset
      const newPassword = prompt("Enter your new password (min 6 characters):");
      if (newPassword && newPassword.length >= 6) {
        const storedUsers = JSON.parse(
          localStorage.getItem("adminUsers") || "[]",
        );
        const updated = storedUsers.map((u) => {
          if (u.id === tempUserData.id) {
            return { ...u, password: newPassword };
          }
          return u;
        });

        localStorage.setItem("adminUsers", JSON.stringify(updated));

        // Reset failed attempts
        localStorage.removeItem("failedLoginAttempts");
        setFailedAttempts(0);

        alert(
          "✓ Password reset successfully! You can now login with your new password.",
        );

        setShowSecurityQuestion(false);
        setTempUserData(null);
        setSecurityAnswerInput("");
        setSecurityError("");
        setLoginError("");
      } else if (newPassword) {
        alert("Password must be at least 6 characters");
      }
    } else {
      setSecurityError("Incorrect answer. Please try again.");
    }
  };

  /**
   * Cancel security question and go back to login
   */
  const cancelSecurityQuestion = () => {
    setShowSecurityQuestion(false);
    setTempUserData(null);
    setSecurityAnswerInput("");
    setSecurityError("");
    setLoginError("");
  };

  /**
   * Logout from admin panel
   */
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setPassword("");
    setActiveTab("reviews");
  };

  // ==================== REVIEW FUNCTIONS ====================

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updated = reviews.filter((r) => r.id !== id);
      setReviews(updated);
      localStorage.setItem("customerReviews", JSON.stringify(updated));
    }
  };

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

  const clearAllReviews = () => {
    if (window.confirm("⚠️ Delete ALL reviews? This cannot be undone!")) {
      setReviews([]);
      localStorage.removeItem("customerReviews");
    }
  };

  // ==================== NEWSLETTER FUNCTIONS ====================

  const deleteSubscriber = (email) => {
    if (window.confirm(`Delete subscriber: ${email}?`)) {
      const updated = subscribers.filter((sub) => sub.email !== email);
      setSubscribers(updated);
      localStorage.setItem("newsletterSubscribers", JSON.stringify(updated));
    }
  };

  const clearAllSubscribers = () => {
    if (window.confirm("⚠️ Delete ALL subscribers? This cannot be undone!")) {
      setSubscribers([]);
      localStorage.removeItem("newsletterSubscribers");
    }
  };

  // ==================== SETTINGS FUNCTIONS ====================

  /**
   * Change current user password
   */
  const handleChangePassword = () => {
    if (!currentPasswordInput) {
      alert("Please enter your current password");
      return;
    }

    if (currentPasswordInput !== currentUser.password) {
      alert("Current password is incorrect");
      setCurrentPasswordInput("");
      return;
    }

    if (!newPassword || !confirmPassword) {
      alert("Please fill in all password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const updatedUsers = JSON.parse(localStorage.getItem("adminUsers") || "[]");
    const updated = updatedUsers.map((u) => {
      if (u.id === currentUser.id) {
        return { ...u, password: newPassword };
      }
      return u;
    });

    localStorage.setItem("adminUsers", JSON.stringify(updated));
    setCurrentUser({ ...currentUser, password: newPassword });

    setCurrentPasswordInput("");
    setNewPassword("");
    setConfirmPassword("");
    alert("✓ Password changed successfully!");
  };

  /**
   * Save password hint
   */
  const handleSaveHint = () => {
    if (!passwordHint.trim()) {
      alert("Please enter a password hint");
      return;
    }

    localStorage.setItem(`passwordHint_${currentUser.id}`, passwordHint);
    alert("✓ Password hint saved successfully!");
  };

  /**
   * Save security question and answer
   */
  const handleSaveSecurity = () => {
    if (!securityQuestion || !securityAnswer.trim()) {
      alert("Please select a question and provide an answer");
      return;
    }

    localStorage.setItem(
      `securityQuestion_${currentUser.id}`,
      securityQuestion,
    );
    localStorage.setItem(`securityAnswer_${currentUser.id}`, securityAnswer);
    alert("✓ Security question saved successfully!");
  };

  // ==================== LOGIN SCREEN ====================

  if (!isAuthenticated) {
    // Get password hint for current user
    const storedUsers = JSON.parse(localStorage.getItem("adminUsers") || "[]");
    const currentUserData = storedUsers.find(
      (u) => u.username === loginUsername,
    );
    const currentHint = currentUserData
      ? localStorage.getItem(`passwordHint_${currentUserData.id}`) || ""
      : "";

    const currentSecurityQuestion = currentUserData
      ? localStorage.getItem(`securityQuestion_${currentUserData.id}`) || ""
      : "";

    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="bg-black p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gold/30">
          <h2 className="text-3xl font-bold mb-6 text-center text-gold">
            🔒 Admin Login
          </h2>

          {loginError && (
            <div
              className={`px-4 py-3 rounded-lg mb-4 ${
                failedAttempts >= MAX_ATTEMPTS
                  ? "bg-red-900/50 border border-red-500 text-red-300"
                  : "bg-yellow-900/50 border border-yellow-500 text-yellow-300"
              }`}
            >
              {loginError}
            </div>
          )}

          {/* Security Question Form */}
          {showSecurityQuestion && securityQuestionForLogin ? (
            <form onSubmit={handleSecurityQuestionSubmit} className="space-y-4">
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                <p className="text-sm text-red-400 mb-2 font-bold">
                  ⚠️ Security Verification Required
                </p>
                <p className="text-white font-medium mb-2">
                  {securityQuestionForLogin}
                </p>
              </div>

              {securityError && (
                <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                  {securityError}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Answer
                </label>
                <input
                  type="text"
                  value={securityAnswerInput}
                  onChange={(e) => setSecurityAnswerInput(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                  placeholder="Enter your answer"
                  required
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gold text-primary py-3 px-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  ✓ Verify & Reset Password
                </button>
                <button
                  type="button"
                  onClick={cancelSecurityQuestion}
                  className="px-4 py-3 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            /* Regular Login Form */
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-primary py-3 px-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Login
              </button>
            </form>
          )}

          {/* Failed Attempts Warning */}
          {!showSecurityQuestion &&
            failedAttempts > 0 &&
            failedAttempts < MAX_ATTEMPTS && (
              <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-500/30 rounded-lg">
                <p className="text-xs text-yellow-400 text-center">
                  ⚠️ <span className="font-bold">Failed Attempts:</span>{" "}
                  {failedAttempts} / {MAX_ATTEMPTS}
                </p>
                <p className="text-xs text-yellow-500/70 text-center mt-1">
                  After {MAX_ATTEMPTS} failed attempts, security question will
                  be required
                </p>
              </div>
            )}

          {/* Password Hint Display - ONLY show after 1+ failed attempts */}
          {!showSecurityQuestion && failedAttempts >= 1 && currentHint && (
            <div className="mt-4 p-3 bg-gold/10 border border-gold/30 rounded-lg">
              <p className="text-xs text-gold text-center">
                💡 <span className="font-bold">Hint:</span> {currentHint}
              </p>
            </div>
          )}

          {/* Security Question Display - ONLY show after 3 failed attempts */}
          {!showSecurityQuestion &&
            failedAttempts >= MAX_ATTEMPTS &&
            currentUserData &&
            currentSecurityQuestion && (
              <div className="mt-2 p-3 bg-red-900/30 border border-red-500/30 rounded-lg">
                <p className="text-xs text-red-400 text-center">
                  🛡️ <span className="font-bold">Security Question:</span>{" "}
                  {currentSecurityQuestion}
                </p>
              </div>
            )}

          <p className="text-xs text-gray-500 mt-4 text-center">
            Default: admin / admin123
          </p>
        </div>
      </div>
    );
  }

  // ==================== ADMIN DASHBOARD ====================

  return (
    <div className="min-h-screen bg-bg py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gold">📊 Admin Dashboard</h2>
            <p className="text-gray-400 text-sm mt-1">
              Welcome, {currentUser?.username}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition font-bold"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gold/20 overflow-x-auto">
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 font-bold transition whitespace-nowrap ${
              activeTab === "reviews"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ⭐ Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setActiveTab("newsletter")}
            className={`px-6 py-3 font-bold transition whitespace-nowrap ${
              activeTab === "newsletter"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            📧 Newsletter ({subscribers.length})
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-3 font-bold transition whitespace-nowrap ${
              activeTab === "settings"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ⚙️ Settings
          </button>
        </div>

        {/* ==================== REVIEWS TAB ==================== */}
        {activeTab === "reviews" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black p-6 rounded-xl border border-gold/20">
                <p className="text-gray-400 text-sm">Total Reviews</p>
                <p className="text-3xl font-bold text-gold">{reviews.length}</p>
              </div>
              <div className="bg-black p-6 rounded-xl border border-gold/20">
                <p className="text-gray-400 text-sm">Average Rating</p>
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
              <div className="bg-black p-6 rounded-xl border border-gold/20">
                <p className="text-gray-400 text-sm">Verified Buyers</p>
                <p className="text-3xl font-bold text-green-400">
                  {reviews.filter((r) => r.verified).length}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={clearAllReviews}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-bold transition"
              >
                🗑 Clear All Reviews
              </button>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-black p-6 rounded-xl border border-gold/20"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-bold text-lg text-white">
                          {review.name}
                        </p>
                        {review.verified && (
                          <span className="bg-green-900/50 text-green-400 text-xs px-2 py-1 rounded font-bold border border-green-500/30">
                            ✓ Verified Buyer
                          </span>
                        )}
                      </div>
                      <p className="text-gold text-lg mb-2">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </p>
                      <p className="text-gray-300 mb-2">{review.text}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => toggleVerified(review.id)}
                        className={`px-4 py-2 rounded font-bold text-sm transition ${
                          review.verified
                            ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                      >
                        {review.verified
                          ? "✓ Remove Verified"
                          : "Mark as Verified"}
                      </button>

                      <button
                        onClick={() => deleteReview(review.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold text-sm transition"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {reviews.length === 0 && (
              <div className="bg-black p-12 rounded-xl border border-gold/20 text-center">
                <p className="text-gray-400 text-lg">No reviews found</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== NEWSLETTER TAB ==================== */}
        {activeTab === "newsletter" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black p-6 rounded-xl border border-gold/20">
                <p className="text-gray-400 text-sm">Total Subscribers</p>
                <p className="text-3xl font-bold text-gold">
                  {subscribers.length}
                </p>
              </div>
              <div className="bg-black p-6 rounded-xl border border-gold/20">
                <p className="text-gray-400 text-sm">Latest Subscriber</p>
                <p className="text-lg font-bold text-gold" dir="ltr">
                  {subscribers.length > 0
                    ? subscribers[subscribers.length - 1].email
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={clearAllSubscribers}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-bold transition"
              >
                🗑 Clear All Subscribers
              </button>
            </div>

            <div className="bg-black rounded-xl border border-gold/20 overflow-hidden">
              {subscribers.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-400 text-lg">No subscribers yet</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gold/10 border-b border-gold/20">
                    <tr>
                      <th className="text-left text-gold px-6 py-4 font-bold">
                        #
                      </th>
                      <th className="text-left text-gold px-6 py-4 font-bold">
                        Email
                      </th>
                      <th className="text-left text-gold px-6 py-4 font-bold">
                        Subscribed At
                      </th>
                      <th className="text-right text-gold px-6 py-4 font-bold">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((sub, index) => (
                      <tr
                        key={sub.email}
                        className="border-b border-gold/10 hover:bg-gold/5 transition"
                      >
                        <td className="px-6 py-4 text-gray-300">{index + 1}</td>
                        <td className="px-6 py-4 text-white" dir="ltr">
                          {sub.email}
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-sm">
                          {new Date(sub.subscribedAt).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => deleteSubscriber(sub.email)}
                            className="text-red-400 hover:text-red-300 font-medium transition"
                          >
                            🗑 Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* ==================== SETTINGS TAB ==================== */}
        {activeTab === "settings" && (
          <div className="space-y-8">
            {/* Change Password */}
            <div className="bg-black p-6 rounded-xl border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-4">
                🔐 Change Password
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPasswordInput}
                    onChange={(e) => setCurrentPasswordInput(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Enter your current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Enter new password (min 6 characters)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Confirm new password"
                  />
                </div>

                <button
                  onClick={handleChangePassword}
                  className="bg-gold text-primary px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
                >
                  🔐 Change Password
                </button>
              </div>
            </div>

            {/* Password Hint */}
            <div className="bg-black p-6 rounded-xl border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-4">
                💡 Password Hint
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Set a hint to help you remember your password. This will be
                shown on the login page.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password Hint
                  </label>
                  <input
                    type="text"
                    value={passwordHint}
                    onChange={(e) => setPasswordHint(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="e.g., My favorite mountain + birth year"
                  />
                </div>

                <button
                  onClick={handleSaveHint}
                  className="bg-gold text-primary px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
                >
                  💡 Save Hint
                </button>

                {passwordHint && (
                  <div className="mt-4 p-3 bg-gold/10 border border-gold/30 rounded-lg">
                    <p className="text-sm text-gold">
                      <span className="font-bold">Current Hint:</span>{" "}
                      {passwordHint}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Security Question */}
            <div className="bg-black p-6 rounded-xl border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-4">
                🛡️ Security Question
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Set a security question for account recovery. This will appear
                after 3 failed login attempts.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Question
                  </label>
                  <select
                    value={securityQuestion}
                    onChange={(e) => setSecurityQuestion(e.target.value)}
                    className="w-full px-4 py-2 bg-black border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                  >
                    <option value="" className="bg-black text-white">
                      -- Select a question --
                    </option>
                    <option
                      value="What is your favorite mountain?"
                      className="bg-black text-white"
                    >
                      What is your favorite mountain?
                    </option>
                    <option
                      value="What year were you born?"
                      className="bg-black text-white"
                    >
                      What year were you born?
                    </option>
                    <option
                      value="What is your favorite color?"
                      className="bg-black text-white"
                    >
                      What is your favorite color?
                    </option>
                    <option
                      value="What city were you born in?"
                      className="bg-black text-white"
                    >
                      What city were you born in?
                    </option>
                    <option
                      value="What is your pet's name?"
                      className="bg-black text-white"
                    >
                      What is your pet's name?
                    </option>
                    <option
                      value="What is your mother's maiden name?"
                      className="bg-black text-white"
                    >
                      What is your mother's maiden name?
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Answer
                  </label>
                  <input
                    type="text"
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Enter your answer"
                  />
                </div>

                <button
                  onClick={handleSaveSecurity}
                  className="bg-gold text-primary px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
                >
                  🛡️ Save Security Question
                </button>

                {securityQuestion && securityAnswer && (
                  <div className="mt-4 p-3 bg-gold/10 border border-gold/30 rounded-lg">
                    <p className="text-sm text-gold">
                      <span className="font-bold">Question:</span>{" "}
                      {securityQuestion}
                    </p>
                    <p className="text-sm text-gold mt-1">
                      <span className="font-bold">Answer:</span>{" "}
                      {"•".repeat(securityAnswer.length)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
