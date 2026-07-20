import React, { Suspense } from 'react'
import PromoBySlug from './ui/PromoListe';

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams;
  const capitalizedSlug = capitalizeFirstLetter(slug);

  return {
    pageContext: {
      documentProps: {
        title: `${capitalizedSlug} | Anime ONE Store`,
        description: `Bienvenue sur la page des promotions du manga ${capitalizedSlug} dans la boutique en ligne`
      }
    }
  };
}

export default function PagePromoBySlug(pageContext) {
  const { slug } = pageContext.routeParams;
  const capitalizedSlug = capitalizeFirstLetter(slug);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PromoBySlug props={slug} />
      </Suspense>
    </>
  )
}
