import styled from 'styled-components';

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

export const Table = styled.table``;
