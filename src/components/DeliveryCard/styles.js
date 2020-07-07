import styled from 'styled-components/native';
import { darken } from 'polished';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles/colors';

export const Container = styled.View`
  margin-top: 5px;
  border-radius: 4px;
  background: ${colors.background};
  margin-bottom: 15px;
`;

export const Content = styled.View`
  padding: 13px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const TruckIcon = styled(Icon).attrs({
  name: 'local-shipping',
  color: colors.primary,
})``;

export const Footer = styled.View`
  background: ${darken(0.05, colors.background)};
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterItem = styled.View`
  flex-direction: column;
`;

export const Small = styled.Text`
  font-weight: bold;
  font-size: 8px;
  color: #999999;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #444444;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled(SubTitle)`
  color: ${colors.primary};
`;
