import dotenv from "dotenv";
import mongoose from "mongoose";

// dotenv.config();
const startDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/userData")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
}

export default startDB;
