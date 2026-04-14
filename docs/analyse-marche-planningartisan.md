# Analyse de Marché — PlanningArtisan

**Date :** Avril 2026
**Produit :** PlanningArtisan — outil de planning de chantiers ultra-simple pour artisans solo du bâtiment en France
**Fonctionnalités clés :** planning visuel des chantiers, alertes chevauchements, gestion des imprévus

---

## 1. Taille du marché

### Chiffres clés

| Indicateur | Donnée |
|---|---|
| Entreprises artisanales du bâtiment (France, 2024) | ~440 000 |
| Part TPE (0–9 salariés) | 94–95 % soit ~365 000–418 000 |
| Artisans sans salarié (solo) | 63 % des TPE → **~230 000–265 000 artisans solo** |
| Non-salariés (indépendants) dans le bâtiment | ~396 000 |
| CA total des TPE bâtiment | 87,5 Mds € (dont 63 % en rénovation-entretien) |

**Cœur de cible direct :** les artisans solo du bâtiment, soit environ **230 000 à 265 000 individus en France**.

En incluant les micro-entreprises et les TPE de 1 à 3 salariés, le marché adressable (SAM) s'étend à **350 000–400 000 structures**.

### Croissance du segment

Le stock d'établissements artisanaux de 0–9 salariés a progressé de **+21,5 % en 5 ans** (données CAPEB 2022). La dynamique est portée par la rénovation énergétique (MaPrimeRénov', RE2020) qui génère un flux continu de nouveaux chantiers pour les artisans indépendants.

### Taille du marché adressable (SOM réaliste)

Avec 230 000 artisans solo, un taux d'adoption de 5 % (benchmark SaaS B2B niche) à court terme représente **~11 500 clients potentiels**. À 15 €/mois, c'est **~2 M€ ARR** en phase de lancement — suffisant pour une startup early-stage.

---

## 2. Concurrents existants

### Concurrents directs (planning chantier)

| Solution | Positionnement | Prix indicatif | Points forts | Points faibles pour le solo |
|---|---|---|---|---|
| **Alobees** | PME bâtiment 1–15 pers. | ~40 €/mois + 10 €/user | Note 4.8/5, mobile, complet | Conçu pour équipes, trop riche pour solo |
| **Vertuoza** | PME/artisans BTP | Sur devis (Pro/Expert) | 2 500+ utilisateurs, tout-en-un | Complexe, onboarding long |
| **Obat** | Artisans TPE | ~25 €/mois | 21 000+ clients, devis/factures + planning | Planning secondaire (fonctionnalité additionnelle) |
| **Costructor** | Artisans TPE | Gratuit + dès 12,50 €/mois | Freemium, simple | Moins connu, faible adoption |
| **Multi-planning** | BTP générique | Variable | Partage planning | Interface datée |

### Concurrents indirects

| Outil | Usage chez les artisans | Problème |
|---|---|---|
| **Google Calendar / Agenda** | Très répandu (par défaut) | Pas de vision chantier, 0 alerte chevauchement |
| **Papier/cahier** | Encore majoritaire chez les solos | Aucune alerte, zéro visibilité |
| **Excel/Sheets** | Usage fréquent | Rigide, non mobile-first |
| **WhatsApp/SMS** | Coordination client | Pas de planning, informel |
| **Trello/Notion** | Minorité tech-savvy | Pas adapté au bâtiment |

### Analyse concurrentielle — Opportunité de positionnement

La majorité des solutions existantes ciblent les **PME avec équipes** ou offrent des **suites complètes** (devis + factures + RH + planning). Il n'existe **pas de solution mono-produit ultra-simple dédiée au solo** sur le seul problème du planning/chevauchements.

**Gap identifié :** un outil qui se lance en < 5 minutes, fonctionne sur mobile, et résout uniquement le problème de la collision de chantiers — sans déduplication de fonctionnalités déjà couvertes par d'autres outils.

---

## 3. Douleurs principales des artisans sur la planification

### Pain points validés par les données

1. **Chevauchements de chantiers non détectés** — L'absence d'outil centralisé conduit à des doubles-réservations fréquentes. Les outils utilisés (agenda, papier) n'alertent pas.

2. **Gestion des imprévus chaotique** — Retards, mauvaise météo, clients absents : un imprévu sur un chantier décale tout le reste sans visibilité sur l'impact en cascade.

