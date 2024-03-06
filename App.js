import React from 'react';
import Homepage from './src/pages/Homepage';
//import Login from './src/pages/Login';
// import Starting from './src/pages/Starting';
import Gallery from './src/pages/Gallery';
// import * as Pages from './src/pages';
import { useFonts } from 'expo-font';

export default function App() {
  // Hook for loading fonts into project
  const [loaded] = useFonts({
    'SF-Pro-Text-Bold': require('./src/assets/fonts/SF-Pro-Text-Bold.otf'),
  });
  if (!loaded) {
    return null;
  }

  return (
     // <Login></Login> // Display the login page
     <Homepage></Homepage> // Display the Home page
    //<Gallery></Gallery> // Display the Gallery page
     //<Starting></Starting> // Display the Starting page
  );
}

