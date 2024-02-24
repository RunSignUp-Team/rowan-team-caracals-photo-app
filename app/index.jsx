import React from 'react';
import { Starting, Login, Gallery, Homepage } from './pages/index'
import { createRouter, StackNavigation } from 'expo-router';
import { useFonts } from 'expo-font';


export default function Layout() {
  // Hook for loading fonts into project
  const [loaded] = useFonts({
    'SF-Pro-Text-Bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
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