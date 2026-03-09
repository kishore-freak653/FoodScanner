import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import UserRoutes from "./routes/userRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
dotenv.config();


const app = express();

app.use(express.json());

app.use(cors());

connectDB();


app.get("/",(req,res) => {
  res.send("Backend running");

})

app.use("/api/auth",authRoutes)

app.use("/api/user", UserRoutes);

app.use("/api/food", foodRoutes);

// read port from environment or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});