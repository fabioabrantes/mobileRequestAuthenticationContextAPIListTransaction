import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

interface Props{
  isFocused?:boolean;
}

export const Container = styled.View`
  flex-direction:row;
  margin-bottom:8px;
`;

export const IconContainer = styled.View`
  height: 56px;
  width:55px;
  justify-content: center;
  align-items: center;
  margin-right:2px;
    
  background-color: ${({theme})=>theme.colors.background_secondary};
`;

export const Icon= styled(Feather)<Props>`
  font-size:${({theme})=>theme.SIZE.lg}px;
  color: ${({theme,isFocused})=>
    (isFocused) ? theme.colors.main : theme.colors.text_detail};
`;

export const InputCustom = styled.TextInput<Props>`
  flex:1;
  background-color: ${({theme})=>theme.colors.background_secondary};
  color:${({theme})=>theme.colors.text};
  font-family: ${({theme})=>theme.fonts.body};
  font-size: ${({theme})=>theme.SIZE.xm}px;
  padding: 0 23px;
`;