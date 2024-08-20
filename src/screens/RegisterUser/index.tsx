import { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import { useTheme } from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaValidationRegisterClient } from '../../utils/validations';

import { api } from '../../api';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ErrorInput } from '../../components/ErrorInput';

import {
  Container,
  Header,
  UserContainer,
  User,
  UserGreeting,
  LogoutButton,
  Icon,
  HeaderSubtitle,
  Title,
  Form,
  Footer,
} from './styles';



type FormData = {
  name: string;
  username: string;
  cpf: string;
  password: string;
  latitude: string;
  longitude: string;
};

interface User {
  id: number;
  name: string;
}

export function RegisterUser() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const theme = useTheme();


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schemaValidationRegisterClient)
  });

  function goToPageLogin() {
    navigation.navigate('Login');
  }

  async function handleRegisterUser({ cpf, name, username, password, latitude, longitude }: FormData) {

    const data = {
      name,
      cpf,
      username,
      password,
      latitude,
      longitude
    }
    console.log(data)
    const response = await api.post('users', data);
    setIsLoading(false);
    console.log(response.data);
    navigation.navigate('Login');
  }


  return (
    <Container>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <Header>
              <UserContainer>
                <User>
                  <UserGreeting>Tela de Cadastro</UserGreeting>
                </User>

                <LogoutButton onPress={goToPageLogin}>
                  <Icon name="arrow-left" color={theme.colors.background_primary} />
                </LogoutButton>
              </UserContainer>
            </Header>

            <HeaderSubtitle>
              <Title>
                Faça seu Cadastro no sistema.
              </Title>
            </HeaderSubtitle>

            <Form>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Nome"
                    autoCorrect={false}/* não fica corrigindo palavras */
                    autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                  />
                )}
                name="name"
              />
              {
                !!errors.name && <ErrorInput description={errors.name.message} />
              }

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="username"
                    keyboardType="email-address"
                    autoCorrect={false}/* não fica corrigindo palavras */
                    autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                  />
                )}
                name="username"
              />
              {
                !!errors.username && <ErrorInput description={errors.username.message} />
              }

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="cpf"
                  />
                )}
                name="cpf"
              />
              {
                !!errors.cpf && <ErrorInput description={errors.cpf.message} />
              }



              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="latitude"
                  />
                )}
                name="latitude"
              />
              {
                !!errors.password && <ErrorInput description={errors.password.message} />
              }

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="longitude"
                  />
                )}
                name="longitude"
              />
              {
                !!errors.password && <ErrorInput description={errors.password.message} />
              }

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="lock"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="senha"
                  />
                )}
                name="password"
              />
              {
                !!errors.password && <ErrorInput description={errors.password.message} />
              }
            </Form>

            <Footer>
              <Button
                title="Cadastrar"
                onPress={handleSubmit(handleRegisterUser)}
                loading={isLoading}
              />
            </Footer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}