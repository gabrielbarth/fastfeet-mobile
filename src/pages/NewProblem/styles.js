import styled from 'styled-components/native';
import { darken } from 'polished';
import Button from '~/components/Button';

import { colors } from '~/styles/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 15,
  placeholderTextColor: '#999',
})`
  border-radius: 4px;
  height: 300px;
  padding: 13px;
  margin: 0 20px;
  margin-top: -50px;
  background-color: #fff;
  font-size: 16px;
  color: ${darken(0.2, '#999')};
`;

export const SendButton = styled(Button).attrs({
  color: colors.primary,
})`
  margin: 20px 20px;
  align-self: stretch;
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
`;
