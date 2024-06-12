'use server'
import { PrismaClient } from "@prisma/client";


export async function getAllManga(id: string) {
  const prisma = new PrismaClient()
  try {
    const allManga = await prisma.mangaName.findUnique({
      where: {
        slug : id
      },
      include: {
        imageCarousel: true,
        imageShow: true,
      },
    })
    
    return allManga;
  } catch (error) {
    console.error('Error fetching manga data:', error);
    return null;
  }
  
}
export async function getListeAll(){
  const prisma = new PrismaClient();
  try {
    const listeAllManga = await prisma.listeAll.findMany()    
    return listeAllManga
  } catch (error) {
    console.error('Error fetching manga data:', error);
    return null;
  }
}
