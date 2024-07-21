import React, { useState } from "react";

export default function UpdateForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Entrer le nom du manga"
          className="text-sky-900 text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />
        <button
          type="submit"
          className="bg-emerald-400 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-emerald-900"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
