import { Hono } from "hono";
import { prisma } from "../lib/prisma.js";

const usersRoute = new Hono();

usersRoute.get("/", async (c) => {
  try {
    const data = await prisma.$queryRawUnsafe(
      `SELECT id, username, prenom, nom, email, phone, date_naissance, role, active FROM "User"`,
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

export default usersRoute;
