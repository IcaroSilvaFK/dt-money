import { MdArrowCircleUp, MdArrowCircleDown } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';

import { Container, Body } from './styles';
import { currencyFormat } from '../../utils/currencyFormatter';

interface ICardProps {
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw' | 'result';
}

export function Card(props: ICardProps) {
  const { amount, title, type } = props;

  return (
    <Container type={type} isNegative={amount < 0}>
      <div>
        <span>{title}</span>
        {type === 'deposit' && <MdArrowCircleUp size={32} />}
        {type === 'withdraw' && <MdArrowCircleDown size={32} />}
        {type === 'result' && <BsCurrencyDollar size={32} />}
      </div>
      <Body>
        <b>{currencyFormat(amount)}</b>
      </Body>
    </Container>
  );
}
