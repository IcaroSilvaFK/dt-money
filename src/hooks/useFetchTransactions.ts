import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { requestTransactions } from '../services/request-transactions';

interface IResumeProps {
  withdraw: number;
  deposit: number;
  resume: number;
}

export function useFetchTransactions() {
  const { data, isLoading, isError } = useQuery(
    ['@transactions'],
    requestTransactions
  );
  const [resume, setResume] = useState<IResumeProps | null>(null);

  useEffect(() => {
    handleConvertResume();
  }, [data]);

  function handleConvertResume() {
    if (!data) return;
    const amountResume = data.reduce(
      (acc, currentItem) => {
        if (currentItem.type === 'deposit') {
          acc.deposit += currentItem.amount;
          acc.resume += currentItem.amount;
        }
        if (currentItem.type === 'withdraw') {
          acc.withdraw += currentItem.amount;
          acc.resume -= currentItem.amount;
        }

        return acc;
      },
      {
        withdraw: 0,
        deposit: 0,
        resume: 0,
      }
    );

    setResume(amountResume);
  }

  return {
    data,
    isLoading,
    isError,
    resume,
  };
}
