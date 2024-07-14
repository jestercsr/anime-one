import React from "react";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const { id } = params.id;
  const capitalizedId = capitalizeFirstLetter(id);
  return {
    title: `${capitalizedId} | Anime ONE`,
    description: `Bienvenue sur la page de ${capitalizedId}, avec tous son contenus disponibles exclusivements sur Anime ONE`,
  };
}
export default function MangaLayout({ children }) {
  return (
    <div className={inter.className}>
        {children}
    </div>
  );
}
