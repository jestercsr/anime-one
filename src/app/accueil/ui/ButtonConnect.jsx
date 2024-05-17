"use client";

import { BouttonForm } from "./BouttonForm";

export function ButtonConnect() {
  const boutton = [
    {
      id: 1,
      titre: "Séries",
      url: "/series",
      picture: "assets/Kuroko_API.png",
    },
    {
      id: 2,
      titre: "Films",
      url: "/films",
      picture: "assets/Kuroko_FILMS.png",
    },
    {
      id: 3,
      titre: "Scans",
      url: "/scans",
      picture: "assets/Kuroko_poster.png",
    },
    {
      id: 4,
      titre: "Boutique",
      url: "/stores",
      picture: "assets/scan/kuroko_scan.png",
    },
    {
      id: 5,
      titre: "Feeds",
      url: "/post_edit",
      picture: "assets/shippuden.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-center py-3 px-2.5">
        {boutton.map((cliquer) => {
          return (
            <ul key={cliquer.id}>
              <a href={cliquer.url}>
                <BouttonForm
                  image={cliquer.picture}
                  text={cliquer.titre}
                ></BouttonForm>
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
