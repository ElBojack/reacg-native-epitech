import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfilComponent from '../components/ProfilComponent';
import MemeComponent from '../components/MemeComponent';

const Tab = createBottomTabNavigator();

const HomePage = () => (
  <NavigationContainer independent>
    <Tab.Navigator
      initialRouteName="Meme"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profil') {
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
          } else if (route.name === 'Meme') {
            iconName = focused ? 'ios-color-wand' : 'ios-color-wand-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Meme" component={MemeComponent} />
      <Tab.Screen options={{ headerShown: false }} name="Profil" component={ProfilComponent} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default HomePage;
