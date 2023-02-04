import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './configs/global/react-query';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
