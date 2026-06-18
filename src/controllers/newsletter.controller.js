import db from "../config/db.js";

// SUBSCRIBE
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const [existing] = await db.query(
      "SELECT * FROM newsletter WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    const [result] = await db.query(
      "INSERT INTO newsletter (email) VALUES (?)",
      [email]
    );

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      id: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
export const getSubscribers = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM newsletter ORDER BY created_at DESC"
    );

    res.status(200).json({
      success: true,
      subscribers: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE ALL
export const clearSubscribers = async (req, res) => {
  try {
    const [result] = await db.query(
      "DELETE FROM newsletter"
    );

    res.status(200).json({
      success: true,
      message: "All subscribers deleted",
      deletedRows: result.affectedRows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};