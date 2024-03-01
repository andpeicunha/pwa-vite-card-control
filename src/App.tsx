import Login from './components/login';
import Lancamento from './components/lancamento';
import { getDespesas } from './fetch/getDespesas';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './hook/useAuth';

function App() {
  const session = useAuth();
  const query = useQuery({ queryKey: ['despesas'], queryFn: getDespesas });

  return (
    <>
      {!session && <Login />}

      <ul>
        {query &&
          query.data &&
          query.data
            .filter((desp: any) => desp.user_id === session?.user?.id)
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
