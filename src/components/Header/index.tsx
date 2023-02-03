import Logo from '../../assets/logo.svg';

import { Container, Sub } from './styles';

export function Header() {
  return (
    <Container>
      <Sub>
        <img src={Logo} />

        <button>Nova transação</button>
      </Sub>
    </Container>
  );
}
