# Analyse de Marché — CashChantier
> Outil de gestion de trésorerie prévisionnelle pour artisans solo du bâtiment en France
> Rédigé le 2026-04-14

---

## 1. Taille du marché

### Données structurelles

Le secteur du bâtiment français est massivement composé de très petites structures :

| Indicateur | Valeur |
|---|---|
| Entreprises BTP totales en France (2024) | ~440 000 |
| Part TPE (< 10 salariés) | **95,8 %** → ~422 000 |
| Établissements artisanaux 0–9 salariés (2022) | 523 498 |
| Part sans aucun salarié (solo) | **~63 %** → ~330 000 |
| Non-salariés actifs dans le bâtiment | ~396 000 |

**Cible primaire estimée : 230 000 à 330 000 artisans solo / micro-entrepreneurs du bâtiment en France.**

Ce chiffre comprend : plombiers, électriciens, maçons, peintres, menuisiers, couvreurs, carreleurs, plâtriers… Les corps d'état les plus représentés (second œuvre) sont aussi ceux qui accumulent le plus de petits chantiers successifs — exactement le profil le plus exposé aux décalages de trésorerie.

### Marché adressable (SAM)

Tous ces artisans ne sont pas immédiatement convertissables : il faut cibler ceux qui :
- Ont un minimum d'activité récurrente (≥ 3 chantiers/mois)
- Utilisent déjà un outil numérique (devis/factures en ligne)
- Ont déjà subi un problème de trésorerie concret

Estimation réaliste : **80 000 à 120 000 artisans "digitalisés et pain-aware"**, soit un marché adressable de **~100 M€/an** à 80–100 €/mois (ARR potentiel brut avant concurrence).

---

## 2. Douleurs principales

### Le BTP, champion des faillites par défaut de cash

- Le BTP représente **25 % des faillites en France**, soit plus de **17 000 entreprises rayées** en 2025.
- **1 faillite sur 4** est directement liée à des retards de paiement (Banque de France).
- **47 % des factures BTP** sont réglées avec plus de 30 jours de retard.
- Les retards de règlement ont privé les PME bâtiment de **15 milliards € de trésorerie** supplémentaire.

### Pain points spécifiques des artisans solo

1. **Le BFR (Besoin en Fonds de Roulement) invisible** : l'artisan avance matériaux, carburant, outillage, charges sociales — sans savoir précisément quand rentrent les paiements.
2. **Le décalage chantier → facture → paiement** : chantier terminé un vendredi, facture envoyée le lundi, paiement espéré sous 30–60 jours. La trésorerie peut être à zéro entre deux chantiers.
3. **Pas de vision prévisionnelle** : la plupart des artisans gèrent "à vue" depuis le solde bancaire. Ils découvrent le problème le jour où le virement de charges sociales ne passe pas.
4. **Accumulation de "petits oublis"** : factures non relancées, acomptes non réclamés, avoir non émis — qui s'additionnent en manque à gagner.
5. **Saisonnalité et creux d'activité** : les mois d'hiver ou post-vacances créent des valleys de trésorerie prévisibles mais non anticipées.
6. **Peur de l'outil comptable** : les artisans ne veulent pas un logiciel de comptabilité (perçu comme complexe, réservé à l'expert-comptable). Ils veulent **savoir si demain matin ils auront de l'argent**.

---

## 3. Concurrents existants

### Concurrents directs (trésorerie prévisionnelle)

| Solution | Cible | Prix | Forces | Faiblesses pour artisans |
|---|---|---|---|---|
| **Agicap** | PME 10–50 M€ CA | 149–799 €/mois | Prévisionnel avancé, multi-banques | Beaucoup trop cher et complexe pour un artisan solo |
| **Fygr** | TPE/PME | 59–99 €/mois | Interface épurée, rapport qualité/prix | Généraliste, pas de logique "chantier" |
| **RocketChart (Sellsy)** | PME | ~50–80 €/mois | Intégration comptable | Fusionné dans suite Sellsy, pas BTP-spécifique |
| **Axonaut** | Startups/PME | ~50 €/mois | ERP complet | Complexité, learning curve importante |

