/*
  # Sziget Memecoin Trading Platform Database Schema

  ## Overview
  Complete database schema for a charity memecoin trading platform supporting Sziget Festival fundraising.

  ## New Tables
  
  ### trades
  Records all token buy/sell transactions
  - `id` (uuid, primary key) - Unique trade identifier
  - `wallet_address` (text, required) - Trader's Solana wallet address
  - `trader_name` (text, optional) - Display name for trader
  - `trade_type` (text, required) - Either 'buy' or 'sell'
  - `sol_amount` (numeric, required) - Amount of SOL in transaction
  - `sziget_amount` (numeric, required) - Amount of SZIGET tokens traded
  - `price_per_token` (numeric, required) - Price per token at time of trade
  - `transaction_signature` (text, unique, required) - Solana blockchain transaction hash
  - `status` (text, required) - Trade status: 'pending', 'completed', or 'failed'
  - `created_at` (timestamptz) - Trade timestamp

  ### token_prices
  Historical price tracking for the SZIGET token
  - `id` (uuid, primary key) - Unique price record identifier
  - `price_usd` (numeric, required) - Token price in USD
  - `price_sol` (numeric, required) - Token price in SOL
  - `market_cap` (numeric, required) - Total market capitalization
  - `volume_24h` (numeric, required) - 24-hour trading volume
  - `created_at` (timestamptz) - Price snapshot timestamp

  ### wallets
  Tracked wallet addresses and their holdings
  - `id` (uuid, primary key) - Unique wallet record identifier
  - `wallet_address` (text, unique, required) - Solana wallet address
  - `wallet_name` (text, optional) - Display name for wallet
  - `sziget_balance` (numeric, required) - Current SZIGET token balance
  - `sol_balance` (numeric, required) - Current SOL balance
  - `total_trades` (integer, required) - Number of trades executed
  - `created_at` (timestamptz) - Wallet first tracked timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### contributions
  Charity donation records
  - `id` (uuid, primary key) - Unique contribution identifier
  - `wallet_address` (text, required) - Donor's wallet address
  - `contributor_name` (text, optional) - Display name for donor
  - `amount` (numeric, required) - Donation amount in SOL
  - `message` (text, optional) - Optional donation message
  - `transaction_signature` (text, unique, required) - Blockchain transaction hash
  - `status` (text, required) - Contribution status: 'pending', 'completed', or 'failed'
  - `created_at` (timestamptz) - Donation timestamp

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for transparency
  - No write access through RLS (server-side only)
*/

-- Create trades table
CREATE TABLE IF NOT EXISTS trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address text NOT NULL,
  trader_name text,
  trade_type text NOT NULL CHECK (trade_type IN ('buy', 'sell')),
  sol_amount numeric NOT NULL CHECK (sol_amount > 0),
  sziget_amount numeric NOT NULL CHECK (sziget_amount > 0),
  price_per_token numeric NOT NULL CHECK (price_per_token > 0),
  transaction_signature text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trades ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view trades"
  ON trades FOR SELECT
  TO public
  USING (true);

-- Create token_prices table
CREATE TABLE IF NOT EXISTS token_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  price_usd numeric NOT NULL CHECK (price_usd >= 0),
  price_sol numeric NOT NULL CHECK (price_sol >= 0),
  market_cap numeric NOT NULL CHECK (market_cap >= 0),
  volume_24h numeric NOT NULL CHECK (volume_24h >= 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE token_prices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view token prices"
  ON token_prices FOR SELECT
  TO public
  USING (true);

-- Create wallets table
CREATE TABLE IF NOT EXISTS wallets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address text UNIQUE NOT NULL,
  wallet_name text,
  sziget_balance numeric NOT NULL DEFAULT 0 CHECK (sziget_balance >= 0),
  sol_balance numeric NOT NULL DEFAULT 0 CHECK (sol_balance >= 0),
  total_trades integer NOT NULL DEFAULT 0 CHECK (total_trades >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view wallets"
  ON wallets FOR SELECT
  TO public
  USING (true);

-- Create contributions table
CREATE TABLE IF NOT EXISTS contributions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address text NOT NULL,
  contributor_name text,
  amount numeric NOT NULL CHECK (amount > 0),
  message text,
  transaction_signature text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contributions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view contributions"
  ON contributions FOR SELECT
  TO public
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_trades_wallet_address ON trades(wallet_address);
CREATE INDEX IF NOT EXISTS idx_trades_created_at ON trades(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_trades_status ON trades(status);
CREATE INDEX IF NOT EXISTS idx_token_prices_created_at ON token_prices(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wallets_address ON wallets(wallet_address);
CREATE INDEX IF NOT EXISTS idx_contributions_wallet_address ON contributions(wallet_address);
CREATE INDEX IF NOT EXISTS idx_contributions_created_at ON contributions(created_at DESC);