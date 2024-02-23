import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView} from 'react-native';
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import logoImage from "../assets/brand/logo-circle.png";
import logoText from "../assets/brand/logo-text.png";
import GalleryPageButtonChange from "../components/buttons/GalleryButtonChanged";



const Homepage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight style = {styles.button}>
                <FontAwesome name="cog" size={32} color="black" />
            </TouchableHighlight>
            <Image
                style={styles.circleLogo}
                source={logoImage}/>
            <Image
                style={styles.textLogo}
                source={logoText}/>

            <Text style={styles.welcomeText}>Welcome, [User]!</Text>
            <GalleryPageButtonChange
                size={45}
                color="black"
                style={styles.galleryButton} />

            <StatusBar style="auto" />
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
    button: {
        position: 'absolute',
        top: 49,
        right: 15,
        padding: 10,
        borderRadius: 5,

    },
    circleLogo: {
        width: 175,
        height: 175,
        justifyContent: 'center',
        alignItems: 'center',
        top: '-26%'
    },
    textLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        position: "absolute",
        top: 0,
        left: 5

    },
    welcomeText: {
        alignItems: 'center',
        fontSize: 35,
        top: -190
    },
    galleryButton: {
        position: 'absolute',
        bottom: 45,
        left: 80,
    },


});



export default Homepage;