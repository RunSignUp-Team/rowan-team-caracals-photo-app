import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import StatusModal from '../../components/StatusPage'



const StatusButton = ({ size, color, style, onPress }) => (
    <TouchableOpacity style={[style, { width: size, height: size }]} onPress={onPress}>
        <FontAwesome name="cloud-upload" size={size*0.8} color={color} />
    </TouchableOpacity>
    
)


export default StatusButton;
