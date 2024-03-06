import React from 'react';
import { Starting, Login, Gallery, Homepage } from './pages/index'
import { createRouter, StackNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';
import BasicModal from '../components/BasicModal';


export default function Layout() {
  // Hook for loading fonts into project
  const [loaded] = useFonts({
    'SF-Pro-Text-Bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Light': require('../assets/fonts/SF-Pro-Text-Light.otf'),
    'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
  });
  if (!loaded) {
    return null;
  }
  
  return (
    //  <Login></Login> // Display the login page
    //  <Homepage></Homepage> // Display the Home page
    // <Gallery></Gallery> // Display the Gallery page
    // <Starting></Starting> // Display the Starting page
    <Starting></Starting>
  );
}