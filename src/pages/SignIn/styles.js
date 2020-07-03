import styled from 'styled-components/native';
import { darken, lighten } from 'polished';
import { StatusBar, Image } from 'react-native';
import Button from '~/components/Button';

import { colors } from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${lighten(0.2, colors.primary)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;

export const PurpleStatusBar = styled(StatusBar).attrs({
  barStyle: 'light-content',
  backgroundColor: `${lighten(0.2, colors.primary)}`,
})``;

export const LogoImage = styled(Image)``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 37px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  align-self: stretch;
  height: 45px;
  color: ${darken(0.2, '#999')};
  padding: 12px 20px;
  font-size: 16px;
`;

export const ErrorLabel = styled.Text`
  margin-top: 5px;
  align-self: stretch;
  text-align: left;
  color: #e74040;
  font-weight: bold;
  font-size: 15px;
`;

export const SubmitButton = styled(Button).attrs({
  color: `${colors.primary};`,
})`
  align-self: stretch;
  margin-top: 15px;
`;
