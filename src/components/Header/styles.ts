import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 200px;

  background: ${({ theme }) => theme.colors.gray[900]};
`;

export const Sub = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 12px 20px;

    background: ${({ theme }) => theme.colors.green[500]};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 6px;
    font-weight: 500;

    transition: all linear 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.green[700]};
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`;
