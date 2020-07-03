import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/styles/colors';

import ConfirmDelivery from '~/pages/ConfirmDelivery';
import Deliveries from '~/pages/Deliveries';
import Details from '~/pages/Details';
import NewProblem from '~/pages/NewProblem';
import Problems from '~/pages/Problems';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeRoutes() {
  return (
    <BottomTab.Navigator
      initialRouteName="Deliveries"
      tabBarOptions={{
        indicatorStyle: { height: 0 },
        showIcon: true,
        labelStyle: {
          margin: 0,
          padding: 0,
          fontSize: 14,
        },
        style: {
          height: 70,
          margin: 0,
          paddingBottom: 5,
        },
        inactiveTintColor: '#B5B5B5',
        activeTintColor: `${colors.primary}`,
      }}
    >
      <BottomTab.Screen
        name="Deliveries"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={30} color={color} />
          ),
        }}
        component={Deliveries}
      />
      <BottomTab.Screen
        name="My Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={30} color={color} />
          ),
        }}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  const isLoggedIn = useSelector((store) => store.auth.signed);
  // const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomeRoutes}
            />
            <Stack.Screen
              name="Details"
              options={{ headerShown: false }}
              component={Details}
            />
            <Stack.Screen
              name="Problems"
              options={{ headerShown: false }}
              component={Problems}
            />
            <Stack.Screen
              name="NewProblem"
              options={{ headerShown: false }}
              component={NewProblem}
            />
            <Stack.Screen
              name="ConfirmDelivery"
              options={{ headerShown: false }}
              component={ConfirmDelivery}
            />
          </>
        ) : (
          <Stack.Screen
            name="SignIn"
            options={{ headerShown: false }}
            component={SignIn}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
