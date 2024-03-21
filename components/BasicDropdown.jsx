import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SelectDropdown from "react-native-select-dropdown";
import { useFonts } from 'expo-font';
import { COLORS } from '../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const BasicDropdown = ( {title, data} ) => {
    const [loaded] = useFonts({
        'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
      });
    
      if (!loaded) {
        return null;
      }
    
      // Placeholder
      const countries = [
        'Mexico',
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil',
        'England',
        'Dubai',
        'France',
        'Germany',
        'Saudi Arabia',
        'Argentina',
        'India',
      ];
    return (
        <View style={styles.container}>
        <SelectDropdown 
            data={data ? data : countries}
            defaultButtonText={title}
            buttonStyle={styles.dropdown}
            buttonTextStyle={styles.text}
            dropdownIconPosition='right'
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={COLORS.black} size={16} />;
              }}
            search
            searchPlaceHolder='Search...'
            searchPlaceholderStyle={styles.text}
            rowStyle={styles.contentContainer}
            rowTextStyle={styles.text}
            selectedRowStyle={styles.selectedRowStyle}
            selectedRowTextStyle={styles.selectedRowTextStyle}
            showsVerticalScrollIndicator={true}
            disableAutoScroll={true}
            listMode='SCROLLVIEW'
            >
        </SelectDropdown>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 15,
    },
    dropdown: {
        borderRadius: 15,
        width: '80%',
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: COLORS.off_white,
    },
    text:{
        textAlign: 'left',
        fontFamily: 'SF-Pro-Display-Regular',
        paddingBottom: 5,
    },
    contentContainer: {
        backgroundColor: COLORS.off_white,
        borderBlockColor: COLORS.light_gray,
        paddingBottom: 15,
    },
    selectedRowStyle: {
        backgroundColor: COLORS.RSU_pink,
    },
    selectedRowTextStyle: {
        color: COLORS.off_white,
    }
});


export default BasicDropdown;