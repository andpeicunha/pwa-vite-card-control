import { supabase } from '@/auth/supabaseClient';

export async function getExpenses() {
  const { data } = await supabase.from('despesa').select('*');
  return data;
}