3. **Surcharge cognitive et stress** — 51 % des artisans déclarent subir du stress lié à la gestion de leur activité ; 87 % des chefs d'entreprise BTP trouvent leur métier mentalement exigeant.

4. **Outils éparpillés** — Planning dans un endroit, clients dans un autre, devis ailleurs. Pas de vue d'ensemble en 1 coup d'œil.

5. **Manque de temps pour s'organiser** — Un artisan solo fait tout : chantier, devis, facturation, rendez-vous clients. L'organisation passe après.

6. **Peur du numérique / complexité perçue** — 81 % des professionnels de la construction considèrent les outils numériques difficiles à adopter. La promesse doit être : "opérationnel en 10 minutes".

7. **Perte de chantiers faute de suivi** — Un artisan surchargé sans planning clair refuse des chantiers par précaution, ou en accepte trop et déçoit ses clients.

### Citation représentative (verbatim terrain)

> *"La plupart des projets qui échouent ne sont pas dus à un manque de compétences, mais bien d'organisation."* — Source Substock/Obat

---

## 4. Modèle de monétisation potentiel

### Benchmark marché

- Fourchette constatée sur le segment artisan bâtiment : **12 € à 45 € HT/mois**
- Costructor : gratuit + 12,50 €/mois
- ProGBat : 17 €/mois (Start) ou 29 €/mois (Premium)
- Obat : ~25 €/mois
- Tolteck : 19–25 €/mois
- Alobees : ~40 €/mois (mais multi-users)

### Recommandation de pricing pour PlanningArtisan

**Modèle recommandé : Freemium → Paid**

| Plan | Prix | Contenu |
|---|---|---|
| **Gratuit** | 0 € | Jusqu'à 3 chantiers actifs, planning basique, 0 alerte |
| **Solo** *(cœur de cible)* | **14,90 € HT/mois** | Chantiers illimités, alertes chevauchements, gestion imprévus, rappels clients |
| **Pro** | 24,90 € HT/mois | + Export PDF, partage client, rappels automatiques SMS/email |

**Rationale :**
- Le gratuit crée l'habitude et réduit la barrière à l'entrée
- 14,90 € < un repas de midi en France — psychologiquement acceptable pour un professionnel
- Facturation annuelle avec remise 2 mois offerts pour améliorer la LTV
- **ARPU cible :** ~16 € (mix gratuit/payant/pro)

### Projections conservatrices

| Horizon | Clients payants | ARR |
|---|---|---|
| 6 mois | 200 | ~38 000 € |
| 12 mois | 800 | ~153 000 € |
| 24 mois | 2 500 | ~480 000 € |
| 36 mois | 6 000 | ~1,15 M€ |

Un exit ou levée de fonds devient crédible à partir de 500 000 € ARR (~2 600 clients payants).

---

## 5. Risques et Opportunités

### Risques

| Risque | Niveau | Mitigation |
|---|---|---|
| **Churn élevé** — artisans solos ont peu d'inertie | Élevé | Créer des habitudes fortes dès J+7 (onboarding guidé, premier chantier créé en live) |
| **Cannibalisation par Obat/Alobees** | Moyen | Ces acteurs ciblent des besoins plus larges ; rester ultra-focalisé sur la simplicité est une défense |
| **Résistance au numérique** | Élevé | Canal d'acquisition via YouTube/TikTok avec tutoriels ultra-simples ; recommandation par les pairs |
| **Saisonnalité du BTP** | Moyen | Offrir valeur ajoutée aussi en basse saison (estimation charge future, relances devis) |
| **Copie par un acteur établi** | Moyen-élevé | Vitesse d'exécution + distribution communautaire comme fossé défensif |
| **Marché fragmenté, CAC élevé** | Moyen | Croissance organique via forums artisans, CAPEB, fédérations, prescripteurs |

### Opportunités

| Opportunité | Potentiel |
|---|---|
| **Boom de la rénovation énergétique** — MaPrimeRénov', RE2020 génèrent un afflux de chantiers pour les artisans RGE | Très fort |
| **Marché peu digitalisé** — 1/3 du BTP sous-digitalisé, "premier entrant simple" a un avantage | Fort |
| **Réseau d'artisans** — Communauté soudée (CAPEB, CMA, forums), WOM puissant si produit bon | Fort |
| **Extension naturelle** — Devis/facturation, CRM client, gestion matériaux comme upsell futur | Moyen |
| **Partenariats prescripteurs** — CAPEB (440 000 adhérents), CMA, mutuelle Pros BTP | Fort |
| **Mobile-first** — La majorité des artisans est sur smartphone, pas PC ; peu de concurrents vraiment PWA/natif simple | Moyen-fort |

