import { BiSearch } from 'react-icons/bi';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { Container, Grid, Form, Table, Tag } from './styles';
import { useEffect, useState } from 'react';
import { currencyFormat } from '../../utils/currencyFormatter';
import { api } from '../../configs/global/api';
import { useFetchTransactions } from '../../hooks/useFetchTransactions';

interface ITransactionProps {
  description: string;
  amount: number;
  category: string;
  type: 'withdraw' | 'deposit';
  createdAt: string;
  id: number;
}

interface IResumeProps {
  withdraw: number;
  deposit: number;
  resume: number;
}

export function Home() {
  const [parentRef] = useAutoAnimate<HTMLTableSectionElement>();
  const { resume, data } = useFetchTransactions();
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
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
