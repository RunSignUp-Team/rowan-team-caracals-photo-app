import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';

const BasicOptionButton = ({ title, onPress }) => {
    const [loaded] = useFonts({
        'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
      });
    
      if (!loaded) {
        return null;
      }
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text 
                style={styles.text}>
                {title}
            </Text>
            <Ionicons name="chevron-forward" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
    );
};

export default BasicOptionButton;


const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.off_white,
        borderRadius: 15,
        paddingVertical: 17,
        borderColor: COLORS.black,
        borderWidth: 1,
        paddingHorizontal: 20,
        verticalPadding: 15,
        marginTop: 10,
        width: '100%', // Add a comma here
    },
    text:
    {
        fontFamily: 'SF-Pro-Display-Regular',
        fontSize: 20,
        color: COLORS.black,
        textAlign: 'left',

    },
    icon:{
        marginLeft:50,
    }
});