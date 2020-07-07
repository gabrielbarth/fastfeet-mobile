import React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useRoute, useNavigation } from '@react-navigation/native';

import HeaderNav from '~/components/HeaderNavigation';

import api from '~/services/api';
import { colors } from '~/styles/colors';

import {
  Container,
  Content,
  Card,
  TitleContainer,
  Title,
  Label,
  Value,
  Status,
  Menu,
  Option,
  OptionTitle,
} from './styles';

export default function Details() {
  const deliverymanId = useSelector((state) => state.deliveryman.profile.id);
  const navigation = useNavigation();
  const route = useRoute();
  const { delivery } = route.params;

  const formattedStartDate = delivery.start_date
    ? format(parseISO(delivery.start_date), 'MMMM dd, yyyy')
    : '-- / -- / --';

  const formattedEndDate = delivery.end_date
    ? format(parseISO(delivery.end_date), 'MMMM dd, yyyy')
    : '-- / -- / --';

  async function handleDeliveryWithdraw() {
    async function delievryWithdraw() {
      try {
        await api.put(`/deliveries/withdraw/${deliverymanId}/${delivery.id}`);

        navigation.navigate('Deliveries');
      } catch (err) {
        Alert.alert('Invalid action');
      }
    }

    Alert.alert(
      'Withdrawal confirmation',
      'Are you sure about withdraw this delivery?',
      [
        {
          text: 'Cancel',
          style: 'destructive',
        },
        {
          text: 'Confirm',
          onPress: delievryWithdraw,
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  function handleConfirmDelivery() {
    if (delivery.status === 'FINISHED') {
      Alert.alert('Delivery finished.');
      return;
    }
    navigation.navigate('ConfirmDelivery', {
      deliveryId: delivery.id,
    });
  }

  function handleReportProblem() {
    if (delivery.status === 'FINISHED') {
      Alert.alert('Delivery finished.');
      return;
    }
    navigation.navigate('NewProblem', { deliveryId: delivery.id });
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HeaderNav title="Delivery details" />
      <Content>
        <Card>
          <TitleContainer>
            <Icon name="local-shipping" color={colors.primary} size={20} />
            <Title>Delivery data</Title>
          </TitleContainer>
          <Label>RECIPIENT</Label>
          <Value>{delivery.recipient.name}</Value>
          <Label>DELIVERY ADDRESS</Label>
          <Value>
            {delivery.recipient.street}, {delivery.recipient.number},{' '}
            {delivery.recipient.city} - {delivery.recipient.state},{' '}
            {delivery.recipient.zip_code}
          </Value>
          <Label>PRODUCT</Label>
          <Value>{delivery.product}</Value>
        </Card>

        <Card>
          <TitleContainer>
            <Icon name="event" color={colors.primary} size={20} />
            <Title>Delivery status</Title>
          </TitleContainer>
          <Label>STATUS</Label>
          <Status>{delivery.status}</Status>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Label>WITHDRAWAL DATE</Label>
              <Value>{formattedStartDate}</Value>
            </View>
            <View>
              <Label>DELIVERY DATE</Label>
              <Value>{formattedEndDate}</Value>
            </View>
          </View>
        </Card>

        <Menu>
          <Option onPress={handleReportProblem}>
            <Icon name="highlight-off" color={colors.danger} size={20} />
            <OptionTitle>Report{`\n`}Problem</OptionTitle>
          </Option>
          <Option
            onPress={() =>
              navigation.navigate('Problems', { deliveryId: delivery.id })
            }
          >
            <Icon name="info-outline" color={colors.yellow} size={20} />
            <OptionTitle>View{`\n`}Problems</OptionTitle>
          </Option>
          {delivery.status === 'PENDING' ? (
            <Option onPress={handleDeliveryWithdraw}>
              <Icon name="local-shipping" color={colors.primary} size={20} />
              <OptionTitle>Withdraw{`\n`}delivery</OptionTitle>
            </Option>
          ) : (
            <Option onPress={handleConfirmDelivery}>
              <Icon name="check-circle" color={colors.primary} size={20} />
              <OptionTitle>Confirm{`\n`}Delivery</OptionTitle>
            </Option>
          )}
        </Menu>
      </Content>
    </Container>
  );
}
