"use client";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function PageUserAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/users");
        const response = await res.json()
        setUsers(response);
      } catch (error) {
        setError(
          "Erreur pour recuperer la liste des utilisateurs:",
          error
        );
      }finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(users);

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#ffffff"
          height={"30px"}
          width={"30px"}
        />
      </div>
    );
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div className="bg-slate-50 text-center min-h-screen">
      <h1 className="text-4xl text-indigo-600 mb-10">Users</h1>
      <div>
        <h2 className="text-[26px] text-indigo-600">
          Liste Nombre d'utilisateur :{users.length}
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Nom</th>
              <th className="py-2">Prénom</th>
              <th className="py-2">Email</th>
              <th className="py-2">Adresse</th>
              <th className="py-2">Téléphone</th>
              <th className="py-2">Date de naissance</th>
              <th className="py-2">Role</th>
              <th className="py-2">Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.nom}</td>
                <td className="border px-4 py-2">{user.prenom}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.adresse}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">
                  {new Date(user.date_naissance).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">{user.active ? "Oui" : "Non"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
