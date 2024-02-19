import { useState } from 'react';
import { supabase } from '../auth/supabaseClient';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  description: string;
  value: string;
  exampleRequired: string;
};

function Lancamento() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [loading, setLoading] = useState(false);

  //   const addEntry = async (e: any) => {
  //     e.preventDefault();

  //     const { user } = session;

  //     const newTodo = {
  //       user_id: user.id,
  //       task,
  //     };
  //     setLoading(true);
  //     const result = await supabase
  //       .from('todos')
  //       .insert(newTodo)
  //       .select()
  //       .single();
  //     setTodos([result.data, ...todos]);
  //     setLoading(false);
  //     setTask('');
  //   };

  console.log(watch()); // watch input value by passing the name of it

  return (
    <div>
      <h1>Lançamento de Despesa</h1>
      {loading ? (
        'Sending magic link...'
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mx-3">
          <Input
            {...register('description')}
            type="text"
            placeholder="Descrição"
          />

          <Input {...register('value')} type="text" placeholder="Valor" />
          <Input
            type="range"
            min={1}
            max={12}
            defaultValue={1}
            step={1}
            placeholder="Parcelas"
            id="parcela"
          />
          <Input type="date" placeholder="Data da Despesa" id="date_value" />
          <Button type="submit">Enviar</Button>
        </form>
      )}
    </div>
  );
}

export default Lancamento;
