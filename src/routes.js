import React from 'react';
import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/styles/colors';

import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import HomeRoutes from '~/routes/home.routes';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppRoutes() {
  const isLoggedIn = useSelector((store) => store.auth.signed);

  return !isLoggedIn ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
    </Stack.Navigator>
  ) : (
    <BottomTab.Navigator
      initialRouteName="Deliveries"
      tabBarOptions={{
        indicatorStyle: { height: 0 },
        showIcon: true,
        labelStyle: {
          margin: -10,
          padding: 0,
          fontSize: 14,
        },
        style: {
          height: 65,
          margin: 0,
          paddingBottom: 5,
        },
        inactiveTintColor: '#B5B5B5',
        activeTintColor: `${colors.primary}`,
      }}
      headerMode="none"
    >
      <BottomTab.Screen
        name="Main"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={30} color={color} />
          ),
        }}
        component={HomeRoutes}
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
