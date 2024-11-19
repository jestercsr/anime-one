import React, { Suspense } from 'react'
import NewsBySlug from './ui/NewsListe';

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
    title: `${capitalizedId} | Anime ONE Store`,
    description: `Bienvenue sur la page des nouveautés du manga ${capitalizedId} dans la boutique en ligne`,
  };
}

export default function PageNewsBySlug({ params }) {
  const capitalizedId = capitalizeFirstLetter(params.slug);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsBySlug props={params.slug} />
      </Suspense>
    </>
  )
}
