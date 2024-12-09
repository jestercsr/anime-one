"use client";
import React, { useEffect, useState } from "react";
import E_Navbar from "../ui/E_Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ReactLoading from "react-loading";
import Rating from "../ui/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoClose, IoFilter } from "react-icons/io5";

const Breadcrumb = ({ color }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className={color}>
      <ol className="flex items-center space-x-2">
        {pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={url} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="capitalize underline underline-offset-4">
                  {decodeURIComponent(segment).replace(/-/g, " ")}
                </span>
              ) : (
                <Link href={url} className="hover:underline capitalize">
                  {decodeURIComponent(segment).replace(/-/g, " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

const Filter = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 flex justify-between items-center w-full text-md ml-1 md:text-lg font-semibold m-3"
      >
        <span>{title}</span>
        <span className="text-sky-900">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

export default function PageAccessoires() {
  const [data, setData] = useState(null);
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/produits/accessoires`);
        if (!res.ok) {
          throw new Error("Erreur lors de la recupération des données");
        }
        const produitData = await res.json();
        setData(produitData.produitOne);
        setLoading(false);
      } catch (error) {
        console.error("Erreur d'import de la base:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/collection`);
        if (!res.ok) {
          throw new Error("Erreur lors de la recupération des données");
        }
        const mangaData = await res.json();
        setManga(mangaData.mangaName);
        console.log(mangaData.mangaName);
        setLoading(false);
      } catch (error) {
        console.error("Erreur d'import de la bdd:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#0c4a6e"
          height={"3%"}
          width={"3%"}
        />
      </div>
    );
  }

  const changeBg = (e) => {
    if (e == "En stock") {
      return "bg-green-400 text-sky-950";
    } else if (e == "Précommande") {
      return "bg-amber-300 text-sky-950";
    } else {
      return "bg-red-500 text-slate-50";
    }
  };
  return (
    <>
      <E_Navbar />
      <div className="mb-3">
        <div className="px-8 mt-2">
          <Breadcrumb color={`text-gray-700 `} />
          <div className="flex mt-3 text-gray-700">
          <button
              className="block md:hidden mb-4 p-2 bg-sky-600 text-white rounded"
              onClick={() => setShowFilters(!showFilters)}
            >
              <IoFilter className="inline mr-2" />
              {showFilters ? "Fermer" : "Filtres"}
            </button>
            <div
              className={`fixed inset-0 bg-white p-8 z-50 transition-transform transform ${
                showFilters ? "translate-x-0" : "-translate-x-full"
              } md:relative md:translate-x-0 md:w-1/4 pr-8`}
            >
              <button
                className="block md:hidden absolute top-4 right-4 p-2 text-xl"
                onClick={() => setShowFilters(false)}
              >
                <IoClose />
              </button>
              <h2 className="text-xl font-semibold mb-4 border-b-2">Filtre</h2>
              <div className="mb-6">
                <Filter title="Disponibilité">
                  <div className="grid grid-cols-2">
                    <label className="block">
                      <input type="checkbox" /> En stock
                    </label>
                    <label className="block">
                      <input type="checkbox" /> Rupture de stock
                    </label>
                    <label className="block">
                      <input type="checkbox" /> Précommande
                    </label>
                  </div>
                </Filter>
              </div>
              <div className="mb-6">
                <Filter title="Taille">
                  <div className="grid grid-cols-2">
                    {["Taille unique", "XS", "S", "M", "L", "XL", "XXL"].map(
                      (size) => (
                        <label className="block" key={size}>
                          <input type="checkbox" /> {size}
                        </label>
                      )
                    )}
                  </div>
                </Filter>
              </div>
              <div className="mb-6">
                <Filter title="Series">
                  <div className="grid grid-cols-2">
                    {manga.map((size, n) => (
                      <ul className="block" key={n}>
                        <Link href={`accessoires/${size.url}`}>
                          <li className="hover:underline flex items-center">
                            <RiCheckboxBlankLine className="text-lg" />{" "}
                            {size.name}
                          </li>
                        </Link>
                      </ul>
                    ))}
                  </div>
                </Filter>
              </div>
              <div className="mb-6">
                <Filter title="Couleur">
                  <div className="flex flex-wrap gap-4">
                    {[
                      "Rouge",
                      "Bleu",
                      "Vert",
                      "Noir",
                      "Blanc",
                      "Jaune",
                      "Rose",
                      "Gris",
                      "Multicolor",
                    ].map((color) => {
                      const colorClass = {
                        Rouge: "bg-red-500",
                        Bleu: "bg-blue-500",
                        Vert: "bg-green-500",
                        Noir: "bg-black",
                        Blanc: "bg-white border border-gray-400",
                        Jaune: "bg-yellow-500",
                        Rose: "bg-pink-500",
                        Gris: "bg-gray-500",
                      };
                      return (
                        <label key={color} className="relative inline-block">
                          <input type="checkbox" className="sr-only" />
                          <span
                            className={`block w-5 h-5 rounded-full ${
                              color !== "Multicolor" ? colorClass[color] : ""
                            } cursor-pointer transition-all duration-300`}
                            style={
                              color === "Multicolor"
                                ? {
                                    background:
                                      "linear-gradient(90deg, red, yellow, green, blue)",
                                  }
                                : {}
                            }
                          ></span>
                          <span className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 hover:border-black"></span>
                        </label>
                      );
                    })}
                  </div>
                </Filter>
              </div>
              <div className="mb-6">
                <Filter title="Type">
                  <div className="grid grid-cols-2">
                    {["Casquette", "Montre", "Figurine", "Sac à dos"].map(
                      (type) => (
                        <label className="block" key={type}>
                          <input type="checkbox" /> {type}
                        </label>
                      )
                    )}
                  </div>
                </Filter>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Prix</h3>
                <input type="range" min="0" max="500" className="w-full" />
                <div className="flex justify-between text-sm">
                  <span>0€</span>
                  <span>500€+</span>
                </div>
              </div>
            </div>
            <div className="w-3/4 ">
              {data ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[140px] md:w-[180px] justify-items-center m-auto  px-[5px] py-[6px] cursor-pointer hover:shadow-2xl rounded-2xl mb-5 lg:w-[23%] lg:min-w-[250px] lg:py-[12px] lg:min-h-[400px] flex flex-col"
                      >
                        <Link
                          href={`/stores/collections/${product.manga}/${product.url}`}
                        >
                          <img
                            src={product.image[0]}
                            className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-2xl"
                          />
                        </Link>
                        <div className="text-start flex-grow flex flex-col justify-between">
                          <p className="pt-4 text-xs md:text-md lg:text-lg line-clamp-2 lg:h-[70px]">
                            {product.titre}
                          </p>
                          <Rating rating={product.averageRating} />
                          <p
                            className={`p-1 w-3/5 text-xs md:text-md ${
                              product.typeContenu
                                ? changeBg(product.typeContenu)
                                : "bg-current"
                            }`}
                          >
                            {product.typeContenu}
                          </p>
                          <div className="flex justify-between">
                            {product.sale ? (
                              <div className="flex">
                                <p className="pt-4 line-through mr-1 decoration-red-600 text-xs md:text-sm lg:text-md text-skyer-600 font-semibold">
                                  {product.prix} €
                                </p>
                                <p className="pt-4 text-sm md:text-md lg:text-lg text-skyer-600 font-semibold">
                                  {product.sale} €
                                </p>
                              </div>
                            ) : (
                              <p className="pt-4 text-xs md:text-md lg:text-lg text-skyer-600 font-semibold">
                                {product.prix} €
                              </p>
                            )}
                            <button
                              className="p-2 lg:p-4 lg:text-[20%] rounded-[100%] text-skyer-600 hover:bg-skyer-600 hover:text-slate-50 bottom-5"
                              title="Ajouter au Panier"
                            >
                              <MdAddShoppingCart className="text-2xl" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>Aucun produit disponible</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
