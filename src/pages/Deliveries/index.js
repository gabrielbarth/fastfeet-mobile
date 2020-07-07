import React, { useState, useEffect } from 'react';
import { StatusBar, Alert, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Header from '~/components/Header';
import DeliveryCard from '~/components/DeliveryCard';

import { colors } from '~/styles/colors';
import { Container, Menu, MenuTitle, Options, Option, List } from './styles';

export default function Deliveries({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [deliveries, setDeliveries] = useState([]);
  const [deliveryStatus, setDeliveryStatus] = useState('PENDING');

  const id = useSelector((store) => store.deliveryman.profile.id);

  function formattedDeliveries(items) {
    return items.map((delivery) => ({
      ...delivery,
      formattedId: delivery.id < 10 ? `0${delivery.id}` : String(delivery.id),
      formattedDate: format(parseISO(delivery.createdAt), 'MMMM dd, yyyy'),
    }));
  }

  async function loadDeliveries() {
    setDeliveries([]);
    setLoading(true);
    try {
      const { data } =
        deliveryStatus === 'PENDING'
          ? await api.get(`deliverymen/${id}/deliveries`)
          : await api.get(`deliverymen/${id}/completed-deliveries`);

      setDeliveries(formattedDeliveries(data));
      setLoading(false);
    } catch (err) {
      Alert.alert(
        'Request failure',
        'An error has occurred. Please try again later'
      );
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDeliveryStatus('PENDING');
      loadDeliveries();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setDeliveries([]);
    loadDeliveries();
  }, [deliveryStatus]);

  function handleChangeStatus() {
    setDeliveryStatus(deliveryStatus === 'PENDING' ? 'DELIVERED' : 'PENDING');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Header />
      <Menu>
        <MenuTitle>Deliveries</MenuTitle>
        <Options>
          <Option
            style={{
              marginRight: 15,
            }}
            onPress={handleChangeStatus}
            selected={deliveryStatus === 'PENDING'}
          >
            Pending
          </Option>
          <Option
            selected={deliveryStatus === 'DELIVERED'}
            onPress={handleChangeStatus}
          >
            Delivered
          </Option>
        </Options>
      </Menu>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{ marginTop: 150 }}
        />
      ) : (
        <List
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <DeliveryCard delivery={item} />}
        />
      )}
    </Container>
  );
}

Deliveries.propTypes = {
  navigation: PropTypes.func.isRequired,
};
