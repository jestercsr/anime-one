import { Hono } from "hono";
import { prisma } from "../lib/prisma.js";

const profileRoute = new Hono();

profileRoute.post("/", async (c) => {
  const body = await c.req.json();
  const { userId, nom, avatarId } = body;
  const numericUserId = parseInt(userId, 10);
  const numericAvatar = parseInt(avatarId, 10);

  if (!numericUserId || !nom || !avatarId) {
    return c.json(
      { error: "Toutes les données sont demandés" },
      { status: 400 },
    );
  }

  await prisma.$queryRawUnsafe(
    `
    INSERT INTO "Profile" ("userId", "nom", "avatarId")
    VALUES ($1, $2, $3)`,
    numericUserId,
    nom,
    numericAvatar,
  );

  return c.json({ success: true });
});

profileRoute.get("/:userId", async (c) => {
  const { userId } = c.req.param();
  const numericUserId = parseInt(userId, 10);

  if (!userId) {
    return c.json({ error: "User ID is required" }, { status: 400 });
  }
  const profiles = await prisma.$queryRawUnsafe(
    `
    SELECT p."avatarId", a."images", p."nom", u."username", p."id"
        FROM "Profile" p
        LEFT JOIN "Avatar" a ON p."avatarId" = a."id"
        LEFT JOIN "User" u ON p."userId" = u."id"
        WHERE p."userId" = $1;`,
    numericUserId,
  );
  return c.json(profiles);
});

profileRoute.post("/:userId", async (c) => {
  const { userId } = c.req.param();
  const { nom, avatarId } = await c.req.json();
  const numericUserId = parseInt(userId, 10);
  const numericAvatar = parseInt(avatarId, 10);

  if (!numericUserId || !nom || !avatarId) {
    return c.json(
      { error: "Toutes les données sont demandés" },
      { status: 400 },
    );
  }

  await prisma.$queryRawUnsafe(
    `
    INSERT INTO "Profile" ("userId", "nom", "avatarId")
    VALUES ($1, $2, $3)`,
    numericUserId,
    nom,
    numericAvatar,
  );

  return c.json({ success: true });
});

profileRoute.put("/:userId", async (c) => {
  const { userId } = c.req.param();
  const body = await c.req.json();
  const { nom, avatarId, profileId } = body;
  const numProfile = parseInt(userId, 10);
  const idProfile = parseInt(profileId, 10);
  const idAvatar = parseInt(avatarId, 10);
  console.log(nom);

  if (!userId) {
    return c.json(
      { error: "Profile ID is required" },
      { status: 400 },
    );
  }

  try {
    await prisma.$queryRawUnsafe(
      `
      UPDATE "Profile"
      SET "nom" = $1, "avatarId" = $2
      WHERE "userId" = $3 AND "id" = $4;
    `,
      nom,
      idAvatar,
      numProfile,
      idProfile,
    );

    const updatedProfile = await prisma.$queryRawUnsafe(
      `
      SELECT * FROM "Profile"
      WHERE "userId" = $1 AND "id" = $2;
    `,
      numProfile,
      idProfile,
    );

    if (updatedProfile.length === 0) {
      return c.json({ error: "Profile not found" }, { status: 404 });
    }

    return c.json(updatedProfile[0]);
  } catch (error) {
    return c.json(
      { error: "Error updating profile" },
      { status: 500 },
    );
  }
});

profileRoute.delete("/:profileId", async (c) => {
  const { profileId } = c.req.param();

  if (!profileId) {
    return c.json(
      { error: "Profile ID is required" },
      { status: 400 },
    );
  }

  try {
    await prisma.$queryRawUnsafe(
      `
      DELETE FROM "Profile"
      WHERE "id" = $1;
    `,
      parseInt(profileId, 10),
    );

    return c.json({ message: "Profile deleted successfully" });
  } catch (error) {
    return c.json(
      { error: "Error deleting profile" },
      { status: 500 },
    );
  }
});

export default profileRoute;
