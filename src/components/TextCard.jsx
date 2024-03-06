import React, {useEffect, useState} from "react";
import BasicModal from "./BasicModal";
import { View, Text, StyleSheet, TouchableOpacity,  } from "react-native";
import { COLORS } from "../constants/Colors";

const TextCard = ({race}) => {
   return (
        <View style={styles.container}>
            <Text style={styles.title}>This is the race's name</Text>
            <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</Text>
        </View>
    )
}

export default TextCard;

const styles = StyleSheet.create({
    container: {
        borderColor: COLORS.RSU_pink,
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        width: '80%',
        height: 150,
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: COLORS.RSU_pink,
        paddingRight: 80,
    },
    body: {
        borderWidth: 3,
        borderColor: COLORS.RSU_pink,
        textAlign: 'left',
        justifyContent:'flex-start',
    }
});