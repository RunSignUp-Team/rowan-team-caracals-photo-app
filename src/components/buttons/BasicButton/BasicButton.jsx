/* Reusable BasicButton Component to be used project wide */
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text } from "react-native";
import { COLORS } from "../../../styles/colors";

const BasicButton = ({ title, fontFamily }) => (
    <TouchableOpacity style={styles.container}>
    <Text 
        style={[styles.text, 
        {fontFamily: fontFamily}]}>
        {title} </Text>
    </TouchableOpacity>)

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: COLORS.black,
        borderRadius: 100,
        paddingVertical: 17,
        paddingHorizontal: 25,
        marginTop: 40,
    },
    text: {
        fontSize: 18,
        color: COLORS.off_white,
        alignSelf: 'center',
        padding: 0
    }
})
export default BasicButton
