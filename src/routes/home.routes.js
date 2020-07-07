import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ConfirmDelivery from '~/pages/ConfirmDelivery';
import Deliveries from '~/pages/Deliveries';
import Details from '~/pages/Details';
import NewProblem from '~/pages/NewProblem';
import Problems from '~/pages/Problems';

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Deliveries" component={Deliveries} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="NewProblem" component={NewProblem} />
      <Stack.Screen name="Problems" component={Problems} />
      <Stack.Screen name="ConfirmDelivery" component={ConfirmDelivery} />
    </Stack.Navigator>
  );
}
