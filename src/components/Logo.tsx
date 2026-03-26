"use client";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

/**
 * Logo "Lissage sur Mesure" fidèle au branding.
 * Monogramme LV + nom de marque + tagline.
 *
 * variant="dark"  → texte sombre (pour fonds clairs)
 * variant="light" → texte clair (pour fonds sombres)
 */
export default function Logo({
  variant = "dark",
  className = "",
  showTagline = false,
}: LogoProps) {
  const color = variant === "dark" ? "#1C1C1C" : "#F5EDE3";
  const taglineColor = variant === "dark" ? "#8A8580" : "#D8C0B5";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Monogramme LV */}
      <svg
        width="32"
        height="28"
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-1"
      >
        {/* L stylisé */}
        <path
          d="M8 4 L8 44 L28 44"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* V stylisé entrecroisé avec L — courbe élégante */}
        <path
          d="M22 4 C22 4 32 38 32 44 C32 38 42 4 42 4"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Boucle décorative en haut */}
        <path
          d="M42 4 C48 4 52 10 46 16"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Nom de marque */}
      <span
        className="font-serif text-sm md:text-base tracking-[0.25em] uppercase leading-none"
        style={{ color, fontWeight: 400 }}
      >
        Lissage sur Mesure
      </span>

      {/* Tagline */}
      {showTagline && (
        <span
          className="text-[8px] md:text-[9px] tracking-[0.35em] uppercase mt-1.5"
          style={{ color: taglineColor }}
        >
          La solution pour vos cheveux
        </span>
      )}
    </div>
  );
}
