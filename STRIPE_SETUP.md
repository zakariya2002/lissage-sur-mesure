# Configuration Stripe — Lissage sur Mesure

Guide de setup et de passage du mode test au mode live.

---

## 🧪 Phase 1 — Mode TEST (développement)

### 1. Créer un compte Stripe (5 min, sans vérification)

- Aller sur https://dashboard.stripe.com/register
- Choisir « France »
- **Skipper toutes les étapes de vérification KYC** (RIB, SIRET, justificatifs) → on reste en mode test
- Atterrir sur le dashboard avec le toggle **« Mode test »** activé en haut à droite

### 2. Créer les 2 produits dans Stripe (mode test)

Dans le Dashboard → **Products** → **+ Add product** :

| Produit | Prix |
|---|---|
| Lissage Sur Mesure | 183,33 € |
| Lissage SILK | 191,67 € |

Pour chaque produit, copier le **Price ID** (commence par `price_`) — on en aura besoin à l'étape 4.

### 3. Récupérer les clés API

Dashboard → **Developers** → **API keys**.

- `Publishable key` (commence par `pk_test_...`)
- `Secret key` (commence par `sk_test_...` — révéler avec « Reveal test key »)

### 4. Configurer le webhook (mode test)

Dashboard → **Developers** → **Webhooks** → **+ Add endpoint** :

- URL : `https://VOTRE-DOMAINE-VERCEL.vercel.app/api/webhooks/stripe`
  (ou `https://localhost:3000/...` via Stripe CLI pour le dev local — voir section dev local)
- Événement à écouter : `checkout.session.completed`
- Copier le **Signing secret** (commence par `whsec_...`)

### 5. Renseigner `.env.local`

Copier `.env.local.example` → `.env.local` et remplir :

```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_SUR_MESURE=price_...
STRIPE_PRICE_SILK=price_...

RESEND_API_KEY=re_...
ORDER_NOTIFICATION_EMAIL=ton-email@gmail.com
ORDER_FROM_EMAIL=noreply@TON-DOMAINE.fr

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 6. Setup Resend (emails)

- Créer un compte sur https://resend.com (gratuit, 3000 emails/mois)
- **Vérifier un domaine** d'envoi (ex: `lissage-sur-mesure.com`) — DNS à configurer (5 min sur OVH/Gandi/Cloudflare)
- Récupérer l'API key et la mettre dans `RESEND_API_KEY`
- ⚠️ Sans domaine vérifié, Resend ne peut envoyer que vers l'email de l'owner du compte (suffisant pour le dev)

### 7. Tester en local

```bash
npm run dev
```

Visiter http://localhost:3000/boutique → cliquer « Acheter ».

**Cartes de test Stripe :**
- Succès : `4242 4242 4242 4242`
- Échec (refus banque) : `4000 0000 0000 9995`
- 3D Secure requis : `4000 0025 0000 3155`
- N'importe quelle date future + n'importe quel CVC

### 8. Tester le webhook en local

Installer Stripe CLI : https://stripe.com/docs/stripe-cli

```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Le CLI affiche un `whsec_...` à mettre temporairement dans `STRIPE_WEBHOOK_SECRET` pour le dev local.

---

## 🚀 Phase 2 — Passage en LIVE (production)

À faire une fois que la cliente a :
1. ✅ Créé son compte Stripe **avec son SIRET et son RIB**
2. ✅ Reçu la confirmation de vérification (email Stripe « Your account is now activated »)

### 1. Recréer les produits en mode LIVE

Toggle **« Mode test » → OFF** dans le Dashboard. Recréer les 2 mêmes produits côté live (Stripe ne migre pas auto). Copier les nouveaux Price IDs.

### 2. Récupérer les clés LIVE

Dashboard (mode live) → **Developers** → **API keys** :
- `pk_live_...`
- `sk_live_...` (révéler avec confirmation par email)

### 3. Créer le webhook LIVE

Dashboard (mode live) → **Webhooks** → **+ Add endpoint** :
- URL : `https://lissage-sur-mesure.com/api/webhooks/stripe` (ou domaine final)
- Event : `checkout.session.completed`
- Copier le `whsec_live_...`

### 4. Mettre à jour les env vars Vercel

```bash
vercel env add STRIPE_SECRET_KEY production
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
vercel env add STRIPE_WEBHOOK_SECRET production
vercel env add STRIPE_PRICE_SUR_MESURE production
vercel env add STRIPE_PRICE_SILK production
vercel env add RESEND_API_KEY production
vercel env add ORDER_NOTIFICATION_EMAIL production
vercel env add ORDER_FROM_EMAIL production
vercel env add NEXT_PUBLIC_SITE_URL production
```

(Ou via le dashboard Vercel : Project → Settings → Environment Variables)

### 5. Redéployer

```bash
vercel --prod
```

### 6. Test final

Faire une vraie commande (1€ minimum) avec sa propre carte → vérifier :
- ✅ Paiement OK dans le dashboard Stripe
- ✅ Email reçu sur `ORDER_NOTIFICATION_EMAIL`
- ✅ Page `/commande/succes` s'affiche

---

## 📊 Frais Stripe (rappel)

- **Cartes EU** : 1,5 % + 0,25 €
- **Cartes hors EU** : 2,5 % + 0,25 €
- Virements vers RIB : gratuits, J+7 par défaut
- Pas d'abonnement, pas de setup fee

## 🛒 Modifier les frais de port

Éditer `src/app/api/checkout/route.ts` → array `shipping_options`. Tarifs en **centimes** (790 = 7,90 €).

## ➕ Ajouter un produit

1. Créer le produit dans Stripe Dashboard, copier le Price ID
2. Ajouter une env var `STRIPE_PRICE_NOUVEAU=price_...`
3. Ajouter une entrée dans `src/lib/products.ts`

## 💸 Rembourser une commande

Stripe Dashboard → Payments → cliquer la transaction → **Refund**.
⚠️ Les frais Stripe initiaux ne sont **pas remboursés**.
