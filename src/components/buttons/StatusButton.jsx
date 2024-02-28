import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const handlePress = () => {
    console.log('Button pressed!');

};


const StatusButton = ({ size, color, style }) => (
    <TouchableOpacity style={[style, { width: size, height: size }]} onPress={handlePress}>
        <FontAwesome name="cloud-upload" size={size*0.8} color={color} />
    </TouchableOpacity>
)


export default StatusButton;
