/* Reusable SettingsButton component */
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from "react-native";

const SettingsButton = () => (
    <TouchableOpacity style={styles.container}>
        <Ionicons name="settings-sharp" size={52}/>
    </TouchableOpacity>)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85
    },
});
export default SettingsButton
