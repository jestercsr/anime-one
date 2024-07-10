import connectDB from "../../../../config/database";
import MangaModel from "../../../../models/testModel";

export default async function handler(req, res){
    await connectDB()
    if(req.method === 'POST'){
        try {
            const manga = new MangaModel(req.body);
            const savedManga = await manga.save();
            res.status(201).json(savedManga);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}