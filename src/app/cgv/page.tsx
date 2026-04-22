import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Lissage sur Mesure",
};

/**
 * CGV — Conditions Générales de Vente
 * Couvre : vente de produits + prestations de formation.
 * ⚠️ BROUILLON — À faire valider par un avocat avant publication définitive.
 * Remplacer les [PLACEHOLDER] par les informations réelles de l'entreprise.
 */
export default function CGV() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-black)] mb-4">
          Conditions Générales de Vente
        </h1>
        <p className="text-[var(--color-gray-500)] text-sm mb-2">
          Vente de produits et prestations de formation
        </p>
        <p className="text-[11px] text-[var(--color-gray-400)] tracking-wider uppercase mb-12">
          Dernière mise à jour : avril 2026
        </p>

        <div className="space-y-10 text-[var(--color-gray-600)] text-sm leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">1. Vendeur</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) sont conclues entre
              <strong> [NOM COMMERCIAL]</strong>, micro-entrepreneur, immatriculée
              au répertoire SIRENE sous le numéro <strong>[SIRET]</strong>,
              domiciliée <strong>[ADRESSE]</strong>, ci-après désignée
              &ldquo;le Vendeur&rdquo; ou &ldquo;Lissage sur Mesure&rdquo;,
              et toute personne physique ou morale procédant à un achat sur le
              site, ci-après &ldquo;le Client&rdquo;.
            </p>
            <p className="mt-3">
              Email&nbsp;: <strong>[EMAIL CONTACT]</strong> — Téléphone&nbsp;:
              <strong> [TÉLÉPHONE]</strong>
            </p>
            <p className="mt-3 text-xs text-[var(--color-gray-500)]">
              <strong>TVA non applicable, art. 293 B du CGI.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">2. Objet</h2>
            <p>
              Les présentes CGV régissent&nbsp;:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>la vente en ligne de produits cosmétiques (packs de lissage),</li>
              <li>les prestations de formation professionnelle dispensées par le Vendeur.</li>
            </ul>
            <p className="mt-3">
              Toute commande ou inscription implique l&apos;acceptation pleine et
              entière des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">3. Produits</h2>
            <p>
              Les produits proposés à la vente sont décrits avec la plus grande
              exactitude possible sur le site. Les photographies sont
              non-contractuelles. Les produits sont destinés à un usage
              professionnel ou averti&nbsp;; le Client est seul responsable de
              leur bonne utilisation conformément aux instructions fournies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">4. Prix</h2>
            <p>
              Les prix sont indiqués en euros, toutes taxes comprises. La mention
              <em> « TVA non applicable, art. 293 B du CGI »</em> figure sur les
              factures, le Vendeur bénéficiant du régime de la franchise en base
              de TVA.
            </p>
            <p className="mt-3">
              Les frais de livraison sont indiqués séparément lors du processus
              de commande, avant validation finale du paiement.
            </p>
            <p className="mt-3">
              Le Vendeur se réserve le droit de modifier ses prix à tout moment.
              Les produits seront facturés sur la base des tarifs en vigueur au
              moment de la validation de la commande.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">5. Commande et paiement</h2>
            <p>
              La commande est validée après paiement intégral effectué via la
              plateforme sécurisée <strong>Stripe</strong>. Les moyens de paiement
              acceptés sont la carte bancaire (CB, Visa, Mastercard), Apple Pay
              et Google Pay.
            </p>
            <p className="mt-3">
              Une confirmation de commande est envoyée par email à l&apos;adresse
              renseignée par le Client.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">6. Livraison</h2>
            <p>
              Les produits sont expédiés en France métropolitaine uniquement,
              via Colissimo (standard ou express selon le choix du Client).
              Les délais d&apos;expédition sont de 2 à 3 jours ouvrés à compter
              de la confirmation du paiement.
            </p>
            <p className="mt-3">
              Délais de livraison indicatifs après expédition&nbsp;:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Colissimo Standard&nbsp;: 3 à 5 jours ouvrés</li>
              <li>Colissimo Express&nbsp;: 1 à 2 jours ouvrés</li>
            </ul>
            <p className="mt-3">
              Un numéro de suivi est communiqué au Client par email dès l&apos;envoi.
              Le Vendeur ne saurait être tenu responsable des retards imputables
              au transporteur.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">7. Droit de rétractation</h2>
            <p>
              Conformément aux articles L221-18 et suivants du Code de la
              consommation, le Client consommateur dispose d&apos;un délai de
              <strong> 14 jours</strong> à compter de la réception du produit
              pour exercer son droit de rétractation, sans avoir à justifier de
              motif ni à payer de pénalités.
            </p>
            <p className="mt-3">
              La rétractation s&apos;exerce par notification écrite à
              <strong> [EMAIL CONTACT]</strong>. Les produits doivent être
              retournés dans leur emballage d&apos;origine, non ouverts et en
              parfait état, dans un délai de 14 jours suivant la notification.
              Les frais de retour sont à la charge du Client.
            </p>
            <p className="mt-3">
              Le remboursement est effectué dans un délai de 14 jours après
              réception du produit, par le même moyen de paiement utilisé lors
              de l&apos;achat.
            </p>
            <p className="mt-3 text-xs text-[var(--color-gray-500)]">
              <strong>Exception&nbsp;:</strong> conformément à l&apos;article L221-28 5°
              du Code de la consommation, les produits descellés après livraison
              ne peuvent être renvoyés pour des raisons d&apos;hygiène ou de
              protection de la santé.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">8. Garanties</h2>
            <p>
              Les produits bénéficient de la garantie légale de conformité
              (articles L217-3 et suivants du Code de la consommation) et de la
              garantie contre les vices cachés (articles 1641 et suivants du
              Code civil). En cas de défaut, le Client peut contacter
              <strong> [EMAIL CONTACT]</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">9. Formations professionnelles</h2>
            <p>
              Pour les prestations de formation, l&apos;inscription est confirmée
              après réception du règlement (ou de l&apos;accord de prise en
              charge par un organisme financeur, dont les OPCO).
            </p>
            <p className="mt-3">
              <strong>Annulation par le Client&nbsp;:</strong>
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Plus de 15 jours avant la formation&nbsp;: remboursement intégral</li>
              <li>Entre 8 et 15 jours&nbsp;: retenue de 50&nbsp;% du montant</li>
              <li>Moins de 8 jours ou absence&nbsp;: aucun remboursement</li>
            </ul>
            <p className="mt-3">
              La formation constitue une obligation de moyens et non de résultat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">10. Données personnelles</h2>
            <p>
              Les données collectées dans le cadre de la commande ou de
              l&apos;inscription sont traitées conformément à notre{" "}
              <a href="/confidentialite" className="text-[var(--color-black)] underline">
                Politique de confidentialité
              </a>.
            </p>
            <p className="mt-3">
              Les données de paiement sont traitées directement par Stripe et ne
              sont jamais stockées sur nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">11. Responsabilité</h2>
            <p>
              Le Vendeur s&apos;engage à fournir les produits et prestations
              conformes aux descriptions du site. Sa responsabilité ne saurait
              être engagée en cas de mauvaise utilisation des produits par le
              Client ou en cas de force majeure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">12. Litiges et médiation</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, les parties s&apos;engagent à rechercher une solution
              amiable préalable.
            </p>
            <p className="mt-3">
              Conformément à l&apos;article L612-1 du Code de la consommation,
              le Client peut recourir gratuitement au service de médiation&nbsp;:
              <strong> [NOM ET COORDONNÉES DU MÉDIATEUR — à compléter]</strong>.
            </p>
            <p className="mt-3">
              À défaut de résolution amiable, les tribunaux français seront
              compétents.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-[var(--color-gray-100)] border-l-2 border-[var(--color-black)]">
          <p className="text-xs text-[var(--color-gray-500)]">
            <strong>Avertissement&nbsp;:</strong> Ce document est un brouillon.
            Il doit être validé par un avocat avant publication définitive.
            Les <strong>[PLACEHOLDER]</strong> doivent être remplacés par les
            informations réelles de l&apos;entreprise.
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
