import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Mentions légales</h1>

      <p className="text-gray-700 mb-6 text-center">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du Site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Éditeur du site</h2>
        <p className="text-gray-700">
          Le site <Link href={'https://anime-one-project.vercel.app'}>https://anime-one-project.vercel.app</Link> est édité par Jester CESAR, étudiant développeur web pour l'obtention du diplôme de Concepteur Développeur d'Applications (CDA).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Responsable de publication</h2>
        <p className="text-gray-700">
          Monsieur Jester CESAR, créateur du site Anime-One.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Hébergement</h2>
        <p className="text-gray-700">
          Ce site est hébergé par Vercel Inc., situé à 440 N Barranca Avenue #4133, Covina, CA 91723, United States.
          <br/>Pour plus d'informations, contactez Vercel directement sur <span className="text-blue-600">privacy@vercel.com</span>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Nous contacter</h2>
        <p className="text-gray-700">
          Par email : jester.csr@gmail.com
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Propriété intellectuelle</h2>
        <p className="text-gray-700">
          L’ensemble des contenus de ce site (textes, images, vidéos, graphismes) sont la propriété 
          d'Anime One, sauf mention contraire. 
          Toute reproduction ou utilisation est interdite sans autorisation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Données personnelles</h2>
        <p className="text-gray-700">
          Conformément au Règlement Général sur la Protection des Données du 27 avril 2016 (RGPD), vous disposez 
          d’un droit d’accès, de rectification et de suppression de vos données personnelles.
        </p>
      </section>
    </main>
  );
}
