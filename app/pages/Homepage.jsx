import React from "react";
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import GalleryPageButton from "../../components/buttons/GalleryButton";
import StatusButton from "../../components/buttons/StatusButton";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, TouchableOpacity} from 'react-native';
import SettingsButton from "../../components/buttons/SettingsButton";
import { COLORS } from "../../constants/Colors";
//import Ionicons from '@expo/vector-icons/Ionicons';



const logoImage = require('../../assets/brand/logo-circle.png')
const logoText = require('../../assets/brand/logo-text.png')

const Homepage = () => {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style = {styles.settings_button}>
                <SettingsButton></SettingsButton>
            </View>
           <StatusButton
                size={38}
                color="black"
                style={styles.statusButton} />

            <Image
                style={styles.circleLogo}
                source={logoImage} />
            <Image
                style={styles.textLogo}
                source={logoText} />

            <Text style={styles.welcomeText}>Welcome, Bruce!</Text>
            <View style={styles.line} />

            <View style={styles.bottomLayer}>

                <View style={styles.galleryButton} />
                <GalleryPageButton
                     size={42}
                        color="black"
                     style={styles.galleryButton} />
            </View>

        

        </SafeAreaView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.off_white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -34,
        marginBottom: -34
    },
    bottomLayer: {
       // flex: 1/8,
        position: 'absolute',
        bottom: 0, 
        height: '9%', 
        backgroundColor: COLORS.RSU_pink,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settings_button: {
        position: 'absolute', 
        top: 20, 
        right: 10, 
    },
    circleLogo: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        top: '-22%'
    },
    textLogo: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        position: "absolute",
        top: -8,
        left: 15

    },
    welcomeText: {
        alignItems: 'center',
        fontSize: 35,
        top: -170
    },
    galleryButton: {
        position: 'absolute',
        bottom: 20,
        left: 90,
    },
    statusButton: {
        position: 'absolute',
        top: 53,
        right: 65,
        padding: 2,
        borderRadius: 1
    },
    line: {
        position: 'absolute',
        top: 111,
        width: '100%',
        height: 1.2,
        backgroundColor: 'black',
    }


});



export default Homepage;