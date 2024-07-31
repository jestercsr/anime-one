import mongoose from "mongoose";
import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    console.log("MongoDB connecter");
    return true;
  } catch (error) {
    console.log(error);
  }
};
let connect
export const connection = async () => {
  if (!connect) {
  connect = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      ca: fs.readFileSync( process.env.DB_SSL_CA),
    },
  });
}
  return connect
};

export default connectDB;
