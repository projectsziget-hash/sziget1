import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Contribution {
  id: string;
  contributor_name: string;
  amount: number;
  wallet_address: string;
  message: string;
  transaction_signature: string;
  status: string;
  created_at: string;
}

export interface Trade {
  id: string;
  trader_name: string;
  wallet_address: string;
  trade_type: 'buy' | 'sell';
  sol_amount: number;
  sziget_amount: number;
  price_per_token: number;
  transaction_signature: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}
