# Guide opérationnel — Achat de domaine & connexion Vercel

> **Contexte :** `batiflow.fr` est déjà pris. Ce guide couvre l'achat de `getbatiflow.fr` ou `batiflow.app` puis la connexion du domaine à Vercel.

---

## 1. Choix du domaine

| Domaine | Extension | Avantage |
|---|---|---|
| `getbatiflow.fr` | `.fr` | Crédibilité locale France, marché cible BTP artisans |
| `batiflow.app` | `.app` | Extension "SaaS" moderne, reconnue globalement |

**Recommandation : `getbatiflow.fr`** pour un produit vendu uniquement en France à des artisans BTP.

---

## 2. Registrar recommandé

### OVH (recommandé #1 pour .fr)
- URL : https://www.ovhcloud.com/fr/domains/
- Prix `.fr` : **~6–7 €/an** (renouvellement identique)
- Prix `.app` : **~17–20 €/an**
- Avantages : Dashboard français, DNS intégré, support FR, numéro FR reconnu dans l'admin AFNIC
- DNSSEC inclus, zone DNS modifiable instantanément

### Gandi (alternative qualitative)
- URL : https://www.gandi.net/fr/domain
- Prix `.fr` : **~9 €/an**, `.app` : **~20 €/an**
- Avantages : Réputation excellente, interface claire, 2 boîtes mail incluses
- Idéal si vous voulez aussi un e-mail `contact@getbatiflow.fr`

### Namecheap (option internationale)
- URL : https://www.namecheap.com
- Prix `.fr` : **~8 €/an**, `.app` : **~15 €/an**
- Inconvénient : Interface en anglais, support moins réactif pour `.fr`

**→ Choisir OVH ou Gandi pour un `.fr`.**

---

## 3. Étapes d'achat sur OVH

### 3.1 Créer un compte OVH (si pas encore fait)
1. Aller sur https://www.ovhcloud.com/fr/
2. Cliquer **"Créer un compte"** en haut à droite
3. Remplir : prénom, nom, e-mail, mot de passe
4. Valider l'e-mail de confirmation

### 3.2 Chercher et réserver le domaine
1. Aller sur https://www.ovhcloud.com/fr/domains/
2. Saisir `getbatiflow` dans le champ de recherche
3. Sélectionner l'extension `.fr` (ou `.app`)
4. Cliquer **"Ajouter au panier"**
5. Vérifier dans le récapitulatif : **aucune option payante superflue** (décocher hébergement, e-mail si proposés)
6. Cliquer **"Commander"**

### 3.3 Informations WHOIS (obligatoires pour .fr)
Pour un `.fr`, l'AFNIC exige des coordonnées réelles :
- Nom / prénom du titulaire (ou raison sociale)
- Adresse postale complète
- Numéro de téléphone français
- E-mail valide

> **Important :** Cocher **"Activer la protection WHOIS"** (WhoIs Privacy) pour masquer vos coordonnées publiquement — gratuit chez OVH.

### 3.4 Paiement et confirmation
1. Choisir le mode de paiement (CB, PayPal, virement)
2. Valider la commande
3. Attendre l'e-mail de confirmation OVH (généralement < 5 minutes)
4. Le domaine apparaît dans votre espace client OVH sous **"Web Cloud > Noms de domaine"**

---

## 4. Connexion du domaine à Vercel

> Le projet BatiFlow est déjà déployé sur Vercel via le repo GitHub `nanocorp-hq/pagehush`.

### 4.1 Ajouter le domaine dans Vercel
1. Aller sur https://vercel.com → se connecter
2. Ouvrir le projet **pagehush** (ou le projet BatiFlow concerné)
3. Aller dans **Settings → Domains**
4. Cliquer **"Add Domain"**
5. Saisir `getbatiflow.fr` (ou `batiflow.app`)
6. Cliquer **"Add"**

Vercel affiche alors les enregistrements DNS à configurer. Deux options :

---

### Option A — Nameservers OVH (plus simple, recommandée)

