import React from "react";

export default function Newslater() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/TopScreen/Boutiques/Newsletter.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20% 30%",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-[20px] text-center">Rejoindrez la Newsletters</h2>
      <div className="text-center mt-1 mb-10">
        <input
          type="email"
          placeholder="Adresse Email"
          className="p-1 rounded-md"
        />
        <button className="p-1 px-3 bg-sky-600 rounded-md ml-1 text-slate-50 hover:bg-sky-800">
          S'inscrire
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-[20px] text-center">
          On est aussi sur les réseaux
        </h2>
      </div>
    </div>
  );
}
