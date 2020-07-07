import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import { colors } from '~/styles/colors';
import { Container, Title, Top, BackIcon } from './styles';

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Container>
        <Top>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon size={32} />
          </TouchableOpacity>

          <Title>{title}</Title>
        </Top>
      </Container>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