---

## 6. Conclusion — Viabilité du projet

### Verdict : **Projet viable, à condition de rester ultra-simple**

**Les signaux positifs sont forts :**
- 230 000+ artisans solo représentent un marché conséquent et sous-servi
- Les concurrents existants visent des fonctionnalités larges ; le créneau "planning seul, ultra-simple" est réel
- La douleur est validée (stress, chevauchements, imprévus) et la disposition à payer existe (~15–25 €/mois)
- La rénovation énergétique crée un afflux structurel de nouveaux chantiers

**Les conditions de succès :**
1. **Simplicité absolue** — Onboarding en < 5 min, premier chantier créé en < 2 min, zéro jargon
2. **Mobile-first** — L'artisan est sur chantier avec son téléphone, jamais derrière un bureau
3. **Distribution communautaire** — Forums (ForumConstruire, groupes Facebook artisans), partenariats CAPEB/CMA, YouTube "astuces artisan"
4. **Iteration rapide** — Lancer une version MVP avec les 3 fonctionnalités core (planning visuel + alertes + imprévus), collecter des retours terrain
5. **Freemium généreux** — Le gratuit doit être utile pour créer la masse critique et le bouche-à-oreille

**Le piège à éviter :** céder à la tentation d'ajouter devis, facturation, CRM dès le V1. Ces features existent déjà chez les concurrents. PlanningArtisan doit gagner sur la simplicité, pas sur l'exhaustivité.

**Estimation risque/récompense :** Risque modéré (marché existant, concurrents valident la demande), récompense solide (>1 M€ ARR à 3 ans plausible sans levée de fonds si croissance organique fonctionne).

---

## Sources

- [CAPEB — Chiffres clés de l'artisanat du bâtiment](https://www.capeb.fr/les-chiffres-de-lartisanat)
- [FFBâtiment — Le bâtiment en chiffres](https://www.ffbatiment.fr/le-batiment-en-chiffres)
- [Independant.io — Marché du BTP, chiffres clés 2026](https://independant.io/chiffres-tendances-btp/)
- [Obat — Comparatif logiciels planning chantier](https://www.obat.fr/blog/logiciel-planning-chantier/)
- [Organilog — Les 5 meilleurs logiciels planning chantier 2024](https://organilog-chantier.com/logiciel-planning-chantier/)
- [Vertuoza — Blog meilleurs logiciels planning chantier](https://www.vertuoza.com/fr-fr/blog/meilleurs-logiciels-planning-chantier)
- [Skello — 7 meilleurs logiciels planning chantier 2026](https://www.skello.io/blog/logiciels-planning-chantier)
- [Vertuoza — Réduire le stress avec une gestion de planning](https://vertuoza.com/ressources/planning-de-chantier-solution-pour-reduire-le-stress)
- [Substock — 3 erreurs fréquentes en gestion de chantier](https://www.substock.co/blog/erreurs-organisation-chantier-solutions)
- [TPE Mag — Rythme de travail et fatigue artisans BTP](https://tpe-mag.fr/rythme-de-travail-intense-et-fatigue-le-quotidien-des-artisans-du-btp.html)
- [Tolteck — SaaS et artisans du bâtiment](https://www.tolteck.com/fr-fr/saas-impact-artisans-batiment/)
- [Appvizer — Top 9 logiciels artisan 2025](https://www.appvizer.fr/magazine/construction/btp/logiciel-artisan)
- [FranceNum — Transformation numérique des artisans](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/transformation-numerique-des)
- [April Pro — Digitalisation des entreprises BTP](https://pro.april.fr/actualites/assurance-artisans-activite-professionnelle/digitalisation-entreprises-btp-peut-mieux-faire)
- [Alobees — Application planning chantier](https://www.alobees.com/application/application-planning-chantier)
- [LeBonLogiciel — Vertuoza prix et tarifs](https://lebonlogiciel.com/organisation-facturation-et-planification-gestion-commerciale-erp-gpao/vertuoza/prix/2864)
