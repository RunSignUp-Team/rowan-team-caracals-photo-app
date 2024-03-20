import React, { useState, useEffect } from 'react'; 
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import GalleryPageButton from "../../components/buttons/GalleryButton";
import LiveStreamButton from "../../components/buttons/LiveStreamButton";
import StatusButton from "../../components/buttons/StatusButton";
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableHighlight, SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';
import SettingsButton from "../../components/buttons/SettingsButton";
import SettingsModal from '../../components/SettingsPage'
import StatusModal from '../../components/StatusPage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from "../../constants/Colors";
import CameraPageButton from '../../components/buttons/CameraButton';
import BasicTextInput from '../../components/BasicTextInput';
import getRegRaces from '../GetRegRaces';
import getSingleRace from '../GetSingleRace';
import getRaces from '../GetRaces';

//import Ionicons from '@expo/vector-icons/Ionicons';

const logoImage = require('../../assets/brand/logo-circle.png')
const logoText = require('../../assets/brand/logo-text.png')

const Homepage = () => {

const [settingsModalVisible, setSettingsModalVisible] = useState(false);
const [statusModalVisible, setStatusModalVisible] = useState(false);

const [firstName, setFirstName] = useState('');

useEffect(() => {
    const getFirstNameFromStorage = async () => {
        try {
            const firstName = await AsyncStorage.getItem('firstName');
            if (firstName) {
                setFirstName(firstName);
            }
        } catch (error) {
            console.error('Could not retrieve info from storage:', error);
        }
    };
    getFirstNameFromStorage();
}, []);

// const fetchRaceIDs = async () => {
//     try {
//         // Fetch the temporary keys from storage
//         const tmpKey = await AsyncStorage.getItem('tmp_key');
//         const tmpSecret = await AsyncStorage.getItem('tmp_secret');
//         // Fetch races using the temporary keys
//         const races = await getRegRaces(tmpKey, tmpSecret);
//         const registeredRaces = races.user_registered_races;

//         const raceIDs = registeredRaces.map(race => race.race_id);

//         return raceIDs;
//     } catch (error) {
//         console.error("Error fetching race IDs:", error);
//         throw error; // Rethrow the error for handling at the higher level
//     }
// }

// const fetchRaceInfo = async () => {
//     try {
//         const raceIDs = await fetchRaceIDs(); // Get race IDs
//         const tmpKey = await AsyncStorage.getItem('tmp_key'); // Get tmpKey
//         const tmpSecret = await AsyncStorage.getItem('tmp_secret'); // Get tmpSecret

//         // Fetch race info for all race IDs concurrently
//         const raceInfoPromises = raceIDs.map(async race_id => {
//             const info = await getSingleRace(tmpKey, tmpSecret, race_id);
//             console.log(info.race.name, 'info');
//             return [info.race.name];
//         });
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// };

//fetchRaceInfo();

const fetchRaces = async () => {
    try {
        const tmpKey = await AsyncStorage.getItem('tmp_key');
        const tmpSecret = await AsyncStorage.getItem('tmp_secret');
        const races = await getRaces(tmpKey, tmpSecret);
        console.log(races);
    }
    catch (error) {
        console.error('Error:', error);
    }
}

fetchRaces();

return (
        <SafeAreaView style={styles.container}>
            
            <View style = {styles.settings_button}>
                <SettingsButton onPress={() => setSettingsModalVisible(true)}/>
            </View>
            <SettingsModal
                   modalVisible={settingsModalVisible}
                   setModalVisible={setSettingsModalVisible}>
            </SettingsModal>
            <StatusModal
                   modalVisible={statusModalVisible}
                   setModalVisible={setStatusModalVisible}>
            </StatusModal>
           <StatusButton
                size={38}
                color="black"
                style={styles.statusButton} 
                onPress={() => setStatusModalVisible(true)}/>

            <Image
                style={styles.circleLogo}
                source={logoImage} />
            <Image
                style={styles.textLogo}
                source={logoText} />

            <Text style={styles.welcomeText}>Welcome, {firstName}!</Text>
            <View style={styles.line} />
            <ScrollView>
                <Text>This is a test</Text>

            </ScrollView>

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
    },
    bottomLayer: {
        flex: 1,
        position: 'absolute',
        height: 80, 
        backgroundColor: COLORS.RSU_pink,
        borderColor: COLORS.black,
        borderStyle: 'solid',
        borderTopWidth: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: -40,
        marginBottom: 5,
    },
    settings_button: {
        position: 'absolute', 
        top: -14, 
        right: 10, 
    },
    circleLogo: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 125,
    },
    textLogo: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        position: "absolute",
        top: -45,
        left: 10,

    },
    welcomeText: {
        alignItems: 'center',
        fontSize: 35,
        paddingTop: 10,
        fontFamily: 'SF-Pro-Text-Light',
    },
    galleryButton: {
        position: 'absolute',
        bottom: 20,
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
        top: 19,
        right: 65,
        padding: 2,
        borderRadius: 1
    },
    line: {
        position: 'absolute',
        top: 70,
        width: '100%',
        height: 1.2,
        backgroundColor: 'black',
    }


});



export default Homepage;