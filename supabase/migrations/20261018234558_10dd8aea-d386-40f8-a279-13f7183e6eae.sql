create table public.tiktok_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  postzen_account_id text,
  username text not null,
  display_name text,
  avatar_url text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.tiktok_accounts to authenticated;
grant all on public.tiktok_accounts to service_role;
alter table public.tiktok_accounts enable row level security;
create policy tiktok_accounts_all_own on public.tiktok_accounts for all to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create trigger t_tiktok_accounts_updated before update on public.tiktok_accounts for each row execute function public.set_updated_at();

create table public.tiktok_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  account_id uuid not null references public.tiktok_accounts(id) on delete cascade,
  caption text not null default '',
  video_url text not null,
  scheduled_at timestamptz not null,
  status text not null default 'scheduled',
  postzen_post_id text,
  error_message text,
  views integer not null default 0,
  likes integer not null default 0,
  comments integer not null default 0,
  shares integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index tiktok_posts_user_sched on public.tiktok_posts(user_id, scheduled_at desc);
grant select, insert, update, delete on public.tiktok_posts to authenticated;
grant all on public.tiktok_posts to service_role;
alter table public.tiktok_posts enable row level security;
create policy tiktok_posts_all_own on public.tiktok_posts for all to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create trigger t_tiktok_posts_updated before update on public.tiktok_posts for each row execute function public.set_updated_at();