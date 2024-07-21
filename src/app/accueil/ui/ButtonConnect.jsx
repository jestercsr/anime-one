"use client";

import Link from "next/link";
import { BouttonForm } from "./BouttonForm";

export function ButtonConnect() {
  const boutton = [
    {
      id: 1,
      titre: "Séries",
      url: "/series",
      picture: "/assets/jump_1.webp",
    },
    {
      id: 2,
      titre: "Films",
      url: "/films",
      picture: "/assets/jump_2.webp",
    },
    {
      id: 3,
      titre: "Scans",
      url: "/scans",
      picture: "/assets/jump_3.webp",
    },
    {
      id: 4,
      titre: "Boutique",
      url: "/stores",
      picture: "/assets/jump_4.webp",
    },
    {
      id: 5,
      titre: "Feeds",
      url: "/feeds",
      picture: "/assets/jump_5.webp",
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-center py-3 px-2.5 list-none">
        {boutton.map((cliquer) => {
          return (
            <ul key={cliquer.id}>
              <Link href={cliquer.url}>
                <BouttonForm
                  image={cliquer.picture} alt={cliquer.titre}
                  text={cliquer.titre}
                ></BouttonForm>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
