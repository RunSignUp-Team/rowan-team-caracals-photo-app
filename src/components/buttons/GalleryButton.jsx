import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const SendToGallery = () => (
    <Gallery></Gallery>
)

const GalleryPageButton = () => (
    <TouchableOpacity style={styles.container}>
        <Ionicons name="images" size={52} onClick={SendToGallery}/>
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