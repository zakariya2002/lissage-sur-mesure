import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

/**
 * API Route — Amélioration d'images via Gemini (Google Generative AI)
 *
 * Utilise le modèle Gemini pour améliorer / transformer des images :
 * - Améliorer la qualité (upscale, netteté, couleurs)
 * - Retoucher un logo (fond transparent, nettoyage)
 * - Générer des variantes (light/dark, couleurs différentes)
 *
 * Configuration requise :
 * 1. Créer un fichier .env.local à la racine du projet
 * 2. Ajouter : GEMINI_API_KEY=votre_clé_api
 *    → Obtenir une clé : https://aistudio.google.com/app/apikey
 *
 * Endpoint : POST /api/enhance-image
 * Body (multipart/form-data) :
 *   - image: File (l'image à améliorer)
 *   - prompt: string (instruction d'amélioration)
 *
 * Exemples de prompts :
 *   - "Améliore la qualité de cette image, augmente la netteté et les couleurs"
 *   - "Rends le fond de ce logo transparent"
 *   - "Crée une version haute résolution de ce logo"
 *   - "Ajuste les couleurs pour correspondre à une palette crème et rose"
 */

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "GEMINI_API_KEY non configurée",
          help: "Ajoutez GEMINI_API_KEY=votre_clé dans .env.local",
        },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const imageFile = formData.get("image") as File | null;
    const prompt = (formData.get("prompt") as string) || "Améliore la qualité de cette image.";

    if (!imageFile) {
      return NextResponse.json(
        { error: "Aucune image fournie. Envoyez un champ 'image' en multipart/form-data." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(imageFile.type)) {
      return NextResponse.json(
        { error: `Type non supporté: ${imageFile.type}. Utilisez JPEG, PNG ou WebP.` },
        { status: 400 }
      );
    }

    if (imageFile.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "Image trop volumineuse. Maximum 10 MB." },
        { status: 400 }
      );
    }

    // Convertir l'image en base64
    const imageBuffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString("base64");

    // Initialiser Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // Appeler Gemini avec l'image et le prompt
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: imageFile.type,
          data: base64Image,
        },
      },
      {
        text: `Tu es un expert en traitement d'image et branding. ${prompt}

Contexte de la marque : "Lissage sur Mesure" — marque premium de lissage capillaire.
Palette : crème (#F5EDE3), noir profond (#1C1C1C), rose marbre (#C9A99E).
Style : minimaliste, luxueux, Didone typography.

Décris précisément les améliorations que tu recommandes pour cette image, étape par étape.
Si tu peux générer une version améliorée, fais-le. Sinon, donne des instructions détaillées.`,
      },
    ]);

    const response = result.response;
    const text = response.text();

    // Vérifier si la réponse contient une image générée
    const candidates = response.candidates;
    let enhancedImageBase64: string | null = null;
    let enhancedMimeType: string | null = null;

    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if ("inlineData" in part && part.inlineData) {
          enhancedImageBase64 = part.inlineData.data ?? null;
          enhancedMimeType = part.inlineData.mimeType ?? null;
          break;
        }
      }
    }

    return NextResponse.json({
      success: true,
      recommendations: text,
      hasEnhancedImage: !!enhancedImageBase64,
      enhancedImage: enhancedImageBase64
        ? `data:${enhancedMimeType};base64,${enhancedImageBase64}`
        : null,
    });
  } catch (error) {
    console.error("Erreur enhance-image:", error);
    return NextResponse.json(
      {
        error: "Erreur lors du traitement de l'image",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
