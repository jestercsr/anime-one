import React, { Suspense } from "react";
import ListeSeries from "./ui/ListeSerie";

export default function PageSeries() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ListeSeries />
      </Suspense>
    </>
  );
}
