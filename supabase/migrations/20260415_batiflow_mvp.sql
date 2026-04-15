create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists chantiers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  nom_client text not null,
  montant_total numeric(12, 2) not null check (montant_total > 0),
  acompte_pct integer not null check (acompte_pct >= 0 and acompte_pct <= 100),
  date_debut date not null,
  date_fin_prevue date not null,
  statut_acompte text not null check (statut_acompte in ('paye', 'non_paye')),
  statut_solde text not null check (statut_solde in ('encaisse', 'en_attente', 'en_retard')),
  created_at timestamptz not null default now()
);

create index if not exists chantiers_user_id_idx on chantiers (user_id);
create index if not exists chantiers_date_fin_prevue_idx on chantiers (date_fin_prevue);
