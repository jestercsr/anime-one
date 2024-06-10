import { PrismaClient } from "@prisma/client"
import { connectToDB } from "../../../../utils"
import { NextResponse } from "next/server"


export const GET = async (req) =>{
    const prisma = new PrismaClient()
    try {
        await connectToDB()
        const allManga = await prisma.mangaName.findMany()
        return NextResponse.json ({allManga}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 200})
    }finally{
        await prisma.$disconnect()
    }
}