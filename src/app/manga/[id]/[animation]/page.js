"use client";

import React, { Suspense } from "react";
import PageAnimeID from "./ui/AnimatonID";
import ReactLoading from 'react-loading';

export default function PageMangaFilms({ params }) {
  return (
    <>
      <Suspense fallback={<div><ReactLoading type="bubbles" color="#ffffff" height={'3%'} width={'3%'} /></div>}>
        <PageAnimeID props={params.id} animation={params.animation} />
      </Suspense>
    </>
  );
}