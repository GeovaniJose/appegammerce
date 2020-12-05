import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: '#282c36' },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: 'e-Gammerce',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: 'e-Gammerce',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',

        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerBackImage: () => (
          <FeatherIcon name="chevron-left" size={24} color="#fff" />
        ),
      }}
      name="Cart"
      component={Cart}
    />
  </App.Navigator>
);

export default AppRoutes;
