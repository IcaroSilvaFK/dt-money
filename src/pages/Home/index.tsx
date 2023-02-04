import { BiSearch } from 'react-icons/bi';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';

import { Card } from '../../components/Card';
import { dateFormatter } from '../../utils/dateFormatter';
import { Header } from '../../components/Header';
import { useFetchTransactions } from '../../hooks/useFetchTransactions';
import { currencyFormat } from '../../utils/currencyFormatter';

import { Container, Grid, Form, Table, Tag } from './styles';

export function Home() {
  const [parentRef] = useAutoAnimate<HTMLTableSectionElement>();
  const { resume, data } = useFetchTransactions();
  // const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Header />
      <Grid>
        <Card amount={resume?.deposit ?? 0} title='Entradas' type='deposit' />
        <Card amount={resume?.withdraw ?? 0} title='Saidas' type='withdraw' />
        <Card amount={resume?.resume ?? 0} title='Total' type='result' />
      </Grid>
      <Form>
        <input type='text' placeholder='Busque por transações' />
        <button>
          <BiSearch size={20} />
          Buscar
        </button>
      </Form>
      <Table>
        <tbody ref={parentRef}>
          {data?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <Tag isPositive={transaction.type !== 'withdraw'}>
                {currencyFormat(transaction.amount)}
              </Tag>
              <td>
                {transaction.type === 'withdraw' ? 'retirada' : 'depósito'}
              </td>
              <td>{dateFormatter(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
