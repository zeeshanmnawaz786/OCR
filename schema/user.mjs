import mongoose from "mongoose";

const UserData = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

export default mongoose.model("UserData", UserData);
