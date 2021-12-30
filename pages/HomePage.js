import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfilComponent from '../components/ProfilComponent';
import MemeComponent from '../components/MemeComponent';

const Tab = createBottomTabNavigator();

const HomePage = () => (
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
      tabBarActiveTintColor: '#0782F9',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen options={{ headerShown: false }} name="Meme" component={MemeComponent} />
    <Tab.Screen options={{ headerShown: false }} name="Profil" component={ProfilComponent} />
  </Tab.Navigator>
);
export default HomePage;
