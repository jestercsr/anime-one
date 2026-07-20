import React, { Suspense } from "react";
import PageAnimeID from "./ui/AnimatonID";
import { usePageContext } from "vike-react/usePageContext";

const formatTitle = (string) => {
  if (!string) return "";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function onBeforeRender(pageContext) {
  const { id, animation } = pageContext.routeParams;
  const formattedTitle = formatTitle(id);
  const formattedAnimation = formatTitle(animation);

  return {
    pageContext: {
      id,
      animation,
      documentProps: {
        title: `${formattedTitle} ${formattedAnimation} | Anime ONE`,
        description: `Tous les ${formattedAnimation} de ${formattedTitle} disponibles sur Anime ONE`,
      },
    },
  };
}

export default function PageMangaFilms() {
  const pageContext = usePageContext();
  const { id, animation } = pageContext.routeParams;
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <PageAnimeID props={id} animation={animation} />
      </Suspense>
    </>
  );
}
