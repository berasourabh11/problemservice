import mongoose from "mongoose";
import { DB_URI } from "../config/server.config";
async function connectdb() {
  const dbUri = DB_URI;

  try {
    await mongoose.connect(dbUri as string);
    console.log("Connected to db");
  } catch (error) {
    console.error("Error connecting to db:", error);
    process.exit(1);
  }
}

export default connectdb;