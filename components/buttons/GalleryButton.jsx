import React from "react";
import {StyleSheet, TouchableOpacity, Image} from "react-native";
import { Gallery } from "../../app/pages/Gallery";
import { router } from "expo-router";
const GalleryImage = require('../../assets/images/icons8-gallery-50.png');

const SendToGallery = () => (
    router.navigate('pages/Gallery'))

const GalleryPageButton = () => (
    <TouchableOpacity style={styles.container} onPress={SendToGallery}>
            <Image source = {GalleryImage} />
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85
    },
});
export default GalleryPageButton