import api from "../axios/api";

// CREATE
export const createReview = async (data) => {
  const res = await api.post("/reviews/create-review", data);
  return res.data;
};

// GET
export const getReviews = async () => {
  const res = await api.get("/reviews/get-review");
  return res.data;
};

// DELETE ONE
export const deleteReview = async (id) => {
  const res = await api.delete(`/reviews/delete-review/${id}`);
  return res.data;
};

// 🔥 CLEAR ALL (FIXED)
export const clearReviews = async () => {
  const res = await api.delete("/reviews/clear-reviews");
  return res.data;
};