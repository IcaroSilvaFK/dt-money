import { MdArrowCircleUp, MdArrowCircleDown } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';

import { Container, Body } from './styles';

interface ICardProps {
  title: string;
  amount: string;
  type: 'deposit' | 'withdraw' | 'result';
}

export function Card(props: ICardProps) {
  const { amount, title, type } = props;

  return (
    <Container type={type}>
      <div>
        <span>{title}</span>
        {type === 'deposit' && <MdArrowCircleUp size={32} />}
        {type === 'withdraw' && <MdArrowCircleDown size={32} />}
        {type === 'result' && <BsCurrencyDollar size={32} />}
      </div>
      <Body>
        <b>{amount}</b>
      </Body>
    </Container>
  );
}
