/* Structure fot Starting page to be built up by components */
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import BasicButton from "../../components/buttons/BasicButton";
import { COLORS } from "../../constants/Colors";
import { useNavigation, router} from "expo-router";
import BasicModal from "../../components/BasicModal";
import BasicOptionButton from "../../components/BasicOptionButton";
import LivestreamSettings from "./LivestreamSettings";
import SettingsPage from "../../components/SettingsPage";
import Login from "./Login";
import SelectDropdown from "react-native-select-dropdown";
import BasicDropdown from "../../components/BasicDropdown";
import TextCard from "../../components/TextCard";
import getRegRaces from "../GetRegRaces";
import getSingleRace from "../GetSingleRace";
import BasicSwitch from "../../components/BasicSwitch";
import BasicTextInput from "../../components/BasicTextInput";
import * as Linking from 'expo-linking';
import * as AuthSession from 'expo-auth-session';



 // TODO: Fix inconsistancy between iOS and Android BasicButton button location
const logoImage = require('../../assets/brand/logo-circle.png')
const Starting = () => {
    const goToLoginPage = () => {
      router.navigate('pages/Login');
    };

const url = AuthSession.makeRedirectUri({
    scheme: 'run-media-up',
    path: 'pages/Homepage'
});

    return (
        <View style={styles.container}>
            {/* <BasicModal message={'This is a test'}></BasicModal> */}
            {/* <BasicOptionButton title='basic'></BasicOptionButton> */}
{/* Normal login */}
            <Image
                style={styles.logoMedium}
                source={logoImage}/>
            <BasicButton title={'Log-in'} fontFamily={'SF-Pro-Text-Bold'}
                        onPress={goToLoginPage}></BasicButton>
{/* Test of Linking if anyone is interested. */}
            {/* <Text style={styles.testText}>URL: {url}</Text>
            <Button title='yeah' onPress={() => Linking.openURL(url)}>Open URL</Button> */}
            {/* <BasicDropdown title='Select a race'></BasicDropdown> */}
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