alter table users
add column if not exists subscription_status text not null default 'free';

do $$
begin
  alter table users
  add constraint users_subscription_status_check
  check (subscription_status in ('free', 'pro'));
exception
  when duplicate_object then null;
end
$$;

create index if not exists users_subscription_status_idx on users (subscription_status);
