import React from "react";
import {StyleSheet, TouchableOpacity, Image} from "react-native";
import Homepage from '../../../src/pages/Homepage';

const homeImage = require('../../assets/images/icons8-home-50.png')

const SendHome = () => (
    <Homepage></Homepage>
)

const HomePageButton = () => (
    <TouchableOpacity style={styles.container}>
            <Image source = {homeImage} onClick={SendHome}/>
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