import db from "../config/db.js";

export const protect = async (req, res, next) => {
  try {
    const userId = req.cookies.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no cookie",
      });
    }

    const [user] = await db.query(
      "SELECT id, username FROM users WHERE id = ?",
      [userId]
    );

    if (user.length === 0) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user[0]; // attach user
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Auth error",
    });
  }
};