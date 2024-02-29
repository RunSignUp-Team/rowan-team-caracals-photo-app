import React, { useState } from 'react'; 
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import GalleryPageButton from "../../components/buttons/GalleryButton";
import LiveStreamButton from "../../components/buttons/LiveStreamButton";
import StatusButton from "../../components/buttons/StatusButton";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, TouchableOpacity} from 'react-native';
import SettingsButton from "../../components/buttons/SettingsButton";
import SettingsModal from '../../components/modals/SettingsModal'

import { COLORS } from "../../constants/Colors";
import CameraPageButton from '../../components/buttons/CameraButton';
//import Ionicons from '@expo/vector-icons/Ionicons';



const logoImage = require('../../assets/brand/logo-circle.png')
const logoText = require('../../assets/brand/logo-text.png')



const Homepage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            
            <View style = {styles.settings_button}>
                <SettingsButton onPress={() => setModalVisible(true)}/>
            </View>
            <SettingsModal
                 visible= {modalVisible}
                 onClose={() => setModalVisible(false)}
                 title="Settings">
                <Text></Text>
            </SettingsModal>
           <StatusButton
                size={38}
                color="black"
                style={styles.statusButton} />

            <Image
                style={styles.circleLogo}
                source={logoImage} />
            <Image
                style={styles.textLogo}
                source={logoText} />

            <Text style={styles.welcomeText}>Welcome, Bruce!</Text>
            <View style={styles.line} />

            <View style={styles.bottomLayer}>

                <View style={styles.galleryButton} />
                <GalleryPageButton
                     size={42}
                        color="black"
                     style={styles.galleryButton} />

                <CameraPageButton
                    size={49}
                    color="black"
                    style = {styles.cameraButton} />

                <LiveStreamButton
                    size={46}
                    color="black"
                    style = {styles.liveButton} />
            </View>

        

        </SafeAreaView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.off_white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -34,
        marginBottom: -34
    },
    bottomLayer: {
       // flex: 1/8,
        position: 'absolute',
        bottom: 0, 
        height: '10%', 
        backgroundColor: COLORS.RSU_pink,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settings_button: {
        position: 'absolute', 
        top: 20, 
        right: 10, 
    },
    circleLogo: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        top: '-22%'
    },
    textLogo: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        position: "absolute",
        top: -8,
        left: 15

    },
    welcomeText: {
        alignItems: 'center',
        fontSize: 35,
        top: -170
    },
    galleryButton: {
        position: 'absolute',
        bottom: 21,
        left: 60,
    },
    cameraButton: {
        position: 'absolute', 
        bottom: 18,
        alignContent: "center"
    },
    liveButton: {
        position: 'absolute',
        bottom: 18,
        right: 60,
    },
    statusButton: {
        position: 'absolute',
        top: 53,
        right: 65,
        padding: 2,
        borderRadius: 1
    },
    line: {
        position: 'absolute',
        top: 111,
        width: '100%',
        height: 1.2,
        backgroundColor: 'black',
    }


});



export default Homepage;