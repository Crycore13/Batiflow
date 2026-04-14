# Analyse de Marché — DossierSubvention
*Ciblage : artisans RGE en France — Rédigé le 2026-04-14*

---

## 1. Taille du Marché

### Artisans RGE en France

| Indicateur | Valeur | Source |
|---|---|---|
| Entreprises RGE actives (2024) | ~61 800 | ADEME / Effy |
| Pic historique (2021) | 71 477 | ADEME |
| Baisse entre 2021 et 2024 | -13 % | — |
| Objectif gouvernemental 2025 | 100 000 | Gouvernement |
| Écart objectif/réalité | ~38 000 entreprises manquantes | — |

**Signal fort :** La baisse continue du nombre d'artisans RGE est en partie causée par la charge administrative jugée trop lourde. Des artisans renoncent délibérément à leur label pour éviter la paperasse, ce qui constitue un levier direct pour une application comme DossierSubvention.

### Volume de dossiers MaPrimeRénov' (MPR)

- **2020–2024** : 2,3 millions de dossiers MPR traités au total (ANAH)
- **2024 seul** : ~172 000 dossiers de rénovation par geste + ~35 000 rénovations d'ampleur
- **Pic T2 2024** : +61 % de rénovations d'ampleur vs T2 2023
- **Montant total engagé** : 1,85 Md€ d'aides → 4,2 Md€ de travaux générés

### Certificats d'Économie d'Énergie (CEE)

- 5ème période (2022–2025) : 1 456 TWhc de CEE classiques + 583 TWhc de CEE précarité
- Chaque artisan RGE réalisant des travaux éligibles doit constituer un dossier CEE par chantier
- Chaque artisan actif génère entre **5 et 30 dossiers CEE/an** selon sa spécialité

### Estimation du marché adressable

- ~62 000 artisans RGE × 12 dossiers en moyenne/an = **~744 000 dossiers/an**
- Avec un tarif SaaS de 49 €/mois par artisan : **TAM = ~36 M€/an** (marché total)
- SAM réaliste (20 % de pénétration à 3 ans) : **~7 M€ ARR**

---

## 2. Concurrents Existants

### Concurrents Directs (spécialisés subventions RGE)

| Acteur | Positionnement | Points forts | Points faibles |
|---|---|---|---|
| **Rénolib** | Gestion devis/factures + dossiers MPR/CEE + avances de trésorerie | Levée de 10 M€ (2023), fort marketing, avance sur prime | Prix non public, cible PME plutôt que solo artisan |
| **Hemea Pro** | Devis conformes RGE, gestion financements | UX soignée, intégration devis | Moins orienté "dossier administratif complet" |
| **Tactidevis** | Devis RGE conformes Qualibat | Spécifique bâtiment | Pas de gestion dossiers ANAH |

### Concurrents Indirects

| Acteur | Type | Menace |
|---|---|---|
| **Obat** | Logiciel devis/factures bâtiment | Peut ajouter un module subventions |
| **Sage Batigest** | ERP bâtiment avec simulateur éco-primes | Cible les grosses entreprises |
| **Secretdeclavier.fr** | Prestataire humain de montage de dossiers | Concurrent non-software, coûteux |
| **Maisons de l'artisanat / CAPEB** | Accompagnement gratuit institutionnel | Lent, peu digital |
| **Promee** | Plateforme CEE pour artisans | Spécialisé CEE seulement |

### Positionnement disponible

Rénolib occupe le haut de marché (PME, financement avancé). Il existe un **créneau non adressé** : l'artisan solo ou TPE (1–5 salariés) qui veut un outil simple, rapide, sans engagement, centré sur la conformité documentaire — sans la complexité d'une avance de trésorerie.

---

## 3. Douleurs Principales des Artisans

### Douleur #1 : Charge administrative écrasante
> *"Un artisan préfère faire une ristourne plutôt que de perdre du temps dans de l'administratif pur."*

