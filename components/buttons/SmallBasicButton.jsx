/* Reusable BasicButton Component to be used project wide */
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text } from "react-native";
import { COLORS } from "../../constants/Colors";

const BasicButton = ({ title, fontFamily, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text 
                style={[styles.text, 
                {fontFamily: fontFamily}]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: COLORS.black,
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 22,
        marginTop: 40,
    },
    text: {
        fontSize: 15,
        color: COLORS.off_white,
        alignSelf: 'center',
        padding: 0
    }
});

export default BasicButton;

