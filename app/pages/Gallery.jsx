import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import BasicButton from "../../components/buttons/BasicButton";
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
                <BasicButton title={'Home'} fontFamily={'SF-Pro-Text-Bold'} onPress={goToHomePage}></BasicButton>
            </View>
            <View style = {styles.settings_button}>
                <SettingsButton></SettingsButton>
            </View>
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
    },
    settings_button: {
        alignSelf: 'flex-end'
    },
});
export default Gallery
