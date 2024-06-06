import { connectToDatabase } from "../lib/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
  
    const manga = await db
      .collection("mangaName")
      .find({})
      .sort({ metacritic: -1 })
      .toArray();
  
    res.json(manga);
  };