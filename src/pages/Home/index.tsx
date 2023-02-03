import { BiSearch } from 'react-icons/bi';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { Container, Grid, Form, Table, Tag } from './styles';
import { useState } from 'react';
import { currencyFormat } from '../../utils/currencyFormatter';

export function Home() {
  const [parentRef] = useAutoAnimate<HTMLTableSectionElement>();

  const [transactions, setTransactions] = useState([
    {
      title: 'Desenvolvimento de site',
      amount: 120,
      type: 'Venda',
      date: '13/04/2022',
    },
    {
      title: 'Desenvolvimento de site',
      amount: -40,
      type: 'Venda',
      date: '13/04/2022',
    },
  ]);

  return (
    <Container>
      <Header />
      <Grid>
        <Card amount={10000} title='Entradas' type='deposit' />
        <Card amount={1000} title='Saidas' type='withdraw' />
        <Card amount={9000} title='Total' type='result' />
      </Grid>
      <Form>
        <input type='text' placeholder='Busque uma transação' />
        <button>
          <BiSearch size={20} />
          Buscar
        </button>
      </Form>
      <Table>
        <tbody ref={parentRef}>
          {transactions.map((transaction) => (
            <tr>
              <td>{transaction.title}</td>
              <Tag isPositive={transaction.amount > 0}>
                {currencyFormat(transaction.amount)}
              </Tag>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
