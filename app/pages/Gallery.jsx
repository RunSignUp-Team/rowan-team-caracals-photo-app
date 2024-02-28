import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import SmallBasicButton from "../../components/buttons/SmallBasicButton";
import StatusButton from "../../components/buttons/StatusButton";
import SettingsButton from "../../components/buttons/SettingsButton";
import { COLORS } from "../../constants/Colors";
import { router } from "expo-router";
const goToHomePage = () => {
    router.navigate('pages/Homepage');
  };

const Gallery = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.home_button}>
                <SmallBasicButton title={'Home'} fontFamily={'SF-Pro-Text-Bold'} onPress={goToHomePage}></SmallBasicButton>
            </View>
            <View style = {styles.settings_button}>
                <SettingsButton></SettingsButton>
            </View>
            <StatusButton
                size={38}
                color="black"
                style={styles.statusButton} />
            <View style={styles.line} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.off_white,
    },
    home_button: {
        flex: 1,
        position: 'absolute',
        left: 20, 
        top: -30
    },
 
    settings_button: {
        position: 'absolute', 
        top: -14, 
        right: 10, 
    },
    statusButton: {
        position: 'absolute',
        top: 19,
        right: 65,
        padding: 2,
        borderRadius: 1
    },
    line: {
        position: 'absolute',
        top: 77,
        width: '100%',
        height: 1.2,
        backgroundColor: 'black',
    },
});
export default Gallery
