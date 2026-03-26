import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Lissage sur Mesure",
};

/**
 * CGV — Conditions Générales de Vente (Formation)
 * ⚠️ BROUILLON — À faire valider par un avocat.
 * Remplacer les [PLACEHOLDER] par les informations réelles.
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
              Les présentes Conditions Générales de Vente (CGV) régissent les relations
              contractuelles entre <strong>[NOM DE LA SOCIÉTÉ]</strong>, ci-après
              &ldquo;Lissage sur Mesure&rdquo;, et toute personne physique ou morale
              souhaitant bénéficier de ses prestations de formation professionnelle,
              ci-après &ldquo;le Client&rdquo;.
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
              Les tarifs sont indiqués en euros et [TTC / HT selon votre statut TVA].
              Le paiement peut être effectué par [virement bancaire / carte bancaire /
              chèque / CPF]. Un acompte de [MONTANT ou POURCENTAGE] peut être demandé
              à l&apos;inscription.
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
              Les données collectées dans le cadre de l&apos;inscription et du suivi de
              formation sont traitées conformément à notre{" "}
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
              <strong>Médiation :</strong> Conformément à l&apos;article L612-1 du Code
              de la consommation, le Client peut recourir gratuitement au service de
              médiation : [NOM DU MÉDIATEUR — à compléter].
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-[var(--color-gray-100)] border-l-2 border-[var(--color-black)]">
          <p className="text-xs text-[var(--color-gray-500)]">
            <strong>Avertissement :</strong> Ce document est un brouillon. Il doit
            être validé par un avocat avant publication définitive.
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
