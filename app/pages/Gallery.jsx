import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import SmallBasicButton from "../../components/buttons/SmallBasicButton";
import StatusButton from "../../components/buttons/StatusButton";
import SettingsButton from "../../components/buttons/SettingsButton";
import GalleryPageButton from "../../components/buttons/GalleryButton";
import LiveStreamButton from "../../components/buttons/LiveStreamButton";
import CameraPageButton from '../../components/buttons/CameraButton';
import SettingsModal from '../../components/SettingsPage'
import StatusModal from '../../components/StatusPage'
import BasicTextInput  from '../../components/BasicTextInput';
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from "../../constants/Colors";
import { router } from "expo-router";
import getRaceDates from "../GetRaceDates";
import getRaces from '../GetRaces';
import getRegRaces from '../GetRegRaces';
import getSingleRace from '../GetSingleRace';
const goToHomePage = () => {
    router.navigate('pages/Homepage');
    
  };

/*Some dummy information for now*/
const info = ["8/13/1942", "5/7/1996", "8/24/2003"]
const albums = ["Animals", "Led Zepplin IV", "Ok Computer"]




// const fetchRaces = async () => {
//     try {
//         const tmpKey = await AsyncStorage.getItem('tmp_key');
//         const tmpSecret = await AsyncStorage.getItem('tmp_secret');
//         const races = await getRaces(tmpKey, tmpSecret);
//         console.log(races);
//         races.AsyncStorage.getRaceDates
//     }
//     catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchRaces();



// const fetchRaceIDs = async () => {
//         try {
//             // Fetch the temporary keys from storage
//             const tmpKey = await AsyncStorage.getItem('tmp_key');
//             const tmpSecret = await AsyncStorage.getItem('tmp_secret');
//             // Fetch races using the temporary keys
//             const races = await getRegRaces(tmpKey, tmpSecret);
//             const registeredRaces = races.user_registered_races;
    
//             const raceIDs = registeredRaces.map(race => race.race_id);
    
//             return raceIDs;
//         } catch (error) {
//             console.error("Error fetching race IDs:", error);
//             throw error; // Rethrow the error for handling at the higher level
//         }
//     }
//     fetchRaceIDs();

const fetchRaceInfo = async () => {
         try {
             const raceIDs = await fetchRaceIDs(); // Get race IDs
             const tmpKey = await AsyncStorage.getItem('tmp_key'); // Get tmpKey
             const tmpSecret = await AsyncStorage.getItem('tmp_secret'); // Get tmpSecret
    
             // Fetch race info for all race IDs concurrently
             const raceInfoPromises = raceIDs.map(async race_id => {
                 info = await getSingleRace(tmpKey, tmpSecret, race_id);
                 console.log(info.race.name, 'info');
                 return [info.race.name];
             });
         } catch (error) {
             console.error('Error:', error);
             throw error;
         }
     }

     fetchRaceInfo();

const Gallery = () => {
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [statusModalVisible, setStatusModalVisible] = useState(false)

    const[raceDateList, setRaceDateList] = useState([])

//    useEffect(() => {
//        const fetchRaceData = async () => {
//            const response = await fetch('https://test3.runsignup.com/rest/races?');
//            const newData = await response.json();
//            setRaceDateList(newData);
//        };
//        fetchRaceData();
//    })

useEffect(() => {
    const fetchRaceDateList = async () => {
        try {
            const raceDateList = await fetchRaceInfo();
            setRaceDateList(raceDateList);
        } catch (error) {
            console.error('Error fetching race next dates:', error);
        }
    };

    fetchRaceDateList();
}, []);

    return(
        <View style = {styles.container}>
            <View style = {styles.home_button}>
                <SmallBasicButton title={'Home'} fontFamily={'SF-Pro-Text-Bold'} onPress={goToHomePage}></SmallBasicButton>
            </View>
            <View style = {styles.settings_button}>
                <SettingsButton onPress={() => setSettingsModalVisible(true)}/>
            </View>
            
            <SettingsModal
            modalVisible={settingsModalVisible}
            setModalVisible={setSettingsModalVisible}>
     </SettingsModal>
     
            <StatusButton
                size={38}
                color="black"
                style={styles.statusButton}
                onPress={() => setStatusModalVisible(true)}/>    
        <StatusModal
            modalVisible={statusModalVisible}
            setModalVisible={setStatusModalVisible}>
         </StatusModal>
            <View style={styles.line} />

        {/*Fill in with actual info later */}
        <View style = {styles.middleLayer}>
            <BasicTextInput title = 'Race'/>
            <SelectDropdown
                defaultButtonText = 'Select a date'
                data = {raceDateList}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
            />
            <SelectDropdown
                defaultButtonText = 'Select an album'
                data = {albums}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
            />
            </View> 
            
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

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.off_white,
        marginBottom: -34
    },
    home_button: {
        flex: 1,
        position: 'absolute',
        left: 20, 
        top: -30
    },
 
    settings_button: {
        position: 'absolute', 
        top: -14, 
        right: 10, 
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
        top: 77,
        width: '100%',
        height: 1.2,
        backgroundColor: 'black',
    },
    middleLayer: {
        flex:1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
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
        bottom: -1,
     },
    galleryButton: {
        position: 'absolute',
        bottom: 20,
        left: 60,
    },
    cameraButton: {
        position: 'absolute', 
        bottom: 18,
        alignContent: 'center'
    },
    liveButton: {
        position: 'absolute',
        bottom: 18,
        right: 60,
    },
});
export default Gallery
