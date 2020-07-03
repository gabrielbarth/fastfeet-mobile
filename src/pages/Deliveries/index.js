import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { Alert } from 'react-native';

import api from '~/services/api';

import Header from '~/components/Header';
import DeliveryCard from '~/components/DeliveryCard';

import {
  Container,
  Profile,
  Welcome,
  Name,
  ActionContainer,
  TitleContainer,
  Menu,
  MenuTitle,
  Options,
  Option,
  List,
} from './styles';

export default function Deliveries({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const [deliveryStatus, setDeliveryStatus] = useState('PENDING');

  const id = useSelector((store) => store.deliveryman.profile.id);

  function formattedDeliveries(items) {
    return items.map((delivery) => ({
      ...delivery,
      formattedId: delivery.id < 10 ? `0${delivery.id}` : String(delivery.id),
      // formattedDate: format(parseISO(delivery.createdAt), 'dd/MM/yyyy'),
    }));
  }

  useEffect(() => {
    async function loadDeliveris() {
      setDeliveries([]);

      try {
        const { data } =
          deliveryStatus === 'PENDING'
            ? await api.get(`deliverymen/${id}/deliveries`)
            : await api.get(`deliverymen/${id}/completed-deliveries`);

        setDeliveries(formattedDeliveries(data));
      } catch (err) {
        Alert.alert(
          'Request failure',
          'Unable to fetch deliveries, please try again later.'
        );
      }
    }

    loadDeliveris();
  }, [deliveryStatus]);

  function handleChangeStatus() {
    setDeliveryStatus(deliveryStatus === 'PENDING' ? 'DELIVERED' : 'PENDING');
  }

  return (
    <Container>
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

      <List
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <DeliveryCard delivery={item} />}
      />
    </Container>
  );
}
