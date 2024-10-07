import Navbar from "@/app/accueil/ui/NavBar";
import Footer from "@/app/ui/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { usePathname } from "next/navigation";
import Rating from "./Rating";
import { MdStars } from "react-icons/md";

const Breadcrumb = ({ color }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className={color}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/accueil" className="hover:underline capitalize">
            Accueil
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={url} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="capitalize underline underline-offset-4">
                  {decodeURIComponent(segment).replace(/-/g, ' ')}
                </span>
              ) : (
                <Link href={url} className="hover:underline capitalize">
                  {decodeURIComponent(segment).replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default function TypeContenu({ props, animation, type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/mangas/${props}/${animation}/${type}`);
        if (!res.ok) {
          throw new Error("Erreur lors de la recupération des données");
        }
        const mangaData = await res.json();
        setData(mangaData.typeName);
        console.log(mangaData.typeName);
        setLoading(false);
      } catch (error) {
        console.error("Erreur d'import de la base:", error);
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
          color="#ffffff"
          height={"3%"}
          width={"3%"}
        />
      </div>
    );
  }

  if (animation === "scans") {
    return (
      <div>
        <p>HAHAHA</p>
      </div>
    );
  }

  if (animation === "series") {
    return (
      <div className={data.backNav + ` min-h-screen`}>
      <Navbar
        className={data.classNav}
        liste={data.searchNav}
        listing={data.listeSearchNav}
      />
      <Breadcrumb color={data.titre + ` text-[9px] md:text-sm`} />
      <h2 className={data.titre + ` text-2xl mt-10`}>{data.name}</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 justify-around mx-auto">
        <div className="lg:col-start-2">
          <img src={data.image} className="w-[50%] m-auto md:w-[80%]" />
        </div>
        <table className={data.titre + ` text-sm lg:text-md`}>
          <caption className="caption-top mt-[50px]">
            <Rating rating={data.rating} />
          </caption>
          <tbody>
          <tr className="h-[30px] md:h-auto p-3">
            <td className="p-3 underline">Manga</td>
            <td className="capitalize">{data.manga.replace(/-/g, ' ')}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Auteur</td>
            <td>{data.auteur}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Studios d'animation</td>
            <td>{data.studio}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Réalisations</td>
            <td>{data.production}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Type</td>
            <td className="capitalize">
              Saison {data.saison}
            </td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Genre</td>
            <td>{data.genre}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-12 mb-8">
        <h2
          className={
            data.titre + ` uppercase text-2xl border-b-2 flex items-center`
          }
        >
          <MdStars /> Synopsis
        </h2>
        <p className={data.titre + ` text-md mt-5`}>{data.description}</p>
      </div>
      <select className="m-auto">
        <option value={data.episodes}>Episode {data.episodes}</option>
      </select>
      <iframe
        src={data.videos}
        title={data.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-[90%] h-[200px] md:h-[300px] lg:h-[510px] m-auto"
      />
      <Footer />
    </div>
    );
  }

  return (
    <div className={data.backNav + ` min-h-screen`}>
      <Navbar
        className={data.classNav}
        liste={data.searchNav}
        listing={data.listeSearchNav}
      />
      <Breadcrumb color={data.titre + ` text-[9px] md:text-sm`} />
      <h2 className={data.titre + ` text-2xl mt-10`}>{data.name}</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 justify-around mx-auto">
        <div className="lg:col-start-2">
          <img src={data.image} className="w-[50%] m-auto md:w-[80%]" />
        </div>
        <table className={data.titre + ` text-sm lg:text-md`}>
          <caption className="caption-top mt-[50px]">
            <Rating rating={data.rating} />
          </caption>
          <tbody>
          <tr className="h-[30px] md:h-auto p-3">
            <td className="p-3 underline">Manga</td>
            <td className="capitalize">{data.manga.replace(/-/g, ' ')}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Auteur</td>
            <td>{data.auteur}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Studios d'animation</td>
            <td>{data.studio}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Réalisations</td>
            <td>{data.production}</td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Type</td>
            <td className="capitalize">
              {data.type} {data.saison}
            </td>
          </tr>
          <tr className="h-[30px] md:h-auto">
            <td className="p-3 underline">Genre</td>
            <td>{data.genre}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-12 mb-8">
        <h2
          className={
            data.titre + ` uppercase text-2xl border-b-2 flex items-center`
          }
        >
          <MdStars /> Synopsis
        </h2>
        <p className={data.titre + ` text-md mt-5`}>{data.description}</p>
      </div>
      <select className="m-auto">
        <option value={data.name}>{data.name}</option>
      </select>
      <iframe
        src={data.videos}
        title={data.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-[90%] h-[200px] md:h-[300px] lg:h-[510px] m-auto"
      />
      <Footer />
    </div>
  );
}
