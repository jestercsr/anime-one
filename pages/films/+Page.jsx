import React, { Suspense } from "react";
import ListeFilms from "./ui/ListeFilms";

export default function PageFilms() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ListeFilms />
      </Suspense>
    </>
  );
}
