import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginAndRegisterPage from './pages/LoginAndRegisterPage';
/* import RegisterPage from './Pages/RegisterPage'; */
import HomePage from './pages/HomePage';

const Stack = createNativeStackNavigator();

StatusBar.setHidden(true);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginAndRegisterPage} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
