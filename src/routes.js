import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ConfirmDelivery from '~/pages/ConfirmDelivery';
import Deliveries from '~/pages/Deliveries';
import Details from '~/pages/Details';
import NewProblem from '~/pages/NewProblem';
import Problems from '~/pages/Problems';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <BottomTab.Navigator initialRouteName="Deliveries">
      <BottomTab.Screen name="Deliveries" component={Deliveries} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeNavigation} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Problems" component={Problems} />
            <Stack.Screen name="NewProblem" component={NewProblem} />
            <Stack.Screen name="ConfirmDelivery" component={ConfirmDelivery} />
          </>
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
