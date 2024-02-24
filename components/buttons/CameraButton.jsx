import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const SendToCamera = () => (
    <Camerapage></Camerapage>
)

const CameraPageButton = () => (
    <TouchableOpacity style={styles.container}>
        <Ionicons name="camera" size={52} onClick={SendToCamera}/>
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