### Concurrents indirects (gestion chantier avec module financier)

| Solution | Cible | Prix | Module trésorerie |
|---|---|---|---|
| **Obat** | Artisans BTP | dès 25 €/mois | Suivi factures + avances, pas de prévi cash |
| **Batappli** | Artisans BTP | 79 €/mois (Artisan) | Devis/factures, pas de trésorerie prévisionnelle |
| **Alobees** | TPE BTP | ~40 €/mois | Planning + RH, pas de cash flow |
| **Vertuoza** | Artisans/PME BTP | Sur devis | Devis/factures/chantiers, très peu de tréso prévi |
| **Pennylane** | TPE/comptables | ~60–80 €/mois | Comptabilité + rapprochement, pas de focus BTP |
| **Kizeo Forms** | Terrain BTP | 9,90–14,90 €/mois | Formulaires terrain, zéro trésorerie |

### Analyse du gap concurrentiel

**Personne ne fait exactement ce que CashChantier propose :** une vision prévisionnelle de trésorerie construite *depuis les chantiers signés*, les factures en attente et les charges fixes, pensée pour quelqu'un qui n'a pas de DAF ni de comptable en interne.

- Agicap/Fygr : puissants mais génériques et chers → pas adaptés à l'artisan solo
- Obat/Batappli : parfaits pour devis/factures BTP → mais pas de trésorerie prévisionnelle
- Pennylane : comptabilité temps réel → mais pas de logique chantier ni prévision cash

**Conclusion : Le créneau est réel et non servi.**

---

## 4. Modèle de monétisation

### Recommandation : abonnement mensuel, sans freemium complet

Le freemium est une stratégie d'acquisition, pas de monétisation. Chez les artisans BTP, la valeur perçue est immédiate ("je vois enfin où j'en suis") — ce qui justifie un essai gratuit limité dans le temps plutôt qu'un plan free permanent.

#### Structure tarifaire recommandée

| Plan | Prix | Contenu | Cible |
|---|---|---|---|
| **Essai gratuit** | 0 € / 14 jours | Accès complet, pas de CB requise | Activation |
| **Solo** | **12,90 €/mois** | 1 utilisateur, jusqu'à 10 chantiers actifs, tréso prévi 3 mois, alertes | Artisan solo débutant |
| **Pro** | **19,90 €/mois** | Chantiers illimités, prévi 12 mois, relance auto, export expert-comptable | Artisan confirmé |

#### Justification du pricing

- **< 20 €/mois** est le seuil psychologique des artisans pour les outils numériques (observé sur Obat, Kizeo, Alobees).
- À 19,90 €/mois, un seul chantier sauvé par une alerte de trésorerie **rembourse l'outil 100x**.
- La valeur se positionne non pas comme "logiciel comptable" mais comme **"alarme incendie financière"** : simple, critique, cheap à l'échelle du risque évité.

#### Objectifs de revenus (projection 36 mois)

| Étape | Clients payants | ARR estimé |
|---|---|---|
| M6 | 200 | ~36 000 € |
| M12 | 800 | ~140 000 € |
| M24 | 2 500 | ~450 000 € |
| M36 | 5 000 | **~900 000 €** |

Hypothèses : MRR moyen 15 €, churn mensuel 3 %, croissance organique + partenariats CAPEB.

---

## 5. Risques et opportunités

### Risques

| Risque | Niveau | Mitigation |
|---|---|---|
| **Faible appétence numérique** des artisans | ★★★★☆ | UX mobile-first ultra-simple, onboarding < 5 min |
| **Concurrence des suites complètes** (Obat, Batappli) qui ajoutent un module tréso | ★★★☆☆ | Se spécialiser et aller plus loin dans la prévision |
| **Acquisition difficile** (artisans peu présents en ligne) | ★★★★☆ | Partenariats CAPEB, experts-comptables spé BTP, bouche-à-oreille |
| **Churn élevé si valeur pas perçue vite** | ★★★☆☆ | Onboarding guidé, alerte tréso déclenchée dès J+3 |
| **Prix bas → difficulté à scaler** | ★★☆☆☆ | Plan Pro à 19,90 + upsell relance automatique |
| **Contexte dégradé BTP (2024–2025)** : hausse des faillites → cibles en difficulté | ★★★☆☆ | Crisis = besoin = opportunité de timing |

