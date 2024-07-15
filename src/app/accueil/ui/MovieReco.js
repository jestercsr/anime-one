import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getMovieReco } from "../../../../_actions/postAction";
import Link from "next/link";

export default function MovieReco() {
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

  const [dataMovie, setDataMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovieReco();
        setDataMovie(movieData);
        console.log(movieData);
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

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mt-5 text-white pb-5">
        <h2 className="ml-1 text-xl">Films Recommander pour Vous</h2>
        <Carousel responsive={responsive} infinite removeArrowOnDeviceType={["tablet", "mobile"]}>
          {dataMovie.map((movReco, index) => {
            return (
              <div className="text-[9px] md:text-xs lg:text-md mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative" key={index}>
                <Link href={`/${movReco.url}`}>
                  <img src={movReco.image} alt={movReco.name} className="rounded-2xl w-full"/>
                  <p className="absolute bottom-2 md:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-2 lg:p-5 text-center hover:opacity-100 rounded-2xl">{movReco.name}</p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
