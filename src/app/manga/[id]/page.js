
import React, { Suspense } from "react";
import MangaListe from "./ui/MangaListe";

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const capitalizedId = capitalizeFirstLetter(id);
  return {
    title: `${capitalizedId} | Anime ONE`,
    description: `Bienvenue sur la page de ${capitalizedId}, avec tous son contenus`,
  };
}

export default function PageManga({ params }) {
  console.log(params.id);

  const capitalizedId = capitalizeFirstLetter(params.id);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MangaListe props={params.id} />
      </Suspense>
    </>
  );
}
