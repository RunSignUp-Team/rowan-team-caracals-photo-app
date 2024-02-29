import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import BasicOptionButton from "./BasicOptionButton";




export default function SettingsPage ({ modalVisible, setModalVisible, message }) {
    return (
        <Modal
            transparent={true}
            visible={modalVisible}>
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <BasicOptionButton title='Close' onPress={() => setModalVisible(false)} style={styles.button}></BasicOptionButton>
                    <BasicOptionButton title='Option 1' onPress={() => setModalVisible(false)} style={styles.button}></BasicOptionButton>
                    <BasicOptionButton title='Option 2' onPress={() => setModalVisible(false)} style={styles.button}></BasicOptionButton>
                    <BasicOptionButton title='Option 3' onPress={() => setModalVisible(false)} style={styles.button}></BasicOptionButton>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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