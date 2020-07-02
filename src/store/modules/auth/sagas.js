import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliverymanId } = payload;

    const response = yield call(api.get, `deliverymen/${deliverymanId}`);

    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Authentication failure',
      'There was an authentication error, please check your data.'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
