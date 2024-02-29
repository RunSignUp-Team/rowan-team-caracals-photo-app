import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


// fix that later you doofus

export default function BasicModal({ modalVisible, setModalVisible, message }) {
    return (
        <Modal
            transparent={true}
            visible={modalVisible}>,
            animationType = 'slide' 
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Ionicons name="close" size={24} color="#CFCFCF" />
                    </TouchableOpacity>
                    <Text>{message}</Text>
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
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});