import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { router } from "expo-router";

const SendToCamera = () => (
    router.navigate('pages/LiveStreamPage')
   //console.log("Live Pressed")
)

const CameraPageButton = ({ size, color, style }) => (
    <TouchableOpacity style={[style, { width: size, height: size }]} onPress={SendToCamera}>
        <AntDesign name="youtube" size={size * 0.8} color={color} />
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

