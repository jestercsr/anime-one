"use server";
import { PrismaClient } from "@prisma/client";

export async function getAllManga(id: string) {
  const prisma = new PrismaClient();
  try {
    const allManga = await prisma.mangaName.findUnique({
      where: {
        slug: id,
      },
      include: {
        imageCarousel: true,
        imageShow: true,
      },
    });

    return allManga;
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return null;
  }
}
export async function getListeAll() {
  const prisma = new PrismaClient();
  try {
    const listeAllManga = await prisma.listeAll.findMany({
      orderBy: {
        name: "asc",
      }, 
    });
    return listeAllManga;
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return null;
  }
}

export async function getListeSeries() {
  const prisma = new PrismaClient();
  try {
    const listeAllManga = await prisma.listeAll.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        anime: { has: "Series" },
      },
    });
    return listeAllManga;
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return null;
  }
}

export async function getListeFilms() {
  const prisma = new PrismaClient();
  try {
    const listeAllManga = await prisma.listeAll.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        anime: { has: "Films" },
      },
    });
    return listeAllManga;
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return null;
  }
}

export async function getListeScans() {
  const prisma = new PrismaClient();
  try {
    const listeAllManga = await prisma.listeAll.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        anime: { has: "Scans" },
      },
    });
    return listeAllManga;
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return null;
  }
}
