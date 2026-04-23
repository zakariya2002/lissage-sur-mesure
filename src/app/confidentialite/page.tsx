import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Lissage sur Mesure",
};

/**
 * POLITIQUE DE CONFIDENTIALITÉ — RGPD
 * ⚠️ BROUILLON — À faire valider par un avocat ou un DPO.
 * Placeholders restants à compléter : (aucun)
 */
export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-black)] mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-[var(--color-gray-500)] text-sm mb-2">
          Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679)
          et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
        </p>
        <p className="text-[11px] text-[var(--color-gray-400)] tracking-wider uppercase mb-12">
          Dernière mise à jour : mars 2026
        </p>

        <div className="space-y-10 text-[var(--color-gray-600)] text-sm leading-relaxed">
          {/* --- 1. Responsable de traitement --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              1. Responsable du traitement
            </h2>
            <p>Le responsable du traitement des données personnelles est :</p>
            <ul className="mt-3 space-y-1">
              <li><strong>Identité :</strong> LISSAGE SUR MESURE, SAS au capital de [CAPITAL SOCIAL]&nbsp;€</li>
              <li><strong>SIRET :</strong> 993 914 415 00019</li>
              <li><strong>Adresse :</strong> 25B avenue Paul Vaillant Couturier, 93150 Le Blanc-Mesnil, France</li>
              <li><strong>Email :</strong> lissagesurmesureformation@gmail.com</li>
              <li><strong>Téléphone :</strong> +33&nbsp;6&nbsp;09&nbsp;77&nbsp;52&nbsp;87</li>
            </ul>
            <p className="mt-3">
              Pour toute question relative à la protection de vos données, vous pouvez
              nous contacter à l&apos;adresse&nbsp;: <strong>lissagesurmesureformation@gmail.com</strong>.
            </p>
          </section>

          {/* --- 2. Données collectées --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              2. Données personnelles collectées
            </h2>
            <p>Dans le cadre de notre activité, nous collectons les données suivantes :</p>

            <h3 className="font-semibold text-[var(--color-black)] mt-6 mb-2">
              a) Formulaire de demande de rappel téléphonique
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prénom et nom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email</li>
              <li>Statut professionnel (coiffeur, futur coiffeur, indépendant, autre)</li>
              <li>Créneau horaire souhaité</li>
              <li>Message libre (optionnel)</li>
            </ul>

            <h3 className="font-semibold text-[var(--color-black)] mt-6 mb-2">
              b) Données de navigation
            </h3>
            <p>
              À ce jour, aucun cookie de suivi analytique ou publicitaire n&apos;est déposé
              sur ce site. Seuls des cookies strictement nécessaires au fonctionnement
              technique du site peuvent être utilisés (voir section 7).
            </p>
          </section>

          {/* --- 3. Finalités et bases légales --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              3. Finalités et bases légales des traitements
            </h2>
            <div className="space-y-4 mt-3">
              {[
                {
                  finalite: "Traitement de votre demande de rappel téléphonique",
                  base: "Consentement (art. 6.1.a RGPD)",
                  duree: "12 mois à compter de la collecte, ou jusqu'au retrait du consentement",
                },
                {
                  finalite: "Gestion de la relation commerciale (prospect / formation)",
                  base: "Exécution de mesures précontractuelles (art. 6.1.b RGPD)",
                  duree: "3 ans après le dernier contact",
                },
                {
                  finalite: "Gestion administrative et comptable (si inscription à la formation)",
                  base: "Obligation légale (art. 6.1.c RGPD)",
                  duree: "10 ans (obligations comptables)",
                },
              ].map((item, i) => (
                <div key={i} className="border border-[var(--color-gray-200)] p-4">
                  <p className="text-[var(--color-black)] font-medium text-sm mb-2">{item.finalite}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-6 gap-1 text-xs text-[var(--color-gray-500)]">
                    <span><strong className="text-[var(--color-gray-600)]">Base légale :</strong> {item.base}</span>
                    <span><strong className="text-[var(--color-gray-600)]">Durée :</strong> {item.duree}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- 4. Destinataires --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              4. Destinataires des données
            </h2>
            <p>Vos données personnelles sont destinées à :</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>L&apos;équipe Lissage sur Mesure (responsable de traitement)</li>
              <li>
                Notre hébergeur&nbsp;: <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133,
                Walnut, CA 91789, États-Unis) — pour le stockage et la diffusion du site
              </li>
              <li>
                Notre prestataire de paiement&nbsp;: <strong>Stripe</strong> — pour le
                traitement sécurisé des transactions liées aux commandes
              </li>
            </ul>
            <p className="mt-3">
              Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
            </p>
          </section>

          {/* --- 5. Transferts hors UE --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              5. Transferts de données hors Union européenne
            </h2>
            <p>
              Certains de nos sous-traitants techniques peuvent être situés en dehors de
              l&apos;Union européenne. Le cas échéant, ces transferts sont encadrés par :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Des clauses contractuelles types approuvées par la Commission européenne</li>
              <li>
                Une décision d&apos;adéquation de la Commission européenne (ex : Data Privacy
                Framework UE-États-Unis, le cas échéant)
              </li>
            </ul>
            <p className="mt-3 p-4 bg-[var(--color-gray-100)] border-l-2 border-[var(--color-black)]">
              <strong>Note :</strong> Ce site utilise une fonctionnalité expérimentale
              d&apos;amélioration d&apos;images via l&apos;API Google Gemini. Si vous utilisez
              cette fonctionnalité, les images que vous soumettez sont transmises aux serveurs
              de Google (États-Unis). Cette fonctionnalité est optionnelle et non nécessaire
              à la navigation sur le site.
            </p>
          </section>

          {/* --- 6. Droits des personnes --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              6. Vos droits
            </h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
              des droits suivants sur vos données personnelles :
            </p>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>Droit d&apos;accès</strong> (art. 15 RGPD) — Obtenir la confirmation
                que vos données sont traitées et en recevoir une copie.
              </li>
              <li>
                <strong>Droit de rectification</strong> (art. 16 RGPD) — Corriger des données
                inexactes ou incomplètes.
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> (art. 17 RGPD) — Demander la
                suppression de vos données, sauf obligation légale de conservation.
              </li>
              <li>
                <strong>Droit à la limitation du traitement</strong> (art. 18 RGPD) — Demander
                la suspension temporaire du traitement.
              </li>
              <li>
                <strong>Droit à la portabilité</strong> (art. 20 RGPD) — Recevoir vos données
                dans un format structuré et couramment utilisé.
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> (art. 21 RGPD) — Vous opposer au
                traitement pour des motifs légitimes.
              </li>
              <li>
                <strong>Droit de retrait du consentement</strong> — Retirer votre consentement
                à tout moment, sans que cela ne compromette la licéité du traitement fondé
                sur le consentement effectué avant ce retrait.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Pour exercer vos droits&nbsp;:</strong> envoyez un email à{" "}
              <strong>lissagesurmesureformation@gmail.com</strong> en précisant votre demande et en
              joignant une copie d&apos;un justificatif d&apos;identité. Nous nous
              engageons à vous répondre dans un délai d&apos;un mois.
            </p>
            <p className="mt-3">
              <strong>Réclamation auprès de la CNIL :</strong> Si vous estimez que le
              traitement de vos données ne respecte pas la réglementation, vous pouvez
              introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique
              et des Libertés (CNIL) — www.cnil.fr.
            </p>
          </section>

          {/* --- 7. Cookies --- */}
          <section id="cookies">
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              7. Gestion des cookies
            </h2>
            <h3 className="font-semibold text-[var(--color-black)] mt-4 mb-2">
              Qu&apos;est-ce qu&apos;un cookie ?
            </h3>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
              tablette, smartphone) lors de la visite d&apos;un site web. Il permet de
              stocker des informations relatives à votre navigation.
            </p>

            <h3 className="font-semibold text-[var(--color-black)] mt-6 mb-2">
              Cookies utilisés sur ce site
            </h3>
            <div className="mt-3 border border-[var(--color-gray-200)] p-4">
              <p className="text-[var(--color-black)] font-mono text-xs mb-2">lsm_cookie_consent</p>
              <div className="flex flex-col sm:flex-row sm:gap-6 gap-1 text-xs text-[var(--color-gray-500)]">
                <span><strong className="text-[var(--color-gray-600)]">Type :</strong> Strictement nécessaire</span>
                <span><strong className="text-[var(--color-gray-600)]">Finalité :</strong> Mémoriser votre choix en matière de cookies</span>
                <span><strong className="text-[var(--color-gray-600)]">Durée :</strong> 13 mois</span>
              </div>
            </div>

            <h3 className="font-semibold text-[var(--color-black)] mt-6 mb-2">
              Comment gérer vos cookies ?
            </h3>
            <p>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies
              en cliquant sur le lien &ldquo;Gérer les cookies&rdquo; présent en bas de chaque page
              du site. Vous pouvez également configurer votre navigateur pour refuser
              les cookies.
            </p>
          </section>

          {/* --- 8. Sécurité --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              8. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre la perte,
              l&apos;utilisation abusive, l&apos;accès non autorisé, la divulgation,
              l&apos;altération ou la destruction, notamment :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Chiffrement des communications (HTTPS / TLS)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Hébergement sécurisé avec sauvegardes régulières</li>
              <li>Mise à jour régulière des composants logiciels</li>
            </ul>
          </section>

          {/* --- 9. Modification --- */}
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">
              9. Modification de la politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité
              à tout moment. Toute modification sera publiée sur cette page avec une date
              de mise à jour actualisée. Nous vous invitons à la consulter régulièrement.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-[var(--color-gray-100)] border-l-2 border-[var(--color-black)]">
          <p className="text-xs text-[var(--color-gray-500)]">
            <strong>Avertissement :</strong> Ce document est un brouillon rédigé à titre
            indicatif. Il ne constitue pas un conseil juridique et doit être validé par
            un avocat spécialisé ou un Délégué à la Protection des Données (DPO) avant
            publication définitive.
          </p>
        </div>

        <div className="mt-10">
          <a href="/" className="text-[11px] text-[var(--color-black)] uppercase tracking-[0.15em] border-b border-[var(--color-black)] pb-1 hover:opacity-60 transition-opacity">
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </main>
  );
}
