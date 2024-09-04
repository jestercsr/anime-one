"use server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../config/database";

export async function POST(req) {
  try {
    const { id, prenom, nom, adresse, phone, date_naissance, nom_carte, numero_carte, expiration, cvc, offreUtilisateur } = await req.json();
    console.log(id, offreUtilisateur);
    const UserId = parseInt(id, 10);
    const offreSelect = parseInt(offreUtilisateur.offreId, 10)
    
    await prisma.$queryRawUnsafe(`
        UPDATE "User"
        SET prenom = $1, nom = $2, phone = $3, adresse = $4, date_naissance = $5::DATE, "offreId" = $6
        WHERE id = $7
      `, prenom, nom, phone, adresse, date_naissance, offreSelect, UserId);
    await prisma.$queryRawUnsafe(`INSERT INTO "CarteBancaire" ("nom_carte", "numero_carte", "expiration", "cvc", "userId")
      VALUES ($1, $2, $3::DATE, $4::smallint, $5)`,nom_carte, numero_carte, expiration, cvc, UserId)
    return NextResponse.json({ message: `L'inscription complète est terminer` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur dans la base de données" },
      { status: 500 }
    );
  }
}
