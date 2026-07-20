import React, { Suspense } from "react";
import MangaListe from "./ui/MangaListe";
import { usePageContext } from "vike-react/usePageContext";

export async function onBeforeRender(pageContext) {
  const { id } = pageContext.routeParams;

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizedId = capitalizeFirstLetter(id);

  return {
    pageContext: {
      id,
      documentProps: {
        title: `${capitalizedId} | Anime ONE`,
        description: `Bienvenue sur la page de ${capitalizedId}`,
      },
    },
  };
}

export default function Page() {
  const pageContext = usePageContext();
  const { id } = pageContext.routeParams;

  console.log(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MangaListe props={id} />
    </Suspense>
  );
}