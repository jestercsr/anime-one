import React, { Suspense } from 'react'
import UniqueProd from './ui/UniqueProd';

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
    description: `Bienvenue sur la page de collection du produit ${capitalizedId} dans la boutique en ligne`,
  };
}

export default function PageUniqueBySlug({ params }) {
  console.log(params.lien);

  const capitalizedId = capitalizeFirstLetter(params.lien);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UniqueProd props={params.slug} url={params.lien}/>
      </Suspense>
    </>
  )
}
