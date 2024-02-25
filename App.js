import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/pages/Homepage';
import Gallery from './src/pages/Gallery';
const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Home" 
          component={Homepage} 
         
        />
        <Stack.Screen 
          name="Gallery" 
          component={Gallery} 
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}; 

export default App;
