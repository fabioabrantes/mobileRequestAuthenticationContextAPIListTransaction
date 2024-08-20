import {useState} from 'react';
import { KeyboardAvoidingView,  TouchableWithoutFeedback,  Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import {useForm,Controller} from'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {schemaValidationSignIn} from '../../utils/validations';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import { ErrorInput } from '../../components/ErrorInput';

import {useAuth} from '../../hooks/useAuth';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles';

import {useTheme} from 'styled-components/native';

type FormDataLogin = {
  username: string;
  password: string;
};

export function Login() {
  const [isLoading, setIsLoading] =useState(false);

  const navigation = useNavigation();

  const {logar} = useAuth();
  const theme = useTheme();

  const {
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm<FormDataLogin>({
    resolver:zodResolver(schemaValidationSignIn)
  });
  
  function handleCreateUser(){
    setIsLoading(true);
    navigation.navigate('RegisterUser');
    setIsLoading(false);
  }

  async function handleSignIn({username,password}:FormDataLogin){
    setIsLoading(true);
    await logar(username,password);
    setIsLoading(false);
  } 

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled >
          <Header>
            <Title>App Finances</Title>
            
            <SubTitle>
              Faça seu login para gerenciar{'\n'} 
              suas transações Financeiras.
            </SubTitle>
          </Header>

          <Form>
            <Controller 
              control={control}
              render={({field:{onChange, onBlur,value}})=>(
                <Input 
                  iconName = "edit"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCorrect={false}/* não fica corrigindo palavras */
                  autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                />
              )}
              name="username"
            />
            {
              !!errors.username && <ErrorInput description={errors.username.message}/>
            }

            <Controller 
              control={control}
              render={({field:{onChange, onBlur,value}})=>(
                <Input 
                  iconName = "lock"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="senha"
                />
              )}
              name="password"
            />
            {
              !!errors.password && <ErrorInput description={errors.password.message}/>
            }
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSubmit(handleSignIn)}
              loading={isLoading}
            />

            <Button
              title="Criar conta gratuita"
              color={theme.colors.secondary}
              onPress={handleCreateUser}
            />
          </Footer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}