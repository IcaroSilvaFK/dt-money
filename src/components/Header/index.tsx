import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransacationModal';

import { Container, Sub } from './styles';

export function Header() {
  return (
    <Container>
      <Sub>
        <img src={Logo} />

        <Dialog.Root>
          <Dialog.Trigger>Nova transação</Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </Sub>
    </Container>
  );
}
