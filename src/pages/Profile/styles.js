import styled from 'styled-components/native';
import LetterAvatar from '~/components/Avatar';
import Button from '~/components/Button';

import { colors } from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  flex-direction: column;
  padding: 50px 35px;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const Avatar = styled(LetterAvatar).attrs({
  size: 136,
})``;

export const Title = styled.Text`
  color: #666666;
  font-size: 12px;
  align-self: stretch;
  text-align: left;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  align-self: stretch;
  text-align: left;
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button).attrs({
  color: colors.red,
})`
  align-self: stretch;
  margin-top: 30px;
`;
