import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Lissage sur Mesure",
};

/**
 * MENTIONS LÉGALES
 * ⚠️ BROUILLON — À faire valider par un avocat ou un DPO.
 * Placeholders restants à compléter : [CAPITAL SOCIAL], [N° TVA INTRA],
 * [DIRECTEUR DE LA PUBLICATION].
 */
export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-black)] mb-8">
          Mentions légales
        </h1>
        <p className="text-[11px] text-[var(--color-gray-400)] tracking-wider uppercase mb-12">
          Dernière mise à jour : mars 2026
        </p>

        <div className="space-y-10 text-[var(--color-gray-600)] text-sm leading-relaxed">
          {/* --- 1. Éditeur --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>lissagesurmesure.fr</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong>Raison sociale :</strong> LISSAGE SUR MESURE</li>
              <li><strong>Forme juridique :</strong> SAS (société par actions simplifiée)</li>
              <li><strong>Capital social :</strong> [CAPITAL SOCIAL]&nbsp;€</li>
              <li><strong>Siège social :</strong> 25B avenue Paul Vaillant Couturier, 93150 Le Blanc-Mesnil, France</li>
              <li><strong>SIRET :</strong> 993 914 415 00019</li>
              <li><strong>SIREN :</strong> 993 914 415</li>
              <li><strong>Code APE/NAF :</strong> 85.59A — Formation continue d&apos;adultes</li>
              <li><strong>Numéro TVA intracommunautaire :</strong> [N° TVA INTRA]</li>
              <li><strong>Directeur de la publication :</strong> [DIRECTEUR DE LA PUBLICATION]</li>
              <li><strong>Email :</strong> lissagesurmesureformation@gmail.com</li>
              <li><strong>Téléphone :</strong> +33&nbsp;6&nbsp;09&nbsp;77&nbsp;52&nbsp;87</li>
            </ul>
          </section>

          {/* --- 2. Hébergeur --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              2. Hébergeur
            </h2>
            <ul className="space-y-1">
              <li><strong>Nom :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" className="text-[var(--color-black)] underline">https://vercel.com</a></li>
            </ul>
          </section>

          {/* --- 3. Propriété intellectuelle --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes,
              icônes, sons, logiciels, etc.) est la propriété exclusive de Lissage sur Mesure
              ou de ses partenaires et est protégé par les lois françaises et internationales
              relatives à la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication, adaptation de tout
              ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
              est interdite sans l&apos;autorisation écrite préalable de Lissage sur Mesure.
            </p>
          </section>

          {/* --- 4. Données personnelles --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              4. Données personnelles
            </h2>
            <p>
              Les informations relatives au traitement de vos données personnelles sont
              détaillées dans notre{" "}
              <a href="/confidentialite" className="text-[var(--color-black)] underline">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          {/* --- 5. Cookies --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              5. Cookies
            </h2>
            <p>
              Ce site utilise des cookies strictement nécessaires à son fonctionnement.
              Pour plus d&apos;informations, consultez notre{" "}
              <a href="/confidentialite#cookies" className="text-[var(--color-black)] underline">
                politique en matière de cookies
              </a>.
            </p>
          </section>

          {/* --- 6. Limitation de responsabilité --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              6. Limitation de responsabilité
            </h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le
              site est régulièrement mis à jour, mais peut toutefois contenir des inexactitudes
              ou des omissions. Lissage sur Mesure ne pourra être tenue responsable des dommages
              directs ou indirects résultant de l&apos;accès ou de l&apos;utilisation de ce site.
            </p>
          </section>

          {/* --- 7. Droit applicable --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>

        {/* Retour */}
        <div className="mt-16">
          <a href="/" className="text-[11px] text-[var(--color-black)] uppercase tracking-[0.15em] border-b border-[var(--color-black)] pb-1 hover:opacity-60 transition-opacity">
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </main>
  );
}
