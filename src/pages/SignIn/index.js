import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Image } from 'react-native';

import { Container, Input, ErrorLabel, SubmitButton } from './styles';
import logo from '~/assets/logo-green.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((store) => store.auth.loading);

  function handleSumbit() {
    if (!id) setError(true);
    else dispatch(signInRequest(id));
  }

  useEffect(() => {
    setError(false);
  }, [id]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Image source={logo} tintColor="#fff" />
        <Input
          keyboardType="number-pad"
          autoCorrect={false}
          returnKeyType="send"
          placeholder="Enter your register ID"
          value={id}
          onChangeText={setId}
          onSubmitEditing={handleSumbit}
        />
        {error && <ErrorLabel>ID is required</ErrorLabel>}
        <SubmitButton loading={loading} onPress={handleSumbit}>
          Enter
        </SubmitButton>
      </Container>
    </>
  );
}
