import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/app/ui/Footer";
import { getListeAll } from "../../../../_actions/postAction";
import ReactLoading from "react-loading";
import { useProfile } from "../../../../providers/ProfileContext";

function ListeAllManga() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userProfile } = useProfile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await getListeAll();
        setData(listeData);
        console.log(listeData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur pour recuperer la liste des mangas:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="items-center"><ReactLoading type="bubbles" color="#ffffff" height={"3%"} width={"3%"} /></div>
    );
  }

  return (
    <div>
      <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-4 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-5">
        {data.map((select, i) => {
          return (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              {userProfile ? (
                <div>
                  <Link href={`/manga/${select.url}`}>
                    <img
                      src={select.image}
                      alt={select.name}
                      className="w-full rounded-2xl hover:opacity-100"
                    />
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href={`/authentification`}>
                    <img
                      src={select.image}
                      alt={select.name}
                      className="w-full rounded-2xl hover:opacity-100"
                    />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}

export default ListeAllManga;
