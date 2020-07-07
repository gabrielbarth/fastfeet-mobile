import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? 165 : 145}px;
  background: ${colors.primary};
  padding: 15px;
  position: relative;
  padding-top: ${Platform.OS === 'ios' ? 45 : 15}px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.background};
  font-weight: bold;
  text-align: center;
  flex: 1;
  margin-right: 20px;
`;

export const BackIcon = styled(Icon).attrs({
  name: 'chevron-left',
  color: colors.background,
})``;
