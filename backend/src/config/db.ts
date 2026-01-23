import mongoose from "mongoose";

async function connectToDB() {
  try {
    const apiKey = process.env.DB_URL as string;
    await mongoose.connect(apiKey);
    console.log("DB Connection Sucessfully ✅");
  } catch (error: any) {
    console.error(`Something went wrong ${error.message}`);
    process.exit(1);
  }
}

export default connectToDB;
