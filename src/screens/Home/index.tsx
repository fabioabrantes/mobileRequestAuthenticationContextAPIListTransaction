import { useState, useCallback } from 'react';
import {FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import { useTheme } from 'styled-components/native';

import {useAuth} from '../../hooks/useAuth';

import {TransactionCard} from '../../components/TransactionCard';
import {Loading} from '../../components/Loading';

import {api} from '../../api';

import {TransactionDTO} from '../../dto/TransactionDTO';


import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  IconPower,
  Products,
  Title,
} from './styles';

interface IClient{
  id:string;
  name:string;
}
export function Home(){
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<TransactionDTO[]>([] as TransactionDTO[]);
  const [client, setClient] = useState<IClient>({} as IClient);
  const {deslogar} = useAuth();
  const theme = useTheme();

  useFocusEffect(useCallback(() => {
    
      setIsLoading(true);
      //consulta a API  
      api.get('transactions').then(response => {
        const transactionsTemp = response.data as TransactionDTO[];
        setTransactions(transactionsTemp);
        setClient(transactionsTemp[0].client);
      });
      setIsLoading(false);
        
  },[])
  );
 
  async function goToPageLogin(){
    await deslogar();
  }

  return (
    <Container>
         <Header>
            <UserContainer>
              <UserInfo>
                <Photo source={{uri:'https://avatars.githubusercontent.com/u/62598805?v=4'}}/>
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>{client.name}</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={goToPageLogin}>
                <IconPower name="power" color={theme.colors.background_secondary}/>
              </LogoutButton>
            </UserContainer>
          </Header>
     
          <Products>
            <Title>Listagem de Transações</Title>
            {
              isLoading ?
                <Loading size={theme.SIZE.xl} color={theme.colors.secondary}/>
              :
                <FlatList
                  data={transactions}
                  keyExtractor={(item ) =>String(item.id)}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom:12}}
                  renderItem={({item})=>  <TransactionCard data={item}/>}
                />
            }
          </Products>
    </Container>
  );
}