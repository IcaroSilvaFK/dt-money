import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '../../assets/logo.svg';

import { Container, Sub } from './styles';

export function Header() {
  return (
    <Container>
      <Sub>
        <img src={Logo} />

        <Dialog.Root>
          <Dialog.Trigger>Nova transação</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.DialogClose>
                <AiOutlineClose />
              </Dialog.DialogClose>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Sub>
    </Container>
  );
}
