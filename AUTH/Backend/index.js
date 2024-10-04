import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/coonectDB.js";

import authRoutes from "./routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port 3001");
});
