import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

YellowBox.ignoreWarnings(['componentWillReceiveProps', 'Failed prop type']);

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <StatusBar backgroundColor="#116B26" barStyle="light-content" />
      </PersistGate>
    </Provider>
  );
}
