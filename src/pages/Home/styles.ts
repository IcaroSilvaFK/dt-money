import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  gap: 32px;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -60px;
`;

export const Form = styled.form`
  display: flex;

  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;

  gap: 16px;

  input {
    flex: 1;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.gray[900]};

    padding: 16px;

    color: ${({ theme }) => theme.colors.gray[300]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  button {
    padding: 14px 32px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.green[300]};
    color: ${({ theme }) => theme.colors.green[300]};
    font-weight: bold;

    display: flex;
    align-items: center;
    border-radius: 6px;
  }
`;

export const Table = styled.table`
  max-width: 1200px;
  width: 100%;
  margin: 32px auto;
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 6px;

  tr {
    border-bottom: 8px solid ${({ theme }) => theme.colors.gray[800]};
  }

  td:first-child {
    width: 50%;
    text-align: left;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  td {
    background: ${({ theme }) => theme.colors.gray[700]};
    text-align: center;
    padding: 20px 32px;
    border-top: 3px solid transparent;
  }
`;

export const Tag = styled.td<{ isPositive: boolean }>`
  ${({ isPositive, theme }) =>
    !isPositive &&
    css`
      color: ${theme.colors.red[300]};
    `}

  ${({ isPositive, theme }) =>
    isPositive &&
    css`
      color: ${theme.colors.green[300]};
    `}
`;
