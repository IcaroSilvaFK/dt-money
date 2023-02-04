import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleUp,
} from 'react-icons/hi';
import { useTheme } from 'styled-components';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { Overlay, Content, Form, Header, Row } from './styles';
import { api } from '../../configs/global/api';
import { queryClient } from '../../configs/global/react-query';

type INewTransactionType = 'withdraw' | 'deposit';

const schema = z.object({
  description: z.string(),
  amount: z.number().positive(),
  category: z.string(),
});

type FormType = z.infer<typeof schema>;

export function NewTransactionModal() {
  const { colors } = useTheme();
  const [typeNewTransaction, setTypeNewTransaction] =
    useState<INewTransactionType>('deposit');
  const { register, handleSubmit, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormType) {
    try {
      const payload = {
        ...data,
        type: typeNewTransaction,
        createdAt: new Date(),
      };

      await api.url('/transactions').post(payload).json();
      toast.success('Hey cowboy sua transação foi cadastrada com sucesso🚀', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        draggable: true,
      });
      await queryClient.invalidateQueries({ queryKey: ['@transactions'] });
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Hey cowboy tivemos um erro ao cadastrar sua transação😥', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        draggable: true,
      });
    }
  }

  function handleChangeTypeTransaction() {
    setTypeNewTransaction((prev) =>
      prev === 'deposit' ? 'withdraw' : 'deposit'
    );
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Header>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <Dialog.DialogClose>
            <AiOutlineClose />
          </Dialog.DialogClose>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            type='number'
            placeholder='Preço'
            required
            {...register('amount', {
              valueAsNumber: true,
            })}
          />
          <input
            type='text'
            placeholder='Categoria'
            required
            {...register('category')}
          />
          <Row>
            <button
              type='button'
              disabled={typeNewTransaction === 'deposit'}
              onClick={handleChangeTypeTransaction}
              className='button--deposit'
            >
              <HiOutlineArrowCircleDown size={24} color={colors.green[300]} />
              <span>Entrada</span>
            </button>
            <button
              type='button'
              disabled={typeNewTransaction === 'withdraw'}
              onClick={handleChangeTypeTransaction}
              className='button--withdraw'
            >
              <HiOutlineArrowCircleUp size={24} color={colors.red[300]} />
              <span>Saida</span>
            </button>
          </Row>
          <button type='submit'>Cadastrar</button>
        </Form>
      </Content>
    </Dialog.Portal>
  );
}
