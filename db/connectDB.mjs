import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv correctly

dotenv.config(); // Load environment variables from .env file

export async function dbConnect() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}
