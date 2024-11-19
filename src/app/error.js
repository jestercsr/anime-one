"use client";

import Navbar from "./accueil/ui/NavBar";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <Navbar
          className="bg-red-600 text-white"
          liste="bg-red-600 text-white absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none"
          listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-red-600 border-t-0"
        />
        <div className="text-center justify-center">
          <h2 className="text-xl md:text-3xl text-red-600">
            Une erreur est survenue!
          </h2>
          <button
            onClick={() => reset()}
            className="p-1 bg-red-600 text-slate-50 hover:bg-red-800"
          >
            Réessayez
          </button>
        </div>
      </body>
    </html>
  );
}
