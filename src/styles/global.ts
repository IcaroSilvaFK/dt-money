import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]}
  }

  body{
    background:${({ theme }) => theme.colors.gray[800]};
    color:${({ theme }) => theme.colors.gray[100]};
    -webkit-font-smoothing: antialiased;
  }

  body,input,textarea,button{ 
    font:400 1rem -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  button,input,textarea{
    border:0;
  }

  button{
    cursor: pointer;
  }

`;
