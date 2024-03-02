import Login from './components/login';
import EntryExpenses from './components/lancamento';
import { getExpenses } from './fetch/getDespesas';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './hook/useAuth';
import { formatMoney } from './util/currencyFormat';

function App() {
  const session = useAuth();
  const query = useQuery({ queryKey: ['despesas'], queryFn: getExpenses });

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
                {desp.description} | {formatMoney(desp.value)}
              </li>
            ))}
      </ul>

      <EntryExpenses />
    </>
  );
}

export default App;
