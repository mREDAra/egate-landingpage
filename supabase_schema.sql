-- Create the table for eligibility requests (if it doesn't exist)
create table if not exists public.eligibility_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Personal / Store Info
  full_name text not null,
  store_name text not null,
  store_link text not null,
  email text not null,
  whatsapp text not null,
  
  -- Activity Details
  activity_type text not null,
  is_store_active text not null,
  
  -- Problems & History
  payment_problems text[] not null default '{}',
  previous_freeze text not null,
  
  -- Volume & Requirements
  monthly_sales text not null,
  currencies text[] not null default '{}',
  
  -- Assessment
  current_situation text not null,
  accepts_fees text not null,
  gold_question text not null
);

-- Enable Row Level Security (RLS)
alter table public.eligibility_requests enable row level security;

-- Drop existing policy if any to avoid conflicts
drop policy if exists "Allow public inserts" on public.eligibility_requests;
drop policy if exists "Allow service role to view all" on public.eligibility_requests;

-- Create a policy that allows anyone (anon) to insert data
create policy "Allow public inserts"
on public.eligibility_requests
for insert
to public
with check (true);

-- Create a policy that allows service role to view data (optional, for admin dashboard)
create policy "Allow service role to view all"
on public.eligibility_requests
for select
to service_role
using (true);
