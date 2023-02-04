import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);

  width: 100vw;
  height: 100vh;
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background: ${({ theme }) => theme.colors.gray[800]};

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  input {
    height: 54px;
    background: ${({ theme }) => theme.colors.gray[900]};

    padding: 16px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.gray[100]};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }

  > button {
    background: ${({ theme }) => theme.colors.green[300]};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    padding: 16px;
    border-radius: 6px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin: 12px 0;

  button {
    flex: 1;
    padding: 16px;

    background: ${({ theme }) => theme.colors.gray[700]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: ${({ theme }) => theme.colors.gray[100]};

    transition: all linear 0.3s;

    &.button--deposit {
      &:disabled {
        cursor: not-allowed;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[300]};
      }
    }
    &.button--withdraw {
      &:disabled {
        cursor: not-allowed;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.red[300]};
      }
    }
  }
`;
