import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomAvatar from '~/components/Avatar';

import { colors } from '~/styles/colors';

export const Container = styled.View`
  padding: 20px 20px;
  align-self: stretch;
  flex-direction: row;
`;

export const Avatar = styled(CustomAvatar)``;

export const WelcomeContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const Welcome = styled.Text`
  font-size: 13px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const LogoutIcon = styled(Icon).attrs({
  name: 'exit-to-app',
  color: colors.red,
})``;

export const LogoutContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
