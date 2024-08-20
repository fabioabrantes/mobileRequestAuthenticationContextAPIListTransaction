import { 
  Container,
  Title,
  Amount,
  Footer,
  Description
 } from './styles';

import {TransactionDTO} from '../../dto/TransactionDTO';

interface Props {
  data: TransactionDTO;
}

export function TransactionCard({data}:Props){
  return (
    <Container key={data.id}>
      <Title>{data.type}</Title>

      <Amount>R$ {data.amount}</Amount>

      <Footer>
        <Title>Data</Title>
        <Description>{data.createdAt?.toString()}</Description>
      </Footer>
    </Container>
  );
}