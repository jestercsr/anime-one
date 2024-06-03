import { NextResponse } from "next/server";

const getData = async () => {
  const res = await fetch(`http://localhost:4000/mangaName/${id}`);
  const data = await res.json();
  return data;
};

export async function GET(req) {
  const data = await getData();
  return NextResponse.json({
    message: "Données récupérées avec succès depuis nextjs",
    data,
  });
}
