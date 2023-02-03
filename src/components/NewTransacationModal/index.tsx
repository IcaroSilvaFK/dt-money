import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Dialog.DialogClose>
          <AiOutlineClose />
        </Dialog.DialogClose>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
