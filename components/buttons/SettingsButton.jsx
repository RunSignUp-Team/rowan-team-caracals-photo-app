/* Reusable SettingsButton component */
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from "react-native";

const SettingsButton = ({onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Ionicons name="settings-sharp" size={30}/>
    </TouchableOpacity>)

const styles = StyleSheet.create({ 
    container: {
        position: 'absolute',
        top: 30,
        right: 2,
        padding: 5,
        borderRadius: 5,
    },
});
export default SettingsButton
