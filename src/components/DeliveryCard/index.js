import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Header,
  Title,
  TruckIcon,
  Footer,
  FooterItem,
  Small,
  SubTitle,
  Button,
  ButtonText,
} from './styles';

import Timeline from './Timeline';

export default function DeliveryCard({ delivery }) {
  const navigation = useNavigation();
  return (
    <Container
      style={{
        elevation: 4,
      }}
    >
      <Content>
        <Header>
          <TruckIcon size={25} />
          <Title>{`Delivery ${delivery.formattedId}`}</Title>
        </Header>

        <Timeline start={delivery.start_date} end={delivery.end_date} />
      </Content>
      <Footer>
        <FooterItem>
          <Small>Date</Small>
          <SubTitle>{delivery.formattedDate}</SubTitle>
        </FooterItem>

        <FooterItem>
          <Small>City</Small>
          <SubTitle>{delivery.recipient.city}</SubTitle>
        </FooterItem>

        <FooterItem>
          <Button onPress={() => navigation.navigate('Details', { delivery })}>
            <Small />
            <ButtonText>See details</ButtonText>
          </Button>
        </FooterItem>
      </Footer>
    </Container>
  );
}

DeliveryCard.defaultProps = {
  navigation: undefined,
};

DeliveryCard.propTypes = {
  delivery: PropTypes.shape({
    formattedId: PropTypes.string.isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    formattedDate: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
