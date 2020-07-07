import React from 'react';
import PropTypes from 'prop-types';
import { Container, Letters, Image } from './styles';

import { createAvatarLetters } from '~/util/avatarLetters';

export default function Avatar({ size, name, avatar }) {
  const letters = createAvatarLetters(name);

  return (
    <Container size={size}>
      {!!avatar && !!avatar.url ? (
        <Image size={size} source={{ uri: avatar.url }} />
      ) : (
        <Letters size={size}>{letters}</Letters>
      )}
    </Container>
  );
}

Avatar.defaultProps = {
  avatar: undefined,
};

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
