import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ControlScreen from './app/screens/ControlScreen';
import AboutScreen from './app/screens/AboutScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import LoginScreen from './app/screens/LoginScreen';
import PlantCategories from './app/screens/PlantCategories';
import SettingsScreen from './app/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="PlantCategories" component={PlantCategories} options={{ headerShown: false }}/>
          <Stack.Screen name="PlantCategoriesScreen" component={PlantCategories} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Controls" component={ControlScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ControlsScreen" component={ControlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