### Opportunités

1. **Timing de crise** : avec 17 000 faillites BTP en 2025, la sensibilité au cash flow n'a jamais été aussi haute. Le marché "cherche" une solution.
2. **Digitalisation en hausse** : la proportion d'artisans utilisant des outils SaaS croît de ~15 %/an (source CAPEB). La base adressable s'élargit chaque année.
3. **Distribution via expert-comptable** : 80 % des artisans TPE ont un expert-comptable. Un canal B2B2C via cabinets spécialisés BTP (Fiducial, Cerfrance…) peut démultiplier l'acquisition.
4. **Partenariats bancaires** : Qonto, Shine, ou Crédit Agricole Pro pourraient intégrer ou recommander CashChantier à leurs clients artisans.
5. **Module "relance client"** comme upsell naturel : une fois la tréso visualisée, automatiser les relances est la suite logique → +5 €/mois facilement.
6. **Extension progressive** : démarrer BTP solo → élargir ensuite aux artisans avec 1–2 salariés, ou aux auto-entrepreneurs d'autres corps de métier (plombiers, électriciens, etc.).

---

## 6. Conclusion — Viabilité du projet

### Verdict : **Projet viable, créneau réel, timing favorable**

CashChantier répond à un besoin documenté, douloureux et mal adressé par les solutions actuelles. Le marché cible est large (230 000–330 000 artisans solo), la douleur est forte (1 faillite BTP sur 4 liée au cash), et aucun acteur ne propose aujourd'hui une solution prévisionnelle *pensée depuis la logique chantier*.

### Conditions de succès

1. **UX mobile-first, onboarding < 5 minutes** : l'artisan doit voir sa tréso prévisionnelle dès la première session, sans formation.
2. **Aller chercher les artisans là où ils sont** : groupes Facebook BTP, forums Batiweb, CAPEB locale, comptables spé TPE — pas via SEO généraliste.
3. **Commencer par une seule fonctionnalité irréductible** : la courbe tréso prévisionnelle sur 90 jours, alimentée à la main depuis les chantiers et charges fixes. Le reste peut venir ensuite.
4. **Pricing < 20 €/mois, essai sans CB** : réduire le friction d'entrée au maximum pour un public méfiant des abonnements.
5. **Transformer un expert-comptable spé BTP en early adopter / prescripteur** : 1 cabinet peut amener 50–200 clients.

### Points de différenciation à défendre

- "Construit pour le chantier, pas pour le DAF" → langage artisan, pas financier
- Vision prévisionnelle en temps réel (pas juste un solde actuel)
- Intégration du décalage de paiement comme fonctionnalité native
- Alertes simples : "Attention, dans 3 semaines ton solde sera négatif si [chantier X] n'est pas encaissé"

---

*Sources principales :*
- [CAPEB — Chiffres clés de l'artisanat du bâtiment](https://www.capeb.fr/les-chiffres-de-lartisanat)
- [Independant.io — Marché du BTP, chiffres clés 2026](https://independant.io/chiffres-tendances-btp/)
- [Payflo — Faillites artisans BTP, signaux d'alerte](https://payflo.fr/blog/faillite-artisan-btp-signaux-alerte/)
- [Batiscript — Retards de paiement BTP](https://www.batiscript.com/retards-paiement-btp/)
- [Tool Advisor — Comparatif logiciels trésorerie 2026](https://tool-advisor.fr/logiciel-tresorerie/)
- [Tool Advisor — Avis Agicap](https://tool-advisor.fr/logiciel-tresorerie/agicap/)
- [Tool Advisor — Avis Fygr](https://tool-advisor.fr/logiciel-tresorerie/fygr/)
- [Obat — Logiciel bâtiment](https://www.obat.fr/)
- [Batappli — Logiciel artisan BTP](https://www.batappli.fr/)
- [Payflo — Meilleurs logiciels gestion artisan BTP](https://payflo.fr/blog/meilleurs-logiciels-gestion-artisan-btp-guide-complet/)
