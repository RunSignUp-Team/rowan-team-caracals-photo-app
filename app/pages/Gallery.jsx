import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import SmallBasicButton from "../../components/buttons/SmallBasicButton";
import StatusButton from "../../components/buttons/StatusButton";
import SettingsButton from "../../components/buttons/SettingsButton";
import SettingsModal from '../../components/SettingsPage'
import StatusModal from '../../components/StatusPage'
import BasicTextInput  from '../../components/BasicTextInput';
import SelectDropdown from "react-native-select-dropdown";
import { COLORS } from "../../constants/Colors";
import { router } from "expo-router";
import BottomLayer from "../../components/BottomLayer";
const goToHomePage = () => {
    router.navigate('pages/Homepage');
  };

/*Some dummy information for now*/
const dates = ["8/13/1942", "5/7/1996", "8/24/2003"]
const albums = ["Animals", "Led Zepplin IV", "Ok Computer"]

const Gallery = () => {
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [statusModalVisible, setStatusModalVisible] = useState(false)
    return (
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
                    data = {dates}
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
                
            <BottomLayer />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.off_white,
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
        // marginTop: 100
        marginBottom: -40
    }
});
export default Gallery
