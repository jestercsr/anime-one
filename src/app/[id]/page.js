"use client";


import React, { Suspense } from "react";
import { MangaListe } from "./ui/MangaListe";



export default function PageManga({ params }) {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MangaListe props={params} />
      </Suspense>
    </>
  );
}
