/**
 * Récuperer les données des offres pour l'inscription
 * Envoie des données pour modifier le choix de l'utilisateur
 * @param {string} req - L'ID de l'utilisateur et l'ID de l'offre
 * @returns {object} - Les données du manga sélectionné ont été envoyés
 */
import { Hono } from "hono";
import { prisma } from "../lib/prisma.js";

const offreRoute = new Hono();

offreRoute.post("/", async (c) => {
  const body = await c.req.json();
  const { userId, offreId } = body;

  try {
    await prisma.$queryRawUnsafe(
      `UPDATE "User" SET offreId = $1 WHERE id = $2`,
      offreId,
      userId,
    );

    return c.json({ message: "Offre sélectionnée avec succès" });
  } catch (error) {
    console.error(error);
    return c.json({
      error: `Erreur lors de la sélection de l'offre`,
    });
  }
});

offreRoute.get("/", async (c) => {
  try {
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM "Offre"`);

    return c.json(data, { success: true });
  } catch (error) {
    console.error(error);
    return c.json(
      { error: "Erreur lors de la récupération des offres" },
      { status: 500 },
    );
  }
});

export default offreRoute;
