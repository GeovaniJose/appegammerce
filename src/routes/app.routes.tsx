import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: 'rgba(3,3,3,0.9)' },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: 'e-Gammerce',
        headerStyle: {
          height: 72,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator>
);

export default AppRoutes;
