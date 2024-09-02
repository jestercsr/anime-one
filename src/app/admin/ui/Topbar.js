"use client";
import {
  FaChartPie,
  FaUser,
  FaFilm,
  FaTv,
  FaTable,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { useProfile } from "../../../../providers/ProfileContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import ReactLoading from "react-loading";
import { getListeAll } from "../../../../_actions/postAction";
import { useAvatar } from "../../../../providers/AvatarContext";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedProfile, logout } = useProfile();
  const { avatarId, avatarUrl } = useAvatar()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await getListeAll();
        setData(listeData);
      } catch (error) {
        console.error("Erreur pour récupérer la liste des mangas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((manga) =>
        manga.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

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

  return (
    <div className="bg-slate-50 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex relative items-center space-x-4">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Rechercher"
          className="outline-none bg-gray-100 px-4 py-2 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && filteredData.length > 0 && (
          <ul className="bg-gray-500 text-slate-50 absolute left-3 top-8 w-[90%] divide-y-2 divide-slate-50 border-gray-300 mt-2 z-10 list-none">
            {filteredData.map((manga, i) => (
              <li
                key={i}
                className="cursor-pointer p-2 hover:bg-gray-200 hover:text-indigo-600 border-t-0"
              >
                <Link href={`/manga/${manga.url}`}>{manga.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center space-x-6">
        <section className="items-center gap-6 hidden lg:block">
          {avatarId ? (
            <div className="relative" onClick={toggleDropdown}>
              <img
                src={avatarUrl}
                alt={avatarId}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {isDropdownOpen && (
                <div
                  className={
                    "bg-slate-50 text-indigo-600 absolute z-10 right-0 mt-2 w-48  border rounded shadow-lg"
                  }
                >
                  <Link href="/profile">
                    <div className="px-4 py-2 hover:bg-indigo-600 hover:text-slate-50">
                      Profil
                    </div>
                  </Link>
                  <Link href="/accueil">
                    <div className="px-4 py-2 hover:bg-indigo-600 hover:text-slate-50">
                      Accueil
                    </div>
                  </Link>
                  <div
                    className="px-4 py-2 hover:bg-red-500 hover:text-slate-50 text-red-500 cursor-pointer"
                    onClick={logout}
                  >
                    Déconnexion
                  </div>
                </div>
              )}
            </div>
          ) : (
            <FaUserCircle className="text-gray-500 hidden lg:block" />
          )}
        </section>
      </div>
      <button
        onClick={toggleMenu}
        className="focus:outline-none flex float-right lg:hidden"
      >
        <Hamburger />
        {isOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 z-50">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/admin"
                className={`flex items-center py-2.5 px-4 rounded-lg hover:bg-gray-700 hover:text-slate-50
                `}
              >
                <FaChartPie className="mr-3" />
                myAdmin
              </Link>
              <Link
                href="/admin/films"
                className={`flex items-center py-2.5 px-4 rounded-lg hover:bg-gray-700 hover:text-slate-50
                `}
              >
                <FaFilm className="mr-3" />
                Films
              </Link>
              <Link
                href="/admin/series"
                className={`flex items-center py-2.5 px-4 rounded-lg hover:bg-gray-700 hover:text-slate-50
                `}
              >
                <FaTv className="mr-3" />
                Series
              </Link>
              <Link
                href="/admin/users"
                className={`flex items-center py-2.5 px-4 rounded-lg hover:bg-gray-700 hover:text-slate-50
                `}
              >
                <FaUser className="mr-3" />
                Users
              </Link>
              <Link
                href="/admin/tables"
                className={`flex items-center py-2.5 px-4 rounded-lg hover:bg-gray-700 hover:text-slate-50
                `}
              >
                <FaTable className="mr-3" />
                Tables
              </Link>
              {avatarId ? (
                <div className="relative" onClick={toggleDropdown}>
                  <img
                    src={avatarUrl}
                    alt={avatarId}
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  {isDropdownOpen && (
                    <div
                      className={
                        "bg-slate-50 text-indigo-600 absolute z-10 right-0 mt-2 w-48  border rounded shadow-lg"
                      }
                    >
                      <Link href="/profile">
                        <div className="px-4 py-2">Profil</div>
                      </Link>
                      <Link href="/accueil">
                        <div className="px-4 py-2">Accueil</div>
                      </Link>
                      <div
                        className="px-4 py-2 hover:text-red-500 cursor-pointer"
                        onClick={logout}
                      >
                        Déconnexion
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <FaUserCircle className="text-gray-500" />
              )}
            </nav>
          </div>
        )}
      </button>
    </div>
  );
}
