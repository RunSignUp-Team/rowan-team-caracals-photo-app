import React from "react";
import {StyleSheet, TouchableOpacity, } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from "../../constants/Colors";

const AddAlbumButton = ({ size, style, onPress }) => {
    return (
        <TouchableOpacity style={style   /*styles.container*/} onPress={onPress}>
            <Ionicons name="add-outline" size={size} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({ 
    container: {
        // backgroundColor: COLORS.black,
        // borderRadius: 100,
        // paddingVertical: 5,
        // paddingHorizontal: 5,
        // marginTop: 10,
        // padding: 5,
    },
    text: {
        fontSize: 18,
        color: COLORS.off_white,
        alignSelf: 'center',
        padding: 0
    }
});

export default AddAlbumButton;