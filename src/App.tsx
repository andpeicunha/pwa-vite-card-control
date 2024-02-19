import { useEffect, useState } from 'react';
import { supabase } from './auth/supabaseClient';
import { Session } from '@supabase/supabase-js';
import Login from './components/login';
import Lancamento from './components/lancamento';

function App() {
  const [despesa, setDespesa] = useState<any>([]);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    getDespesas();
  }, []);

  async function getDespesas() {
    const { data } = await supabase.from('despesa').select('*');
    setDespesa(data);
  }

  return (
    <>
      {!session && <Login />}

      <ul>
        {despesa
          .filter((desp: any) => desp.user_id === session?.user.id)
          .map((desp: any) => (
            <li key={desp.id}>
              {desp.description} | {desp.value}
            </li>
          ))}
      </ul>

      <Lancamento />
    </>
  );
}

export default App;
