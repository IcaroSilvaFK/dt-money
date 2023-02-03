import { BiSearch } from 'react-icons/bi';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { currencyFormat } from '../../utils/currencyFormatter';

import { Container, Grid, Form } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Grid>
        <Card amount={currencyFormat(10000)} title='Entradas' type='deposit' />
        <Card amount={currencyFormat(1000)} title='Saidas' type='withdraw' />
        <Card amount={currencyFormat(9000)} title='Total' type='result' />
      </Grid>
      <Form>
        <input type='text' placeholder='Busque uma transação' />
        <button>
          <BiSearch size={20} />
          Buscar
        </button>
      </Form>
    </Container>
  );
}
