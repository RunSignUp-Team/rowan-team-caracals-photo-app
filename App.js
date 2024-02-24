import React from 'react';
import * as Pages from './pages.js';
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
    <Pages.Gallery></Pages.Gallery> // Display any page
  );
}

