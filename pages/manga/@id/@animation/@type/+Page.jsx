import React, { Suspense } from "react";
import TypeContenu from "./ui/TypeContenu";
import { usePageContext } from "vike-react/usePageContext";

export default function PageTypeAnimation() {
  const pageContext = usePageContext();
  const { id, animation, type } = pageContext.routeParams;

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <TypeContenu props={id} animation={animation} type={type} />
      </Suspense>
    </>
  );
}
