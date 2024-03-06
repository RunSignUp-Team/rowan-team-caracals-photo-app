/* Structure fot Starting page to be built up by components */
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
<<<<<<< Updated upstream:src/pages/Starting.jsx
import BasicButton from "../components/buttons/BasicButton/BasicButton";
import { COLORS } from "../styles/colors";
=======
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

>>>>>>> Stashed changes:app/pages/Starting.jsx

 // TODO: Fix inconsistancy between iOS and Android BasicButton button location
const logoImage = require('../assets/brand/logo-circle.png')
const Starting = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logoMedium}
                source={logoImage}/>
<<<<<<< Updated upstream:src/pages/Starting.jsx
            <BasicButton title={'Log-in'} fontFamily={'SF-Pro-Text-Bold'}></BasicButton>
=======
            <BasicButton title={'Log-in'} fontFamily={'SF-Pro-Text-Bold'}
                        onPress={goToLoginPage}></BasicButton>
            {/* <BasicDropdown title='Select a date'></BasicDropdown> */}
>>>>>>> Stashed changes:app/pages/Starting.jsx
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