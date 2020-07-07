import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useNavigation, useRoute } from '@react-navigation/native';

import api from '~/services/api';
import HeaderNav from '~/components/HeaderNavigation';

import {
  Container,
  Content,
  CameraWrapper,
  Camera,
  Button,
  TakePictureButton,
} from './styles';

export default function ConfirmDelivery() {
  const navigation = useNavigation();
  const route = useRoute();

  const deliverymanId = useSelector((state) => state.deliveryman.profile.id);
  const { deliveryId } = route.params;

  // eslint-disable-next-line prefer-const
  let cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function handleSubmit() {
    // eslint-disable-next-line no-undef
    const dataFile = new FormData();
    dataFile.append('file', {
      type: 'image/jpg',
      uri: pictureUri,
      name: 'assignature.jpg',
    });

    const pictureResponse = await api.post('files', dataFile);
    await api.put(`/deliveries/finalize/${deliverymanId}/${deliveryId}`, {
      signature_id: pictureResponse.data.id,
    });
    navigation.navigate('Deliveries');
  }

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Container>
      <HeaderNav title="Confirm delivery" />
      <Content>
        {pictureUri ? (
          <CameraWrapper>
            <Image source={{ uri: pictureUri }} style={{ height: '100%' }} />
          </CameraWrapper>
        ) : (
          <CameraWrapper>
            <Camera ref={cameraRef} captureAudio={false} type="back" />
            <TakePictureButton onPress={handletakePicture}>
              <Icon name="photo-camera" color="#fff" size={30} />
            </TakePictureButton>
          </CameraWrapper>
        )}
        <Button onPress={handleSubmit} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}
