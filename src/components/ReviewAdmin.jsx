// ./src/components/ReviewAdmin.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * AdminDashboard Component
 * Complete admin panel with Reviews, Newsletter, Images, and Settings
 */
function AdminDashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("reviews");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Data states
  const [reviews, setReviews] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [images, setImages] = useState([]);
  const [users, setUsers] = useState([]);

  // Settings states
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "manager",
  });

  /**
   * Initialize default admin user if not exists
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
      setUsers([defaultAdmin]);
    } else {
      setUsers(storedUsers);
    }
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

      const storedImages = JSON.parse(
        localStorage.getItem("siteImages") || "[]",
      );
      setImages(storedImages);
    }
  }, [isAuthenticated]);

  /**
   * Handle admin login
   */
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("adminUsers") || "[]");
    const user = storedUsers.find(
      (u) => u.username === loginUsername && u.password === password,
    );

    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      setLoginError("");
      setLoginUsername("");
      setPassword("");
    } else {
      setLoginError("Invalid username or password");
      setPassword("");
    }
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

  // ==================== IMAGE MANAGEMENT FUNCTIONS ====================

  const [newImage, setNewImage] = useState({
    name: "",
    location: "home",
    file: null,
    preview: null,
  });

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage({
          ...newImage,
          file: file,
          preview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    if (!newImage.name || !newImage.preview) {
      alert("Please provide image name and select a file");
      return;
    }

    const image = {
      id: Date.now(),
      name: newImage.name,
      location: newImage.location,
      data: newImage.preview,
      uploadedAt: new Date().toISOString(),
    };

    const updated = [...images, image];
    setImages(updated);
    localStorage.setItem("siteImages", JSON.stringify(updated));

    setNewImage({ name: "", location: "home", file: null, preview: null });
    alert("Image uploaded successfully!");
  };

  const deleteImage = (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const updated = images.filter((img) => img.id !== id);
      setImages(updated);
      localStorage.setItem("siteImages", JSON.stringify(updated));
    }
  };

  const updateImageLocation = (id, newLocation) => {
    const updated = images.map((img) => {
      if (img.id === id) {
        return { ...img, location: newLocation };
      }
      return img;
    });
    setImages(updated);
    localStorage.setItem("siteImages", JSON.stringify(updated));
  };

  // ==================== SETTINGS FUNCTIONS ====================

  /**
   * Change current user password
   */
  const handleChangePassword = () => {
    // Verify current password
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

    const updatedUsers = users.map((u) => {
      if (u.id === currentUser.id) {
        return { ...u, password: newPassword };
      }
      return u;
    });

    setUsers(updatedUsers);
    localStorage.setItem("adminUsers", JSON.stringify(updatedUsers));
    setCurrentUser({ ...currentUser, password: newPassword });

    setCurrentPasswordInput("");
    setNewPassword("");
    setConfirmPassword("");
    alert("✓ Password changed successfully!");
  };

  /**
   * Add new user (only manager or guest roles)
   */
  const handleAddUser = () => {
    if (!newUser.username || !newUser.password) {
      alert("Please fill in all fields");
      return;
    }

    if (newUser.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (newUser.role === "admin" && currentUser.role !== "admin") {
      alert("Only admins can create admin users");
      return;
    }

    const exists = users.find((u) => u.username === newUser.username);
    if (exists) {
      alert("Username already exists");
      return;
    }

    const user = {
      id: Date.now(),
      username: newUser.username,
      password: newUser.password,
      role: newUser.role,
      createdAt: new Date().toISOString(),
    };

    const updated = [...users, user];
    setUsers(updated);
    localStorage.setItem("adminUsers", JSON.stringify(updated));

    setNewUser({ username: "", password: "", role: "manager" });
    alert("✓ User added successfully!");
  };

  /**
   * Delete user
   */
  const deleteUser = (id) => {
    if (users.length === 1) {
      alert("Cannot delete the last user");
      return;
    }

    if (id === currentUser.id) {
      alert("Cannot delete your own account");
      return;
    }

    if (window.confirm("Are you sure you want to delete this user?")) {
      const updated = users.filter((u) => u.id !== id);
      setUsers(updated);
      localStorage.setItem("adminUsers", JSON.stringify(updated));
    }
  };

  // ==================== LOGIN SCREEN ====================

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="bg-black p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gold/30">
          <h2 className="text-3xl font-bold mb-6 text-center text-gold">
            🔒 Admin Login
          </h2>

          {loginError && (
            <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4">
              {loginError}
            </div>
          )}

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
              Welcome, {currentUser?.username} ({currentUser?.role})
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
            onClick={() => setActiveTab("images")}
            className={`px-6 py-3 font-bold transition whitespace-nowrap ${
              activeTab === "images"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🖼️ Images ({images.length})
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

        {/* ==================== IMAGES TAB ==================== */}
        {activeTab === "images" && (
          <div>
            <div className="bg-black p-6 rounded-xl border border-gold/20 mb-8">
              <h3 className="text-xl font-bold text-gold mb-4">
                📤 Upload New Image
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Image Name
                  </label>
                  <input
                    type="text"
                    value={newImage.name}
                    onChange={(e) =>
                      setNewImage({ ...newImage, name: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="e.g., Hero Background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Location
                  </label>
                  <select
                    value={newImage.location}
                    onChange={(e) =>
                      setNewImage({ ...newImage, location: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-black border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                  >
                    <option value="home" className="bg-black text-white">
                      Home Page
                    </option>
                    <option value="about" className="bg-black text-white">
                      About Section
                    </option>
                    <option value="products" className="bg-black text-white">
                      Products Section
                    </option>
                    <option value="order" className="bg-black text-white">
                      Order Section
                    </option>
                    <option value="contact" className="bg-black text-white">
                      Contact Section
                    </option>
                    <option value="footer" className="bg-black text-white">
                      Footer
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Image File
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="w-full px-4 py-2 bg-white/5 border border-gold/30 text-white rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gold file:text-primary file:font-bold hover:file:bg-yellow-400"
                />
              </div>

              {newImage.preview && (
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Preview:</p>
                  <img
                    src={newImage.preview}
                    alt="Preview"
                    className="max-w-xs rounded-lg border border-gold/30"
                  />
                </div>
              )}

              <button
                onClick={handleImageUpload}
                className="bg-gold text-primary px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                📤 Upload Image
              </button>
            </div>

            <div className="bg-black rounded-xl border border-gold/20 overflow-hidden">
              <div className="p-6 border-b border-gold/20">
                <h3 className="text-xl font-bold text-gold">
                  🖼️ Uploaded Images ({images.length})
                </h3>
              </div>

              {images.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-400 text-lg">
                    No images uploaded yet
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {images.map((img) => (
                    <div
                      key={img.id}
                      className="bg-white/5 rounded-lg border border-gold/20 overflow-hidden"
                    >
                      <img
                        src={img.data}
                        alt={img.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-white mb-2">
                          {img.name}
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Location: {img.location}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          {new Date(img.uploadedAt).toLocaleDateString()}
                        </p>

                        <div className="flex gap-2">
                          <select
                            value={img.location}
                            onChange={(e) =>
                              updateImageLocation(img.id, e.target.value)
                            }
                            className="flex-1 px-2 py-1 bg-black border border-gold/30 text-white text-sm rounded focus:ring-2 focus:ring-gold outline-none"
                          >
                            <option
                              value="home"
                              className="bg-black text-white"
                            >
                              Home
                            </option>
                            <option
                              value="about"
                              className="bg-black text-white"
                            >
                              About
                            </option>
                            <option
                              value="products"
                              className="bg-black text-white"
                            >
                              Products
                            </option>
                            <option
                              value="order"
                              className="bg-black text-white"
                            >
                              Order
                            </option>
                            <option
                              value="contact"
                              className="bg-black text-white"
                            >
                              Contact
                            </option>
                            <option
                              value="footer"
                              className="bg-black text-white"
                            >
                              Footer
                            </option>
                          </select>
                          <button
                            onClick={() => deleteImage(img.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm font-bold"
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

            {/* User Management */}
            <div className="bg-black p-6 rounded-xl border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-4">
                👥 User Management
              </h3>

              {/* Add New User */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-bold text-white mb-3">Add New User</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  <input
                    type="text"
                    value={newUser.username}
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                    className="px-4 py-2 bg-black border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="px-4 py-2 bg-black border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Password (min 6 chars)"
                  />
                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                    className="px-4 py-2 bg-black border border-gold/30 text-white rounded-lg focus:ring-2 focus:ring-gold outline-none"
                  >
                    <option value="manager" className="bg-black text-white">
                      Manager
                    </option>
                    <option value="guest" className="bg-black text-white">
                      Guest
                    </option>
                  </select>
                </div>
                <button
                  onClick={handleAddUser}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition"
                >
                  ➕ Add User
                </button>
              </div>

              {/* Users List */}
              <div className="space-y-3">
                <h4 className="font-bold text-white mb-2">
                  Current Users ({users.length})
                </h4>
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-gold/20"
                  >
                    <div>
                      <p className="font-bold text-white">{user.username}</p>
                      <p className="text-sm text-gray-400">
                        Role: {user.role} | Created:{" "}
                        {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteUser(user.id)}
                      disabled={user.id === currentUser.id}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      🗑 Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
