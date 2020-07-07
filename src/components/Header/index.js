import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Avatar,
  WelcomeContainer,
  LogoutContainer,
  LogoutIcon,
  Welcome,
  Name,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.deliveryman.profile);
  const { name } = profile;

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar name={name} size={68} avatar={profile.avatar} />
      <WelcomeContainer>
        <Welcome>Welcome,</Welcome>
        <Name>{name}</Name>
      </WelcomeContainer>
      <LogoutContainer>
        <TouchableOpacity onPress={logout}>
          <LogoutIcon size={25} />
        </TouchableOpacity>
      </LogoutContainer>
    </Container>
  );
}
