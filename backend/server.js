import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";


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

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected ✅"))
//   .catch((err) => console.log("MongoDB Error:", err));

// // Start Server
// const PORT = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
