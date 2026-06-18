import db from "../config/db.js";

// CREATE REVIEW
export const createReview = async (req, res) => {
  try {
    const { name, email, rating, reviewText } = req.body;

    if (!name || !email || !rating || !reviewText) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const [result] = await db.query(
      `INSERT INTO reviews (name, email, rating, review_text)
       VALUES (?, ?, ?, ?)`,
      [name, email, rating, reviewText]
    );

    res.status(201).json({
      success: true,
      message: "Review created",
      id: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET REVIEWS
export const getReviews = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT id, name, email, rating, review_text, verified, created_at
      FROM reviews
      ORDER BY created_at DESC
    `);

    res.json({
      success: true,
      reviews: rows.map((r) => ({
        id: r.id,
        name: r.name,
        email: r.email,
        rating: r.rating,
        text: r.review_text,
        verified: Boolean(r.verified),
        date: r.created_at,
      })),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE ONE
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM reviews WHERE id = ?", [id]);

    res.json({
      success: true,
      message: "Review deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔥 CLEAR ALL REVIEWS (FIXED)
export const clearReviews = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM reviews");

    res.json({
      success: true,
      message: "All reviews deleted",
      deletedRows: result.affectedRows,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};