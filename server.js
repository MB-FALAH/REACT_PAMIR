import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import db from "./src/config/db.js";

import userRoute from "./src/routes/user.route.js";
import reviewRoute from "./src/routes/review.route.js";
import newsletterRoute from "./src/routes/newsletter.route.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
})();

app.use("/api/v1/users", userRoute);

app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/newsletter", newsletterRoute);
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.log(`🚀 App is listening on port ${PORT}`);
});


// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// import db from "./src/config/db.js";

// import userRoute from "./src/routes/user.route.js";
// import reviewRoute from "./src/routes/review.route.js";

// dotenv.config();

// const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// const PORT = process.env.PORT || 5000;

// (async () => {
//   try {
//     await db.query("SELECT 1");

//     console.log("✅ Database connected");
//   } catch (error) {
//     console.log(error);

//     process.exit(1);
//   }
// })();

// app.use("/api/v1/users", userRoute);

// app.use("/api/v1/reviews", reviewRoute);

// app.get("/", (req, res) => {
//   res.send("Server Running");
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });