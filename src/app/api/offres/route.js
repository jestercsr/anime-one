"use server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
  const { userId, offreId } = req.body;

  try {
    await sql`UPDATE "User" SET offreId = ${offreId} WHERE id = ${userId}`;

    return new Response(JSON.stringify({ message: "Offre sélectionnée avec succès" }));
  } catch (error) {
    return new Response(JSON.stringify({ error: `Erreur lors de la sélection de l'offre` }));
  }
}

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM "Offre";`;
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erreur lors de la récupération des offres" }), { status: 500 });
  }
}