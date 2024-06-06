import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="bg-gradient-to-b from-greener-950 to-blacker-950 pt-14 text-white text-base">
      <div className="bg-skyer-500">
        <Accordion type="multiple">
          <h1 className="text-4xl font-bold text-center p-4">
            FOIRE AUX QUESTIONS
          </h1>
          <AccordionItem value="item-1" className="ml-1 text-2xl">
            <AccordionTrigger>Qu’est ce que Anime+ ? </AccordionTrigger>
            <AccordionContent className="text-lg ml-2">
              Anime+ est un service de streaming, un wikia, une boutique en
              ligne et un reseau social qui propose une vaste sélection de
              séries et films animés, de lectures en lignes et encore +.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="ml-1 text-2xl">
            <AccordionTrigger>Combien coûte Anime+ ? </AccordionTrigger>
            <AccordionContent className="text-lg ml-2">
              Regardez Anime+ sur votre smartphone, tablette, Smart TV,
              ordinateur ou appareil de streaming, le tout pour un tarif mensuel
              fixe. Les offres vont de 1,99 € à 8,99 € par mois. Pas de contrat
              ni de frais supplémentaires.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="ml-1 text-2xl">
            <AccordionTrigger>
              Quels appareils et plateformes puis-je utiliser avec Anime+{" "}
            </AccordionTrigger>
            <AccordionContent className="text-lg ml-2">
              Anime+ est accessible sur mobiles, navigateurs Web, consoles de
              jeux, décodeurs TV et TV connectées. Cliquez <span>ici</span> pour
              retrouver la liste complète des appareils compatibles.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="ml-1 text-2xl">
            <AccordionTrigger>
              L’abonnement Anime+ comprend-il une durée d’engagement ?{" "}
            </AccordionTrigger>
            <AccordionContent className="text-lg ml-2">
              Anime+ est sans engagement et vous pouvez annuler votre abonnement
              quand vous le souhaitez. L'annulation sera effective à la fin de
              la période pour laquelle vous avez payé.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="ml-1 text-2xl pb-5">
            <AccordionTrigger>
              Est-ce que Anime+ est adapté aux enfants ?{" "}
            </AccordionTrigger>
            <AccordionContent className="text-lg ml-2">
              AnimeYoung est inclus dans votre abonnement Family et offre un
              meilleur contrôle aux parents, ainsi qu'un espace dédié aux
              enfants, avec des films et des séries destinés à toute la famille.
              <p>
                Les profils Young comportent des fonctionnalités de contrôle
                parental avec code PIN permettant de modifier la catégorie d'âge
                des contenus que vos enfants peuvent regarder et de bloquer des
                titres spécifiques.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
