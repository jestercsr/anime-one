'use server'
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const { rows } = await sql`
      SELECT id, password FROM "User" WHERE email = ${email}
    `;

    const user = rows[0];
    console.log('User:', user);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Email incorrect' }, { status: 404 }));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: 'Mot de passe incorrect' }), { status: 401 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