Les artisans signalent passer **2 à 4 heures par dossier** MPR/CEE : collecte des pièces, conformité des mentions légales, envoi à l'ANAH ou à l'obligé CEE.

### Douleur #2 : Dossiers bloqués pour des raisons absurdes
Des erreurs mineures (différence d'un centime entre devis et facture, adresse mal orthographiée, RIB au mauvais nom) entraînent des refus ou des délais de plusieurs mois.

### Douleur #3 : Délais de paiement longs → problème de trésorerie
Le versement de la prime peut prendre **3 à 6 mois**, forçant certains artisans à avancer les fonds ou à refuser des chantiers.

### Douleur #4 : Instabilité réglementaire
Suspensions répétées de MPR (juillet–septembre 2025, suspension totale prévue début 2026), réformes fréquentes, nouveaux formulaires — maintenir la conformité est un travail à temps plein.

### Douleur #5 : Fraude et méfiance institutionnelle
44 000 dossiers frauduleux détectés en 2024. Les artisans honnêtes subissent des contrôles renforcés et des délais supplémentaires à cause des fraudeurs.

### Douleur #6 : Coût et complexité du label RGE lui-même
Obtention : jusqu'à plusieurs milliers d'euros + audits récurrents. Les artisans qui perdent leur RGE perdent l'accès aux aides — une application qui gère aussi les alertes d'échéance RGE aurait de la valeur.

---

## 4. Modèle de Monétisation Potentiel

### Option A : SaaS mensuel simple (recommandé pour le lancement)

| Plan | Prix | Cible | Contenu |
|---|---|---|---|
| **Starter** | 29 €/mois | Solo artisan | 1 utilisateur, 10 dossiers/mois, génération auto documents |
| **Pro** | 59 €/mois | TPE 2–5 pers. | 5 utilisateurs, dossiers illimités, alertes RGE, export comptable |
| **Agence** | 149 €/mois | Mandataires / assistants administratifs | Multi-artisans, tableau de bord, API |

**Justification prix** : Rénolib facture ~39–149 €/mois. Les artisans dépensent déjà 200–500 €/an en frais de secrétariat externaliste. Un SaaS à 29 €/mois est perçu comme compétitif.

### Option B : Commission sur dossiers validés

- 5–10 € par dossier MPR/CEE validé et financé
- Alignement d'intérêts avec l'artisan (on ne paye que si ça marche)
- Complexe à tracker, risque de non-paiement

### Option C : Freemium + Upsell

- **Gratuit** : 3 dossiers/mois, templates de base
- **Payant** : dossiers illimités, vérification automatique de conformité, alertes
- Recommandé pour acquérir rapidement les 500 premiers utilisateurs

### Recommandation

**Lancer en freemium** (3 dossiers gratuits/mois) pour briser la friction d'adoption, puis convertir vers le plan Starter à 29 €/mois. Objectif : 500 utilisateurs payants à 12 mois = **~14 500 €/mois MRR**.

---

## 5. Risques et Opportunités

### Risques

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| **Suspension prolongée de MaPrimeRénov'** | Élevée (déjà en cours) | Élevé | Couvrir aussi CEE, rénovation globale, EcoRénov — diversifier les dispositifs |
| **Rénolib accélère sur le segment solo** | Moyenne | Élevé | Se différencier sur UX et simplicité, pas sur le financement |
| **Réforme administrative ANAH** | Élevée | Moyen | Construire une couche d'abstraction réglementaire facilement mise à jour |
| **Fraudes → contrôles renforcés → artisans découragés** | Élevée | Moyen | Positionner l'outil comme un gage de conformité anti-fraude |
| **Instabilité réglementaire permanente** | Certaine | Moyen | C'est aussi une opportunité (les artisans ont besoin d'un outil qui suit les changements) |
| **Marché capté par les obligés CEE (TotalEnergies, EDF)** | Faible | Élevé | Les obligés ne font pas d'outil artisan, ils veulent le volume |

