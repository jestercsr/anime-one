"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";
import Rating from "@/app/stores/ui/Rating";
import E_Navbar from "@/app/stores/ui/E_Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdAddShoppingCart } from "react-icons/md";

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

export default function UniqueProd({ props, url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 4;

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const res = await fetch(`/api/produits/${props}/${url}`);
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

    fetchProduit();
  }, []);

  const loadProducts = async () => {
    const res = await fetch(`/api/produits/loading?skip=${skip}`);
    const data = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...data.produits]);
    setSkip(skip + limit);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      loadProducts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skip, loading]);

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#0c4a6e"
          eight={"3%"}
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {data ? (
        <div>
          <E_Navbar />
          <div className="max-w-screen-2xl mb-3">
            <Breadcrumb color={`text-gray-700 text-xs md:text-sm`} />
            <div className="grid md:grid-cols-2 mt-9 text-gray-700">
              <div>
                <Carousel responsive={responsive}>
                  {data.image.map((photo, i) => {
                    return (
                      <img
                        src={photo}
                        alt={`Photo of ${photo}`}
                        key={i}
                        className="items-center m-auto justify-items-center"
                      />
                    );
                  })}
                </Carousel>
              </div>
              <div>
                <p
                  className={`p-1 m-1 md:m-0 w-3/5 md:w-1/3 text-md md:text-lg ${
                    data.typeContenu ? changeBg(data.typeContenu) : "bg-current"
                  }`}
                >
                  {data.typeContenu}
                </p>
                <h1 className="m-1 md:text-lg lg:text-2xl">{data.titre}</h1>
                {data.sale ? (
                  <div className="flex items-center">
                    <p className="p-2 md:pt-4 line-through mr-1 decoration-red-600 text-xs md:text-md lg:text-xl text-skyer-600 font-bold">
                      {data.prix} €
                    </p>
                    <p className="p-2 md:pt-4 text-md md:text-xl lg:text-3xl text-skyer-600 font-bold">
                      {data.sale} €
                    </p>
                  </div>
                ) : (
                  <p className="p-2 md:pt-4 text-md md:text-xl lg:text-3xl font-bold text-skyer-600">
                    {data.prix} €
                  </p>
                )}
                <div className="flex items-center">
                  {data.quantite < 10 ? (
                    <div>
                      <h2 className="font-bold text-md md:text-lg p-2 md:p-4">
                        Quantité restante :
                      </h2>
                      <p className="text-red-600 ml-1 font-bold text-2xl">
                      {data.quantite}
                      </p>
                    </div>
                  ) : (
                    <p className="ml-1 font-semibold text-xl">
                      Quantité disponible : {data.quantite}
                    </p>
                  )}
                </div>

                <div className="flex text-md md:text-lg items-center">
                  <p className="font-bold p-2 md:p-4">Disponibilité :</p>
                  <p className="ml-1 text-skyer-600">
                    {data.typeContenu} - Maximum de 3 unités par client
                  </p>
                </div>
                <button className="p-1 w-[90%] flex m-auto justify-center md:p-2 md:w-full text-center uppercase bg-sky-800 hover:bg-black text-white rounded-md">
                  Ajouter au panier
                </button>
                <Filter title="Description">
                  <p>{data.description}</p>
                </Filter>
              </div>
            </div>
            <h2 className="m-1 md:text-lg lg:text-2xl">Vous aimerez aussi</h2>
            {products ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => {
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
                              <p className="pt-4 line-through mr-1 decoration-red-600 text-xs md:text-md lg:text-lg text-skyer-600 font-semibold">
                                {product.prix} €
                              </p>
                              <p className="pt-4 text-xs md:text-md lg:text-lg text-skyer-600 font-semibold">
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
      ) : (
        <div>
          <E_Navbar />
          <div className="pt-[99px] lg:pt-[107px] mb-3">
            <p>Aucune données disponible</p>
          </div>
        </div>
      )}
    </>
  );
}

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
