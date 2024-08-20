import styled from 'styled-components/native';

interface ButtonProps{
  color?:string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width:100%;
  padding:19px;
  align-items:center;
  justify-content:center;
  background-color:${({color})=>color};
  margin-bottom:8px;
`;

export const Title = styled.Text`
  font-size: ${({theme})=> theme.SIZE.xm}px;
  font-family: ${({theme})=>theme.fonts.body};
  color: ${({theme})=> theme.colors.shape};
`;