'use server'
import { PrismaClient } from "@prisma/client";


export async function getAllManga() {
  const prisma = new PrismaClient();
  const allManga = await prisma.mangaName.findMany()
  console.log(allManga);
  return allManga;
}
