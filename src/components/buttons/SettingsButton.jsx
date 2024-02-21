/* Reusable SettingsButton component */
import React from "react";
import {StyleSheet, TouchableOpacity, Image} from "react-native";

const settingsImage = require('../../assets/images/settings.png')

const SettingsButton = () => (
    <TouchableOpacity style={styles.container}>
        <Image source = {settingsImage}/>
    </TouchableOpacity>)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85
    },
});
export default SettingsButton