"use client";

import E_Navbar from "./ui/E_Navbar";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <E_Navbar />
        <div className="text-center justify-center">
          <h2 className="text-xl md:text-3xl text-cyan-900">
            Une erreur est survenue!
          </h2>
          <button
            onClick={() => reset()}
            className="p-1 bg-cyan-900 text-slate-50 hover:bg-cyan-600"
          >
            Réessayez
          </button>
        </div>
      </body>
    </html>
  );
}
