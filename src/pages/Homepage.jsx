import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, TouchableOpacity} from 'react-native';
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import logoImage from "../assets/brand/logo-circle.png";
import logoText from "../assets/brand/logo-text.png";
import GalleryPageButtonChange from "../components/buttons/GalleryButtonChanged";
import StatusButton from "../components/buttons/StatusButton";
import CameraButton from "../components/buttons/CameraButton";



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
            <StatusButton
                size={38}
                color="black"
                style={styles.statusButton} />
            <Text style={styles.welcomeText}>Welcome, Bruce!</Text>
            <View style={styles.line} />

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
    statusButton: {
        position: 'absolute',
        top: 56,
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