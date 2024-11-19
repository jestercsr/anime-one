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

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

export default function TypeContenu({ props, animation, type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const limitMot = 25;
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
      <>
      {data ? (
      <div className={data.backNav + ` min-h-screen`}>
        <Navbar
        className={data.classNav}
        liste={data.searchNav}
        listing={data.listeSearchNav}
        />
        <Breadcrumb color={data.titre + ` text-[9px] md:text-sm`} />
        <p>HAHAHA</p>
      </div>
    ): (
        <div>
          <Navbar className="bg-gradient-to-t from-yellow-500 to-orange-500 text-sky-900" liste="bg-gradient-to-t from-orange-500 to-yellow-500 text-sky-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-orange-500 border-t-0"/>
          <div className="justify-center m-auto flex mb-20">
            <img src="/assets/Soon.webp" className="w-full md:w-[50%]" />
          </div>
        </div>
      )}
      </>
    );
  }

  if (animation === "series") {
    return (
      <>
      {data? (
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
        <p className={data.titre + ` text-md mt-5`}>{showFullText? data.description : truncateText(data.description, limitMot)}</p>
        <button className={data.classNav + `mt-4 ml-4 p-1 hover:underline hover:bg-white/50 `} onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'Lire moins' : 'Lire plus'}
        </button>
      </div>
        <select className="m-auto lg:ml-14">
          {data.episodes.map((screen, i) => {
            return(
            <option key={i} value={screen}>Episode {screen}</option>
          )
        })}
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
    ): (
      <div>
        <Navbar className="bg-gradient-to-t from-yellow-500 to-orange-500 text-sky-900" liste="bg-gradient-to-t from-orange-500 to-yellow-500 text-sky-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-orange-500 border-t-0"/>
        <div className="justify-center m-auto flex mb-20">
          <img src="/assets/Soon.webp" className="w-full md:w-[50%]" />
        </div>
      </div>
    )}
    </>
    );
  }

  return (
    <>
    {data? (
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
        <p className={data.titre + ` text-md mt-5`}>{showFullText? data.description : truncateText(data.description, limitMot)}</p>
        <button className="mt-4 text-blue-500 hover:underline" onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'Lire moins' : 'Lire plus'}
        </button>
      </div>
      <select className="m-auto lg:ml-14">
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
    ): (
      <div>
        <Navbar className="bg-gradient-to-t from-yellow-500 to-orange-500 text-sky-900" liste="bg-gradient-to-t from-orange-500 to-yellow-500 text-sky-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-orange-500 border-t-0"/>
        <div className="justify-center m-auto flex mb-20">
          <img src="/assets/Soon.webp" className="w-full md:w-[50%]" />
        </div>
      </div>
    )}
    </>
  );
}
