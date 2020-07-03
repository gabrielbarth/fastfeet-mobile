import styled from 'styled-components/native';
import { lighten } from 'polished';

import { colors } from '~/styles/colors';

export const Container = styled.View`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background-color: ${lighten(0.7, colors.primary)};
  border-radius: ${(props) => props.size / 2}px;
  align-items: center;
  justify-content: center;
`;

export const Letters = styled.Text`
  font-size: ${(props) => (props.size * 0.45).toFixed()}px;
  color: ${lighten(0.05, colors.primary)};
  text-align: center;
`;

export const Image = styled.Image`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  position: absolute;
  top: 0;
  right: 0;
`;
