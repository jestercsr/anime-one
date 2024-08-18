"use client";
import React, { useEffect, useState } from "react";

export default function PageUserAdmin() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/users");
        setData(res);
      } catch (error) {
        console.error(
          "Erreur pour recuperer la liste des utilisateurs:",
          error
        );
      }
    };
    fetchData();
  }, []);
  console.log(data);
  

  return (
    <div className="bg-slate-50 text-center">
      <h1 className="text-4xl text-indigo-600 mb-10">Users</h1>
      <div>
        <h2 className="text-[26px] text-indigo-600">
          Liste Nombre d'utilisateur :{" "}
        </h2>
      </div>
    </div>
  );
}
