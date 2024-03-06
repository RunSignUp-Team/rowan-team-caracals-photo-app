import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Homepage from '../../app/pages'


const SendHome = () => (
    <Pages.HomePage></Pages.HomePage>
)

const HomePageButton = () => (
    <TouchableOpacity style={styles.container}>
        <Ionicons name="home-sharp" size={52} onClick={SendHome}/>
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 85
    },
});
export default HomePageButton