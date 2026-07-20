/**
 * Récuperer toutes les infos de la table Avatar et l'organiser par odre alphabétique en fonction de images dans la BDD SQL
 */
import { Hono } from "hono";
import { prisma } from "../lib/prisma.js";

const avatarRoute = new Hono();

avatarRoute.get("/", async (c) => {
  try {
    const data = await prisma.$queryRawUnsafe(
      `SELECT * FROM "Avatar" ORDER BY "images" ASC`,
    );
    return c.json(data, { success: true });
  } catch (error) {
    console.error(error);
    return c.json(
      { error: "Erreur lors de la récupération des offres" },
      { status: 500 },
    );
  }
});

export default avatarRoute;
