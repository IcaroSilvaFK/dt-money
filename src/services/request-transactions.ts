import { api } from '../configs/global/api';

interface ITransactionProps {
  description: string;
  amount: number;
  category: string;
  type: 'withdraw' | 'deposit';
  createdAt: string;
  id: number;
}

export async function requestTransactions() {
  try {
    const response: ITransactionProps[] = await api.get('/transactions').json();

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
