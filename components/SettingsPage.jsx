import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import BasicOptionButton from "./BasicOptionButton";
import logout from "../app/UnauthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function SettingsPage ({ modalVisible, setModalVisible, message }) {
    const logoImage = require('../assets/brand/logo-circle.png')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        const getFirstandLastNameFromStorage = async () => {
            try {
                const storedFirstName = await AsyncStorage.getItem('firstName');
                const storedLastName = await AsyncStorage.getItem('lastName');
                if (storedFirstName && storedLastName) {
                    setFirstName(storedFirstName);
                    setLastName(storedLastName);
                }
            } catch (error) {
                console.error('Could not retrieve namea from storage:', error);
            }
        };
        getFirstandLastNameFromStorage();
    }, []);

    const handleLogout = async () => {
        const tmpKey = await AsyncStorage.getItem('tmp_key');
        const tmpSecret = await AsyncStorage.getItem('tmp_secret');
        
        if (tmpKey && tmpSecret) {
            const logoutSuccess = await logout(tmpKey, tmpSecret);
            console.log('Logout success:', logoutSuccess);
            
            if (logoutSuccess) {
                // console.log('Logout successful');
                router.navigate('pages/Starting');
            } else {
                console.log('Logout failed');
            }
        } else {
            console.log('Temporary keys not found');
        }
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <Image 
                        source={logoImage} 
                        style={styles.profileImage} />
                    <Text style={styles.names}>{firstName} {lastName}</Text>
                    <BasicOptionButton title='Close' onPress={() => setModalVisible(false)} style={styles.button}></BasicOptionButton>
                    <BasicOptionButton title='Log Out' onPress={handleLogout} style={styles.button}></BasicOptionButton>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginBottom: 10,
    },
    names:{
        fontSize: 28,
        fontFamily: 'SF-Pro-Display-Regular',
        paddingBottom:20,

    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    button: {
        marginTop: 600,
    }
});