> Vercel gère tout le DNS si vous déléguez les nameservers.

**Dans Vercel :**
Après avoir ajouté le domaine, Vercel propose l'option **"Use Vercel Nameservers"**.
Il vous donnera 4 nameservers de la forme :
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Dans OVH :**
1. Aller dans **"Web Cloud > Noms de domaine > getbatiflow.fr"**
2. Onglet **"Serveurs DNS"**
3. Cliquer **"Modifier les serveurs DNS"**
4. Remplacer les serveurs OVH par ceux fournis par Vercel
5. Sauvegarder

Propagation DNS : **15 minutes à 24h** (généralement < 1h)

---

### Option B — Enregistrements DNS manuels (si vous gardez DNS OVH)

> Recommandé si vous avez d'autres services (e-mail, etc.) sur le même domaine.

Vercel affiche les enregistrements suivants à créer :

**Pour le domaine racine `getbatiflow.fr` :**

| Type | Nom | Valeur |
|---|---|---|
| `A` | `@` | `76.76.21.21` |

**Pour le sous-domaine `www` :**

| Type | Nom | Valeur |
|---|---|---|
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Dans OVH, pour ajouter ces enregistrements :**
1. Aller dans **"Web Cloud > Noms de domaine > getbatiflow.fr"**
2. Onglet **"Zone DNS"**
3. Cliquer **"Ajouter une entrée"**
4. Ajouter l'entrée `A` avec la valeur `76.76.21.21` pour `@`
5. Ajouter l'entrée `CNAME` avec la valeur `cname.vercel-dns.com` pour `www`
6. Sauvegarder

Propagation DNS : **5 à 60 minutes** (zone OVH se propage rapidement)

---

### 4.2 Vérification dans Vercel

1. Retourner dans **Vercel > Settings > Domains**
2. Attendre que le badge passe au vert **"Valid Configuration"**
3. Vercel génère automatiquement un certificat SSL (Let's Encrypt) — **< 5 minutes** après validation DNS
4. Tester : ouvrir `https://getbatiflow.fr` dans un navigateur → le site BatiFlow doit s'afficher

---

## 5. Configurer la redirection www → racine

Dans Vercel, après avoir ajouté `getbatiflow.fr` et `www.getbatiflow.fr` :
- Vercel propose de définir l'un comme "primary domain"
- Choisir **`getbatiflow.fr`** comme domaine principal
- Vercel redirige automatiquement `www.getbatiflow.fr` → `getbatiflow.fr` (301)

---

## 6. Mettre à jour APP_BASE_URL sur Vercel

Après connexion du domaine, mettre à jour la variable d'environnement :

```bash
nanocorp vercel env set APP_BASE_URL https://getbatiflow.fr
```

Cette variable est utilisée pour les liens magic-link d'authentification (voir `lib/email.ts`).

> **Important :** Déclencher un nouveau déploiement après ce changement (via un push sur `main`).

---

## 7. Récapitulatif des coûts estimés

| Poste | Coût |
|---|---|
| `getbatiflow.fr` chez OVH (1 an) | ~7 €/an |
| `batiflow.app` chez OVH (1 an) | ~19 €/an |
| Certificat SSL | **Gratuit** (Vercel/Let's Encrypt) |
| DNS Vercel | **Gratuit** |

---

## 8. Checklist de déploiement

- [ ] Compte OVH créé et vérifié
- [ ] Domaine `getbatiflow.fr` acheté (~7€)
- [ ] Protection WHOIS activée
- [ ] Domaine ajouté dans Vercel (Settings → Domains)
- [ ] Enregistrements DNS configurés (A + CNAME ou nameservers Vercel)
- [ ] Badge vert "Valid Configuration" dans Vercel
- [ ] SSL actif (cadenas dans le navigateur)
- [ ] `APP_BASE_URL` mis à jour dans les env vars Vercel
- [ ] Nouveau déploiement déclenché (push sur `main`)
- [ ] Test e2e : inscription + magic link fonctionne sur le vrai domaine
