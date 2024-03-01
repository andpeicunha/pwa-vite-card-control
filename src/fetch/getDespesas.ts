import { supabase } from '@/auth/supabaseClient';

export async function getDespesas() {
  const { data } = await supabase.from('despesa').select('*');
  return data;
}
