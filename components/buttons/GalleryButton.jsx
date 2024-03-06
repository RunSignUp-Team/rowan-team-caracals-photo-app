import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from "expo-router";

const SendToGallery = () => (
    router.navigate('pages/Gallery')
);


const GalleryPageButton = ({ size, color, style }) => (
    <TouchableOpacity style={[style, { width: size, height: size }]} onPress={SendToGallery}>
        <FontAwesome5 name="images" size={size * 0.8} color={color} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85,
    },
});
export default GalleryPageButton;