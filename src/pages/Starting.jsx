/* Structure fot Starting page to be built up by components */
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import BasicButton from "../components/buttons/BasicButton/BasicButton";
import { COLORS } from "../styles/colors";

 // TODO: Fix inconsistancy between iOS and Android BasicButton button location
const logoImage = require('../assets/brand/logo-circle.png')
const Starting = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logoMedium}
                source={logoImage}/>
            <BasicButton title={'Log-in'} fontFamily={'SF-Pro-Text-Bold'}></BasicButton>
        </View>
    );}

export default Starting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: -50, // TODO: Fix button's position
        backgroundColor: COLORS.off_white,
    },
    logoSmall: { // Placeholder dimensions
        width: 50,
        height: 50
    },
    logoMedium: {
        width: 181,
        height: 181,
        position: 'absolute',
        top: '23%'
    },
    logoLarge: { // Placehold dimensions
        width: 300,
        height: 300
    },
});