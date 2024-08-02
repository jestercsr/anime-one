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
    const caPath1 = process.env.TIDB_SSL_CA_PATH1;
    const caPath2 = process.env.TIDB_SSL_CA_PATH2;
    const caPath3 = process.env.TIDB_SSL_CA_PATH3;
    let caPath;
    if (fs.existsSync(caPath1)) {
      caPath = caPath1;
    } else if (fs.existsSync(caPath2)) {
      caPath = caPath2;
    } else if (fs.existsSync(caPath3)){
      caPath = caPath3
    }else {
      throw new Error('Aucun chemin de certificat SSL valide trouvé.');
    }
  connect = await mysql.createConnection({
    host: process.env.TIDB_HOST,
    port: process.env.TIDB_PORT,
    user: process.env.TIDB_USER,
    password: process.env.TIDB_PASSWORD,
    database: process.env.TIDB_NAME,
    ssl: {
      ca: fs.readFileSync(caPath),
    },
  });
}
  return connect
};

export default connectDB;
