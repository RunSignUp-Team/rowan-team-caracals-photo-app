import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, TouchableOpacity} from 'react-native';
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import logoImage from "../assets/brand/logo-circle.png";
import logoText from "../assets/brand/logo-text.png";
import GalleryPageButtonChange from "../components/buttons/GalleryButtonChanged";



const Homepage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style = {styles.button}>
                <FontAwesome name="cog" size={32} color="black" />
            </TouchableOpacity>
            <Image
                style={styles.circleLogo}
                source={logoImage}/>
            <Image
                style={styles.textLogo}
                source={logoText}/>

            <Text style={styles.welcomeText}>Welcome, Bruce!</Text>
        <View style={styles.bottomLayer}>
            <GalleryPageButtonChange
                size={42}
                color="black"
                style={styles.galleryButton} />
        </View>

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
        bottom: 20,
        left: 90,
    },


});



export default Homepage;