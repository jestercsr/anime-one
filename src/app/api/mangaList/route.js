import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const collection = client.collection("mangaName");
      const allData = await collection.find({}).toArray();

      res.status(200).json(allData);
    } catch (error) {
      res.status(500).json({ message: "Erreur!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Pas la bonne Methode!" });
  }
}
