"use client";

import Sidebar from "./ui/Sidebar";
import Topbar from "./ui/Topbar";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <div className="text-center justify-center">
              <h2 className="text-xl md:text-3xl text-indigo-700">
                Une erreur est survenue!
              </h2>
              <button
                onClick={() => reset()}
                className="p-1 bg-indigo-700 text-slate-50 hover:bg-gray-700"
              >
                Réessayez
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
