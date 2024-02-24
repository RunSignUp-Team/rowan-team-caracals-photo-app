import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import GalleryButton from "../components/buttons/GalleryButton";
import HomePageButton from "../components/buttons/HomePageButton";
import { COLORS } from "../styles/colors";

const Camera = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.home_button}>
                <HomePageButton></HomePageButton>
            </View>
            <View style = {styles.gallery_button}>
                <GalleryButton></GalleryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.medium_gray,
    },
    home_button: {
        alignItems: 'right',
        justifyContent: 'right',
        bottom: -500,
        screenLeft: 1000
    },
    gallery_button: {
        justifycontent: 'flex-end',
        flex: 1,
        bottom: -500,
    },
});
export default Camera
