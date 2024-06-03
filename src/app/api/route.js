import { NextResponse } from "next/server"

export async function GET(req){
    return NextResponse.json({message: "Bienvenue sur l'API de Anime + (créer par Jester)."})
}