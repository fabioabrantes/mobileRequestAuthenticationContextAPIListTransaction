import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.SIZE.xm}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.SIZE.sm}px;
  color: ${({ theme}) =>theme.colors.secondary};
  margin-top: 2px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 19px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.SIZE.xm}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 17px;
  margin-top: 14px;
`;