import db from "../config/db.js";

/*
====================================
REGISTER
====================================
*/
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const [result] = await db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username.trim(), password.trim()]
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: result.insertId,
        username,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
====================================
LOGIN
====================================
*/
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const [user] = await db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (user.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    res.cookie("userId", user[0].id, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user[0].id,
        username: user[0].username,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
====================================
LOGOUT
====================================
*/
export const logout = async (req, res) => {
  try {
    res.clearCookie("userId");

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
====================================
GET PROFILE
====================================
*/
export const me = async (req, res) => {
  try {
    const userId = req.cookies.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Not logged in",
      });
    }

    const [user] = await db.query(
      "SELECT id, username FROM users WHERE id = ?",
      [userId]
    );

    if (user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: user[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};