### Opportunités

| Opportunité | Potentiel |
|---|---|
| **Baisse du nombre d'artisans RGE** | Chaque artisan qui garde son label a encore plus besoin d'être efficace |
| **Loi anti-fraude 2025** | Renforce le besoin de conformité documentaire → argument de vente direct |
| **Rénovation d'ampleur en hausse (+61 % en 2024)** | Dossiers plus complexes = plus de valeur apportée par l'outil |
| **Faible digitalisation du secteur** | 70 % des artisans gèrent encore leurs dossiers sur papier ou Excel |
| **Effet réseau via mandataires** | Un mandataire utilisant DossierSubvention entraîne 10–30 artisans |
| **API ANAH en développement** | Si l'ANAH ouvre une API, les intégrations deviennent un avantage concurrentiel fort |
| **CEE 6ème période (2026–2029)** | Nouveau cadre réglementaire = nouveaux templates à construire avant les concurrents |

---

## 6. Conclusion : Viabilité du Projet

### Verdict : **VIABLE avec des conditions**

**Points positifs :**
- Marché large et bien identifié (~62 000 artisans RGE, marché total ~36 M€/an)
- Douleur réelle, récurrente et non résolue convenablement par les acteurs existants
- Le segment solo/TPE est sous-adressé par Rénolib qui vise les PME
- La complexité croissante (fraudes, réformes) renforce le besoin de l'outil dans la durée
- Modèle SaaS récurrent, CAC potentiellement bas via syndicats artisanaux (CAPEB, FFBATIMENT)

**Points de vigilance :**
- **Rénolib est un concurrent sérieux** avec 10 M€ levés et une avance produit
- L'instabilité de MaPrimeRénov' (suspensions, réformes) crée un risque de churn si les artisans quittent le dispositif
- Le secteur bâtiment est conservateur : l'adoption digitale est lente, le canal de vente compte autant que le produit

**Recommandation d'entrée sur le marché :**
1. Se positionner sur la **simplicité maximale** (vs la complexité de Rénolib) : "Dossier conforme en 5 minutes"
2. Couvrir **MPR + CEE + alertes échéance RGE** dès le V1
3. Distribuer via **CAPEB régionales, groupements d'artisans, syndicats** — pas uniquement via Google Ads
4. Lancer en **freemium** pour atteindre rapidement une masse critique d'utilisateurs
5. Viser **500 artisans payants à 29 €/mois** comme objectif de viabilité (= ~14 500 €/mois MRR)

---

*Sources principales :*
- [ADEME — Nombre d'entreprises RGE](https://data.ademe.fr/applications/nombre-d'entreprises-rge)
- [Effy — 61 000 entreprises RGE en 2024](https://www.effy.fr/communique-presse/61-000-entreprises-du-batiment-labellisees-rge-pour-200-000-renovations-globales-en-2024-aura-t)
- [ANAH — Bilan MaPrimeRénov' S1 2024](https://www.anah.gouv.fr/anatheque/bilan-maprimerenov-S12024)
- [Ministère Écologie — Bilan CEE P5 2024](https://www.ecologie.gouv.fr/politiques-publiques/dispositif-certificats-deconomies-denergie)
- [Rénolib — Solution et tarifs](https://www.renolib.fr/tarifs)
- [CAPEB — Alerte suspension MaPrimeRénov'](https://www.capeb.fr/actualites/possible-suspension-de-maprimerenov-la-capeb-alerte-sur-un-nouveau-coup-dur-pour-les-entreprises-artisanales-du-batiment-et-la-transition-energetique)
- [Batappli — MaPrimeRénov' 2025 suspension](https://www.batappli.fr/blog-du-logiciel-batiment/maprimerenov-changement-2025)
- [Cercle des Artisans — Dossier MPR bloqué](https://www.cercle-artisans.fr/blog/dossier-maprimerenov-bloque-solutions)
