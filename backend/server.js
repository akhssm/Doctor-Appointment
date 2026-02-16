import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";


// app config
const app = express();
const Port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Routes
app.use("/api/admin", adminRouter);

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
