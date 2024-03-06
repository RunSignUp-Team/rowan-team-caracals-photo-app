import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

const SendToCamera = () => (
    router.navigate('pages/CameraPage')
   
)

const CameraPageButton = ({ size, color, style }) => (
    <TouchableOpacity style={[style, { width: size, height: size }]} onPress={SendToCamera}>
        <Ionicons name="camera" size={size * 0.8} color={color} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85
    },
});
export default CameraPageButton

