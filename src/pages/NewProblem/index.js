import React, { useState, useMemo, useEffect } from 'react';
import Toast from 'react-native-simple-toast';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '~/services/api';
import HeaderNav from '~/components/HeaderNavigation';

import { Container, TextArea, SendButton } from './styles';

export default function NewProblem() {
  const navigation = useNavigation();
  const route = useRoute();
  const { deliveryId } = route.params;

  const [problem, setProblem] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => setConfirm(false), [problem]);

  const enabled = useMemo(() => problem.replace(/\s/g, '').length > 0, [
    problem,
  ]);

  async function handleSubmit() {
    if (!confirm) {
      setConfirm(true);
      return;
    }

    setConfirm(false);
    setLoading(true);

    try {
      await api.post(`delivery/${deliveryId}/problems`, {
        description: problem,
      });
      Toast.show('Problem sended');
      setLoading(false);
      navigation.navigate('Deliveries');
    } catch (err) {
      Alert.alert(
        'Registration error',
        'An error has occurred. Please try again later'
      );
      setLoading(false);
    }
  }

  return (
    <Container>
      <HeaderNav title="Report Problem" />
      <TextArea
        style={{ elevation: 3, textAlignVertical: 'top' }}
        placeholder="Include here the problem that occurred in the delivery."
        value={problem}
        onChangeText={setProblem}
      />
      <SendButton onPress={handleSubmit} enabled={enabled} loading={loading}>
        {confirm ? 'Are you sure about send it?' : 'Send'}
      </SendButton>
    </Container>
  );
}

NewProblem.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
