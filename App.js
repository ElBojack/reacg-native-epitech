import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './Pages/LoginAndRegisterPage';
/* import RegisterPage from './Pages/RegisterPage'; */
import HomePage from './Pages/HomePage';

const Stack = createNativeStackNavigator();

StatusBar.setHidden(true);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
      {/* <Stack.Screen options={{ headerShown: false }}
      name="Register" component={RegisterPage} /> */}
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
