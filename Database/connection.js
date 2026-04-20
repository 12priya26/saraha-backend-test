import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("✅ CONNECTED TO DB");
  } catch (error) {
    console.log("❌ Error connecting to MongoDB:", error.message);
  }
};