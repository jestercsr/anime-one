import React from "react";
import { Inter, Roboto } from "next/font/google";
import "../../globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
    <div className={roboto.className}>
      <ErrorBoundary fallback={<Error/>}>
      {children}
      </ErrorBoundary>
    </div>
  );
}
