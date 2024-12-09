import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAnimeTrending } from "../../../../_actions/postAction";
import Link from "next/link";
import ReactLoading from "react-loading";
import { useProfile } from "../../../../providers/ProfileContext";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export default function AnimeTrending() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  const [dataAnime, setDataAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const { userProfile } = useProfile();
  console.log(userProfile);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendsData = await getAnimeTrending();
        setDataAnime(trendsData);
        setLoading(false);
      } catch (error) {
        console.error(
          "Erreur pour recuperer la liste des animes qui sortent en ce moment:",
          error
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateWatchlist = async (userId, animeId, action) => {
    const response = await fetch(`/api/watchlist`, {
      method: action === "add" ? "POST" : "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, animeId }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Erreur lors de la mise à jour de la liste de visionnage");
    }
  };

  const isInWatchlist = (animeId) => watchlist.includes(animeId);

  const handleWatchlistToggle = async (animeId) => {
    try {
      const action = isInWatchlist(animeId) ? "remove" : "add";
      const updatedUser = await updateWatchlist(userProfile, animeId, action); 
      setWatchlist(updatedUser.watchlist);
    } catch (error) {
      console.error(error);
    }
  };
  

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#4f46e5"
          height={"3%"}
          width={"3%"}
        />
      </div>
    );
  }
  return (
    <>
      <div className="mt-5 text-white pb-5 text-xl">
        <h2 className="ml-1 ">En ce Moment Anime</h2>
        <Carousel
          swipeable={true}
          responsive={responsive}
          infinite
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {dataAnime.map((trends, index) => {
            const animeId = trends._id;
            return (
              <div
                className="text-[8px] md:text-xs lg:text-md mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative"
                key={index}
              >
                <Link href={`/manga/${trends.url}`}>
                  <img
                    src={trends.image}
                    alt={trends.name}
                    className="rounded-2xl w-full"
                  />
                  <p className="text-slate-50 absolute bottom-2 md:bottom-5 lg:bottom-8 bg-black/50 transition ease-in duration-500 opacity-0 w-full p-0 md:p-1 lg:p-5 text-center hover:opacity-100 rounded-2xl">
                    {trends.name}
                  </p>
                </Link>
                <button
                  className="absolute bottom-2 md:bottom-5 lg:bottom-9 right-2 text-white"
                  onClick={() => handleWatchlistToggle(animeId)}
                >
                  {isInWatchlist(animeId) ? (
                    <IoStarSharp className="text-xl md:text-2xl" />
                  ) : (
                    <IoStarOutline className="text-xl md:text-2xl" />
                  )}
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
