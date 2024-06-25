"use client";


import React, { Suspense } from "react";
import PageAnimeID from "./ui/AnimatonID";


export default function PageMangaFilms({ params }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PageAnimeID props={params.id} animation={params.animation} />
      </Suspense>
    </>
  );
}