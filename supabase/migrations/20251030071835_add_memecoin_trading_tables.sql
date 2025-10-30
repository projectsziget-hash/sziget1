/*
  # Add Memecoin Trading System Tables

  1. New Tables
    - `trades`
      - `id` (uuid, primary key) - Unique trade identifier
      - `trader_name` (text) - Name of the trader
      - `wallet_address` (text) - Solana wallet address
      - `trade_type` (text) - Type: 'buy' or 'sell'
      - `sol_amount` (numeric) - Amount of SOL in transaction
      - `sziget_amount` (numeric) - Amount of SZIGET tokens
      - `price_per_token` (numeric) - Price per SZIGET token in SOL
      - `transaction_signature` (text) - Solana transaction signature
      - `status` (text) - Status: 'pending', 'completed', 'failed'
      - `created_at` (timestamptz) - Timestamp of trade
  
  2. Changes to Existing Tables
    - Add `transaction_signature` column to contributions table
    - Add `status` column to contributions table
  
  3. Security
    - Enable RLS on `trades` table
    - Add policy for public read access
    - Add policy for public insert access
  
  4. Indexes
    - Index on `created_at` for efficient sorting
    - Index on `wallet_address` for user trade history
*/

-- Add new columns to contributions table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contributions' AND column_name = 'transaction_signature'
  ) THEN
    ALTER TABLE contributions ADD COLUMN transaction_signature text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contributions' AND column_name = 'status'
  ) THEN
    ALTER TABLE contributions ADD COLUMN status text DEFAULT 'completed';
  END IF;
END $$;

-- Create trades table
CREATE TABLE IF NOT EXISTS trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trader_name text NOT NULL,
  wallet_address text NOT NULL,
  trade_type text NOT NULL CHECK (trade_type IN ('buy', 'sell')),
  sol_amount numeric NOT NULL CHECK (sol_amount > 0),
  sziget_amount numeric NOT NULL CHECK (sziget_amount > 0),
  price_per_token numeric NOT NULL CHECK (price_per_token > 0),
  transaction_signature text DEFAULT '',
  status text DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS trades_created_at_idx ON trades(created_at DESC);
CREATE INDEX IF NOT EXISTS trades_wallet_address_idx ON trades(wallet_address);
CREATE INDEX IF NOT EXISTS trades_trade_type_idx ON trades(trade_type);

-- Enable Row Level Security
ALTER TABLE trades ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view trades
CREATE POLICY "Anyone can view trades"
  ON trades
  FOR SELECT
  USING (true);

-- Policy: Anyone can add trades
CREATE POLICY "Anyone can add trades"
  ON trades
  FOR INSERT
  WITH CHECK (
    trader_name IS NOT NULL 
    AND trader_name != '' 
    AND wallet_address IS NOT NULL
    AND wallet_address != ''
    AND sol_amount > 0
    AND sziget_amount > 0
  );