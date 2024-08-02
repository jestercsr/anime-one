import Link from "next/link";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-md ml-1 md:text-lg lg:text-2xl font-semibold m-3"
      >
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default function Faq() {
  return (
    <div className="bg-gradient-to-b from-greener-950 to-blacker-950 pt-14 text-white text-base">
      <div className="bg-skyer-500">
        <h1 className="text-2xl sm:text-4xl font-bold text-center p-4">
          FOIRE AUX QUESTIONS
        </h1>
        <div className="md:p-4 text-center md:text-start">
          <Accordion title="Qu’est ce que Anime ONE ? ">
            <p className="text-sm md:text-md lg:text-lg ml-2">
              Anime ONE est un service de streaming, un wikia, une boutique en
              ligne et un reseau social qui propose une vaste sélection de
              séries et films animés, de lectures en lignes et encore +.
            </p>
          </Accordion>
          <Accordion title="Combien coûte Anime ONE ? ">
            <p className="text-sm md:text-base lg:text-lg ml-2">
              Regardez Anime ONE sur votre smartphone, tablette, Smart TV,
              ordinateur ou appareil de streaming, le tout pour un tarif mensuel
              fixe. Les offres vont de 1,99 € à 8,99 € par mois. Pas de contrat
              ni de frais supplémentaires.
            </p>
          </Accordion>
          <Accordion title="Quels appareils et plateformes puis-je utiliser avec Anime ONE. ">
            <p className="text-sm md:text-base lg:text-lg ml-2">
              Anime ONE est accessible sur mobiles, navigateurs Web, consoles de
              jeux, décodeurs TV et TV connectées. Cliquez{" "}
              <Link href="#">
                <span className="font-bold underline hover:no-underline">
                  ici
                </span>
              </Link>{" "}
              pour retrouver la liste complète des appareils compatibles.
            </p>
          </Accordion>
          <Accordion title="L’abonnement Anime ONE comprend-il une durée d’engagement ? ">
            <p className="text-sm md:text-base lg:text-lg ml-2">
              Anime ONE est sans engagement et vous pouvez annuler votre
              abonnement quand vous le souhaitez. L'annulation sera effective à
              la fin de la période pour laquelle vous avez payé.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
