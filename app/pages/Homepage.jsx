import React from "react";
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import GalleryPageButton from "../../components/buttons/GalleryButton";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, TouchableOpacity} from 'react-native';
//import Ionicons from '@expo/vector-icons/Ionicons';



const logoImage = require('../../assets/brand/logo-circle.png')
const logoText = require('../../assets/brand/logo-text.png')

const Homepage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style = {styles.settingsButton}>
                <FontAwesome name="cog" size={33} color="black" />
            </TouchableOpacity>
            <Image
                style={styles.circleLogo}
                source={logoImage}/>
            <Image
                style={styles.textLogo}
                source={logoText}/>
            <Text style={styles.welcomeText}>Welcome, Bruce!</Text>
            <View style={styles.line} />

            <View style={styles.bottomLayer}>
                <GalleryPageButton></GalleryPageButton>

            </View>

           
        </SafeAreaView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomLayer: {
       // flex: 1/8,
        position: 'absolute',
        bottom: 0, // Positioned at the bottom of the container
        height: '10%', // 1/8th of the screen height
        backgroundColor: '#EF509C',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsButton: {
        position: 'absolute',
        top: 54,
        right: 20,
       padding: 2,
        borderRadius: 1,

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
        top: 57,
        right: 70,
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