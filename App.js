import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import LoginAndRegisterPage from './pages/LoginAndRegisterPage';
import HomePage from './pages/HomePage';
import Store from './redux/storeConfig/store';

const Stack = createNativeStackNavigator();

StatusBar.setHidden(true);

const App = () => (
  <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginAndRegisterPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
