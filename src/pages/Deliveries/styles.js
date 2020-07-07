import styled from 'styled-components/native';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`;

export const Menu = styled.View`
  margin-top: 22.5px;
  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const MenuTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #444;
`;

export const Options = styled.View`
  flex-direction: row;
`;

export const Option = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.selected ? colors.primary : '#999')};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
