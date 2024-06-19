import Link from "next/link";
import React from "react";

export default function E_Header() {
  return (
    <div className="bg-greener-950 text-slate-50  hidden sm:block">
      <div className="container py-2">
        <div className="flex justify-between items-center text-sm">
          <Link href="/accueil" className="hover:text-orange-500">
            Retour sur Anime +
          </Link>
        </div>
      </div>
    </div>
  );
}
