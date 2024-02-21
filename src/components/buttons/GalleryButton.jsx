import React from "react";
import {StyleSheet, TouchableOpacity, Image} from "react-native";
import Gallery from '../../pages/Gallery';
const GalleryImage = require('../../assets/images/icons8-gallery-50.png');

const SendToGallery = () => (
    <Gallery></Gallery>
)

const GalleryPageButton = () => (
    <TouchableOpacity style={styles.container}>
            <Image source = {GalleryImage} onClick={SendToGallery}/>
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