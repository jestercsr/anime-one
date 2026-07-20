import React, { Suspense } from 'react'
import UniqueProd from './ui/UniqueProd';

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function onBeforeRender(pageContext) {
  const { slug, lien } = pageContext.routeParams;
  const capitalizedId = capitalizeFirstLetter(lien);

  return {
    pageContext: {
      documentProps: {
        title: `${capitalizedId} | Anime ONE Store`,
        description: `Bienvenue sur la page de collection du produit ${capitalizedId} dans la boutique en ligne`
      }
    }
  };
}

export default function PageUniqueBySlug(pageContext) {
  const { slug, lien } = pageContext.routeParams;
  console.log(lien);

  const capitalizedId = capitalizeFirstLetter(lien);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UniqueProd props={slug} url={lien}/>
      </Suspense>
    </>
  )
}
