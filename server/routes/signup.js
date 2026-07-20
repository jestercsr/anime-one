import bcrypt from "bcryptjs";
import { Hono } from "hono";
import { prisma } from "../lib/prisma.js";

const signupRoute = new Hono();

signupRoute.post("/", async (c) => {
  const body = await c.req.json();
  console.log("Request body:", body);
  const { username, email, password, recaptchaToken } = body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      },
    );

    const recaptchaData = await recaptchaResponse.json();
    console.log("reCAPTCHA result:", recaptchaData);

    const data = await prisma.$queryRawUnsafe(
      `
      INSERT INTO "User" (username, password, email)
      VALUES ($1, $2, $3)`,
      username,
      hashedPassword,
      email,
    );
    return c.json(data, { success: true });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Database error" }, { status: 500 });
  }
});

signupRoute.get("/", async (c) => {
  const { searchParams } = new URL(c.req.url);
  const username = searchParams.get("username");

  try {
    const data = await prisma.$queryRawUnsafe(
      `SELECT * FROM "User" WHERE username=$1`,
      username,
    );

    return c.json(data, { success: true });
  } catch (error) {
    console.error(error);
    return c.json(
      { error: "Erreur lors de la récupération des utilisateurs" },
      { status: 500 },
    );
  }
});

signupRoute.post("/complete", async (c) => {
  try {
    const {
      id,
      prenom,
      nom,
      numero_rue,
      voie,
      code_postal,
      ville,
      pays,
      phone,
      date_naissance,
      nom_carte,
      numero_carte,
      expiration,
      cvc,
      offreUtilisateur,
    } = await c.req.json();
    console.log(id, offreUtilisateur);
    const UserId = parseInt(id, 10);
    const userNum = parseInt(numero_rue, 10);
    const offreSelect = parseInt(offreUtilisateur.id, 10);

    await prisma.$queryRawUnsafe(
      `
        UPDATE "User"
        SET prenom = $1, nom = $2, phone = $3, date_naissance = $4::DATE, "offreId" = $5
        WHERE id = $6
      `,
      prenom,
      nom,
      phone,
      date_naissance,
      offreSelect,
      UserId,
    );
    await prisma.$queryRawUnsafe(
      `INSERT INTO "CarteBancaire" ("nom_carte", "numero_carte", "expiration", "cvc", "userId")
      VALUES ($1, $2, $3::DATE, $4::smallint, $5)`,
      nom_carte,
      numero_carte,
      expiration,
      cvc,
      UserId,
    );
    await prisma.$queryRawUnsafe(
      `INSERT INTO "Adresse" ("numero_rue", "voie", "code_postal", "ville", "pays", "userId")
      VALUES ($1, $2, $3, $4, $5, $6)`,
      userNum,
      voie,
      code_postal,
      ville,
      pays,
      UserId,
    );
    return c.json(
      { message: `L'inscription complète est terminer` },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return c.json(
      { error: "Erreur dans la base de données" },
      { status: 500 },
    );
  }
});

export default signupRoute;
