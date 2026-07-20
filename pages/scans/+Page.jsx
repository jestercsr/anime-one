import React, { Suspense } from "react";
import ListeScans from "./ui/ListeScans";

export default function PageScans() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ListeScans />
      </Suspense>
    </>
  );
}
