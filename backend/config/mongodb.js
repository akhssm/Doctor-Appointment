import mongoose from "mongoose";

// Connect MongoDB
const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("MongoDB Connected ✅");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/Doctor-Appointment`);
};

export default connectDB;