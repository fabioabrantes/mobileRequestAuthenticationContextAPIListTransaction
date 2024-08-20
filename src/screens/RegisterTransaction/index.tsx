import { useState} from 'react';
import {KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useForm,Controller} from'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {schemaValidationRegisterTransaction} from '../../utils/validations';

import {api} from '../../api';
import {useAuth} from '../../hooks/useAuth';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import { ErrorInput } from '../../components/ErrorInput';


import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserName,
  Product,
  ProductText,
  Form,
  Footer,
  LogoutButton,
  IconPower,
} from './styles';


type FormData = {
  type: string;
  amount: string;
};

interface IClient{
  id:string;
  name:string;
}

export function RegisterTransaction() {
  const [isLoading, setIsLoading] = useState(false);


  const navigation = useNavigation();
  const {deslogar,nameUser} = useAuth(); 

  const {
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm<FormData>({
    resolver:zodResolver(schemaValidationRegisterTransaction)
  });
   
  async function handleRegisterTransaction({type, amount}:FormData){
    const data = {
      type,
      amount:Number(amount),
    }
    setIsLoading(true);
    await api.post('transactions',data);
    setIsLoading(false);

    navigation.navigate('Home');
  }

  async function goToPageLogin(){
    await deslogar();
  }


  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
           <Header>
              <UserContainer>
                <UserInfo>
                  <Photo source={{uri:'https://avatars.githubusercontent.com/u/62598805?v=4'}}/>
                  <User>
                    <UserName>{nameUser}</UserName>
                  </User>
                </UserInfo>

                <LogoutButton onPress={goToPageLogin}>
                  <IconPower name="power" />
                </LogoutButton>
              </UserContainer>
            </Header>

            <Form>
              <Product>
                  <ProductText>Cadastre a transação.</ProductText>
              </Product>

              <Controller 
                control={control}
                render={({field:{onChange, onBlur,value}})=>(
                  <Input 
                      iconName = "edit"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="credits ou debit?"
                      autoCorrect={false}/* não fica corrigindo palavras */
                      autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                    />
                  )}
                  name="type"
              />
                {
                  !!errors.type && <ErrorInput description={errors.type.message}/>
                }
          
                <Controller 
                    control={control}
                    render={({field:{onChange, onBlur,value}})=>(
                      <Input 
                        iconName = "edit"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="valor da transação"

                      />
                    )}
                    name="amount"
                    
                />
                {
                  !!errors.amount && <ErrorInput description={errors.amount.message}/>
                }
                
              <Footer>
                <Button
                  title="Cadastrar"
                  onPress={handleSubmit(handleRegisterTransaction)}
                  loading={isLoading}
                />
              </Footer>
            </Form>

          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
  );
}