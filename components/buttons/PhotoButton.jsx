import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const viewPhoto = () => (
    <Pages.HomePage></Pages.HomePage>
)

const PhotoButton = (photo) => (
    <TouchableOpacity style={styles.container}>
                 <Image source={require('../../assets/images/1.png')} size={52} onPress={viewPhoto} />
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85
    },
});
export default PhotoButton