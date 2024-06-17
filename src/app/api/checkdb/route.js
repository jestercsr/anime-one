'use server'
import  dbConnect from "@/app/lib/db";
import MangaName from "../../../../models/testModel";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const mangas = await MangaName.find({});
        res.status(200).json(mangas);
      } catch (error) {
        res.status(500).json({ error: 'Erreur fetching manga' });
      }
      break;
    case 'POST':
      try {
        const manga = new MangaName(req.body);
        await manga.save();
        res.status(201).json(manga);
      } catch (error) {
        res.status(400).json({ error: 'Erreur ajout manga' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
}
