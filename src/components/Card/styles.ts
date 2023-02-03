import styled, { css } from 'styled-components';

type Props = {
  type: 'deposit' | 'withdraw' | 'result';
  isNegative?: boolean;
};

export const Container = styled.div<Props>`
  padding: 24px 32px;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.gray[600]};

  display: flex;
  flex-direction: column;
  gap: 12px;

  color: ${({ theme }) => theme.colors.gray[300]};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 500;
    }
  }

  ${({ theme, type }) =>
    type === 'deposit' &&
    css`
      div {
        svg {
          fill: ${theme.colors.green[500]};
        }
      }
    `}

  ${({ theme, type }) =>
    type === 'withdraw' &&
    css`
      div {
        svg {
          fill: ${theme.colors.red[500]};
        }
      }
    `}

    ${({ theme, type }) =>
    type === 'result' &&
    css`
      background: ${theme.colors.green[500]};
      div {
        svg {
          fill: ${theme.colors.white};
        }
        b {
          color: ${theme.colors.white};
        }
      }
    `}

    ${({ theme, type, isNegative }) =>
    type === 'result' &&
    isNegative &&
    css`
      background: ${theme.colors.red[500]};
      div {
        svg {
          fill: ${theme.colors.white};
        }
        b {
          color: ${theme.colors.white};
        }
      }
    `}
`;

export const Body = styled.div`
  b {
    font-size: 2rem;
  }
`;
