"use server"
import { sql } from '@vercel/postgres';

export async function POST(req) {
    try {
        const { username, prenom, nom, phone, carte_bancaire, date_naissance } = await req.json();
        await sql`
        UPDATE "User"
        SET prenom = ${prenom}, nom = ${nom}, phone = ${phone}, carte_bancaire = ${carte_bancaire}, date_naissance = ${date_naissance}
        WHERE username = ${username}
      `;
      return new Response(JSON.stringify({ message: `L'inscription complète est terminer` }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erreur dans la base de données' }), { status: 500 });
  }
}