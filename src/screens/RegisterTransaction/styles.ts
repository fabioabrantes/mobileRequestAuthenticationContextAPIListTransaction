import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=>theme.colors.background_primary};
`;

export const Header = styled.View`
  width:100%;
  height:150px;
  justify-content:flex-start;
  align-items:center;
  background-color:${(props)=> props.theme.colors.secondary};
  padding:0 24px;
  
`;

export const UserContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  margin-top: 57px;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Photo = styled.Image`
  width:60px;
  height:60px;
  border-radius: 10px;
  
`;
export const User = styled.View`
  margin-left: 18px;
`;

export const UserName = styled.Text`
  color:white;
  font-size:${(props)=> props.theme.SIZE.xm}px;
  font-family:${(props)=> props.theme.fonts.heading};
`;

export const LogoutButton = styled.TouchableOpacity``;

export const IconPower = styled(Feather)`
   font-size:${(props)=> props.theme.SIZE.lg}px;
   color:${(props)=> props.theme.colors.background_secondary};
`;
export const Product = styled.View`
  margin-bottom: 16px;
`;

export const ProductText = styled.Text`
  color:black;
  font-size:${(props)=> props.theme.SIZE.xl}px;
  font-family:${(props)=> props.theme.fonts.heading};
`;

export const Form = styled.View`
  width: 100%;
  margin: 32px 0;
  padding:0 24px;
`;

export const Footer = styled.View`
  padding:0 24px;
  margin-top:20px;
`;