import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SelectDropdown from "react-native-select-dropdown";
import { useFonts } from 'expo-font';
import { COLORS } from '../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const BasicDropdown = ( {title} ) => {
    const [loaded] = useFonts({
        'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
      });
    
      if (!loaded) {
        return null;
      }
    return (
        <View style={styles.container}>
        <SelectDropdown 
            defaultButtonText={title}
            buttonStyle={styles.dropdown}
            buttonTextStyle={styles.text}
            dropdownIconPosition='right'
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={COLORS.black} size={16} />;
              }}>
        </SelectDropdown>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'left',
    },
    dropdown: {
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: COLORS.off_white,
    },
    text:{
        textAlign: 'left',
        fontFamily: 'SF-Pro-Display-Regular',
    }
});


export default BasicDropdown;