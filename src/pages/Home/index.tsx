import { BiSearch } from 'react-icons/bi';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { currencyFormat } from '../../utils/currencyFormatter';

import { Container, Grid, Form, Table } from './styles';

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
      <Table>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <tr>R$ 12.000,00</tr>
            <tr>Venda</tr>
            <tr>13/04/2022</tr>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
