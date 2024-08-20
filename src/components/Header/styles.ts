import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  width:100%;
  height: 30px;
  background-color:${(props)=> props.theme.colors.secondary};
  padding: 24px;
  padding-top: 44px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size:${(props)=> props.theme.SIZE.sm}px;
  color:${({theme})=>theme.colors.title};
`;
export const Icon = styled(Feather)`
  color:${(props)=> props.theme.colors.secondary};
  font-size:${(props)=> props.theme.SIZE.lg}px;
  size: ${(props)=> props.theme.SIZE.lg}px;
`;
export const ButtonBack = styled.TouchableOpacity``;