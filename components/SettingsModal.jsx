import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { COLORS } from "../constants/Colors";

const CustomModal = ({ visible, onClose, title, children }) => {
  return (
    <Modal
      animationType= "fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <View style={styles.modalContent}>
            {children}
          </View>
          
        </View>
        <View style = {styles.close}>
            <Button title="X" onPress={onClose} color= {COLORS.medium_gray}/>
         </View>
        
      </View>
      
        
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center" ,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: COLORS.off_white,
    borderRadius: 50,
    padding: 150,
    alignItems: 'center',
    elevation: 5,
   
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    marginBottom: 20,
  },
  close: {
  //  top: -300,
    bottom: 345,
    left: 145
  }
});

export default CustomModal;
