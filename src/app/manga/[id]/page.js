


import React, { Suspense } from "react";
import MangaListe from "./ui/MangaListe";


export default function PageManga({ params }) {
console.log(params.id);


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MangaListe props={params.id} />
      </Suspense>
    </>
  );
}