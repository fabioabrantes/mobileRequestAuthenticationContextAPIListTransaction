import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';


export const Container = styled.View`
  flex:1;
  background-color:${({theme})=>theme.colors.background_primary};
`;

export const Header = styled.View`
  width:100%;
  height: 150px;
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;
  background-color:${(props)=> props.theme.colors.secondary};

`;

export const UserContainer = styled.View`
  width: 100%;
  padding:0 24px;
  margin-top: 57px;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Photo = styled.Image`
  width:50px;
  height:50px;
  border-radius: 10px;
  
`;
export const User = styled.View`
  margin-left: 38px;
`;

export const UserGreeting = styled.Text`
  color:${(props)=> props.theme.colors.shape};
  font-family:${(props)=> props.theme.fonts.body}; 
  font-size:${(props)=> props.theme.SIZE.xm}px;
`;
export const UserName = styled.Text`
  color:white;
  font-size:${(props)=> props.theme.SIZE.xm}px;
  font-family:${(props)=> props.theme.fonts.heading};
`;

export const LogoutButton = styled.TouchableOpacity``;

export const IconPower = styled(Feather)`
   font-size:${(props)=> props.theme.SIZE.lg}px;
`;

export const Products = styled.View`
  flex:1;
  padding:0 24px;
  margin-top: 14px;
`;

export const Title = styled.Text`
  font-size:${(props)=> props.theme.SIZE.sm}px;
  font-family: ${({theme})=>theme.fonts.heading};
`;
