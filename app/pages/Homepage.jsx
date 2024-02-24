import React from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import GalleryPageButton from "../../components/buttons/GalleryButton";

const Homepage = () => {
    return (
        <View style={styles.container}>
            <TouchableHighlight style = {styles.button}>
                <FontAwesome name="cog" size={30} color="black" />
            </TouchableHighlight>
            <StatusBar style="auto" />
            <GalleryPageButton></GalleryPageButton>
        </View>
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
        top: 50,
        right: 15,
        padding: 10,
        borderRadius: 5,

    },


});


export default Homepage