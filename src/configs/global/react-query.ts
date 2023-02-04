import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  logger: {
    error(...args) {
      console.error(args);
    },
    log(...args) {
      console.log(args);
    },
    warn(...args) {
      console.warn(args);
    },
  },
});
