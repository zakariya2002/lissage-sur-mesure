import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Lissage sur Mesure",
};

/**
 * CGV — Conditions Générales de Vente
 * Couvre : vente de produits + prestations de formation.
 * ⚠️ BROUILLON — À faire valider par un avocat avant publication définitive.
 * Placeholders restants à compléter : [CAPITAL SOCIAL],
 * [N° TVA INTRA], [NOM ET COORDONNÉES DU MÉDIATEUR].
 */
export default function CGV() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-black)] mb-4">
          Conditions Générales de Vente
        </h1>
        <p className="text-[var(--color-gray-500)] text-sm mb-2">
          Applicables aux prestations de formation professionnelle
        </p>
        <p className="text-[11px] text-[var(--color-gray-400)] tracking-wider uppercase mb-12">
          Dernière mise à jour : mars 2026
        </p>

        <div className="space-y-10 text-[var(--color-gray-600)] text-sm leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) sont conclues entre
              <strong> LISSAGE SUR MESURE</strong>, SAS au capital de
              <strong> [CAPITAL SOCIAL]&nbsp;€</strong>, immatriculée au
              répertoire SIRENE sous le numéro SIRET
              <strong> 993&nbsp;914&nbsp;415&nbsp;00019</strong>, dont le siège
              social est situé
              <strong> 25B avenue Paul Vaillant Couturier, 93150 Le Blanc-Mesnil, France</strong>,
              ci-après désignée &ldquo;le Vendeur&rdquo; ou &ldquo;Lissage sur Mesure&rdquo;,
              et toute personne physique ou morale procédant à un achat sur le
              site, ci-après &ldquo;le Client&rdquo;.
            </p>
            <p className="mt-3">
              Email&nbsp;: <strong>lissagesurmesureformation@gmail.com</strong> — Téléphone&nbsp;:
              <strong> +33&nbsp;6&nbsp;09&nbsp;77&nbsp;52&nbsp;87</strong>
            </p>
            <p className="mt-3 text-xs text-[var(--color-gray-500)]">
              Code APE/NAF&nbsp;: 85.59A — Formation continue d&apos;adultes.
              N°&nbsp;TVA intracommunautaire&nbsp;: <strong>[N° TVA INTRA]</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">2. Prestations</h2>
            <p>
              Lissage sur Mesure propose des formations professionnelles de lissage
              capillaire, incluant notamment :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Formation au protocole de lissage sur mesure</li>
              <li>Module expertise cheveux blonds et décolorés</li>
              <li>Diagnostic capillaire avancé</li>
              <li>Pratique sur modèles</li>
            </ul>
            <p className="mt-3">
              Le contenu détaillé, la durée, les dates et le tarif de chaque formation
              sont communiqués au Client avant l&apos;inscription.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">3. Inscription et financement CPF</h2>
            <p>
              L&apos;inscription est confirmée après réception du dossier complet et du
              règlement (ou de l&apos;accord de prise en charge par un organisme financeur,
              dont le CPF). En cas de financement CPF, le Client s&apos;engage à suivre la
              procédure d&apos;inscription via la plateforme Mon Compte Formation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">4. Tarifs et modalités de paiement</h2>
            <p>
              Les prix sont indiqués en euros, <strong>hors taxes (HT)</strong>,
              le site s&apos;adressant à une clientèle professionnelle (B2B).
              La <strong>TVA française au taux en vigueur (20&nbsp;%)</strong> est
              ajoutée et affichée lors du processus de commande, avant
              validation finale du paiement. Le montant TTC ainsi que la TVA
              applicable figurent sur la facture remise au Client.
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
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">5. Droit de rétractation et annulation</h2>
            <p>
              Conformément aux articles L221-18 et suivants du Code de la consommation,
              le Client consommateur dispose d&apos;un délai de 14 jours à compter de la
              date d&apos;inscription pour exercer son droit de rétractation, sans avoir
              à justifier de motif ni à payer de pénalités.
            </p>
            <p className="mt-3">
              <strong>Annulation par le Client :</strong> Toute annulation doit être
              communiquée par écrit (email ou courrier).
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Plus de 15 jours avant la formation : remboursement intégral</li>
              <li>Entre 8 et 15 jours : retenue de 50 % du montant</li>
              <li>Moins de 8 jours ou absence : aucun remboursement</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">6. Protection des données personnelles</h2>
            <p>
              Conformément aux articles L221-18 et suivants du Code de la
              consommation, le Client consommateur dispose d&apos;un délai de
              <strong> 14 jours</strong> à compter de la réception du produit
              pour exercer son droit de rétractation, sans avoir à justifier de
              motif ni à payer de pénalités.
            </p>
            <p className="mt-3">
              La rétractation s&apos;exerce par notification écrite à
              <strong> lissagesurmesureformation@gmail.com</strong>. Les produits doivent être
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
              <strong> lissagesurmesureformation@gmail.com</strong>.
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
              Le Client dispose de droits d&apos;accès, de rectification, d&apos;effacement,
              de limitation, de portabilité et d&apos;opposition sur ses données personnelles
              (voir la politique de confidentialité pour les modalités d&apos;exercice).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">7. Responsabilité</h2>
            <p>
              Lissage sur Mesure s&apos;engage à assurer la formation avec diligence et
              conformément au programme annoncé. La formation constitue une obligation
              de moyens et non de résultat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-black)] mb-4">8. Litiges</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige,
              les parties s&apos;engagent à rechercher une solution amiable. À défaut,
              les tribunaux compétents seront ceux du ressort du siège social de
              Lissage sur Mesure.
            </p>
            <p className="mt-3">
              Conformément à l&apos;article L612-1 du Code de la consommation,
              le Client consommateur peut recourir gratuitement au service de
              médiation&nbsp;: <strong>[NOM ET COORDONNÉES DU MÉDIATEUR]</strong>.
            </p>
            <p className="mt-3">
              À défaut de résolution amiable, les tribunaux français seront
              compétents.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-[var(--color-gray-100)] border-l-2 border-[var(--color-black)]">
          <p className="text-xs text-[var(--color-gray-500)]">
            <strong>Avertissement&nbsp;:</strong> Ce document est un brouillon
            en attente de validation par un avocat avant publication définitive.
            Les éléments suivants restent à compléter&nbsp;: capital social de
            la SAS, email de contact professionnel, numéro de TVA
            intracommunautaire, et désignation du médiateur de la consommation.
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
