import React, { Suspense } from 'react'
import LivresBySlug from './ui/LivresListe';

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams;
  const capitalizedId = capitalizeFirstLetter(slug);

  return {
    pageContext: {
      documentProps: {
        title: `${capitalizedId} | Anime ONE Store`,
        description: `Bienvenue sur la page des mangas et livres du manga ${capitalizedId} dans la boutique en ligne`
      }
    }
  };
}

export default function PageLivresBySlug(pageContext) {
  const { slug } = pageContext.routeParams;
  const capitalizedId = capitalizeFirstLetter(slug);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LivresBySlug props={slug} />
      </Suspense>
    </>
  )
}
