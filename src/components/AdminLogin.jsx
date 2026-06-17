import { useState } from "react";
import axios from "axios";
import { loginUser } from "../utils/authApi";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);
      setMessage("Login successfully ✅");
      navigate("/admin");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md border border-yellow-500/40 rounded-2xl p-8 bg-black shadow-lg">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-yellow-400 flex items-center justify-center gap-2">
          🧾 Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Username */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 text-white border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 text-white border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-sm text-gray-400 mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}