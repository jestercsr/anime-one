'use server'
import { PrismaClient } from "@prisma/client";


export async function getAllManga(id: any) {
  const prisma = new PrismaClient();
  const allManga = await prisma.mangaName.findUnique({
    where: {
      slug : id
    },
  })
  return allManga;
}
