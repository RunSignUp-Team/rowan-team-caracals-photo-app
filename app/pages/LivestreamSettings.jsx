import React from 'react';
import BasicModal from '../../components/BasicModal';
import BasicOptionButton from '../../components/BasicOptionButton';
import { Button, View, StyleSheet, Text } from 'react-native';
import SettingsPage from '../../components/SettingsPage';

const LivestreamSettings = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <SettingsPage modalVisible={modalVisible} setModalVisible={setModalVisible}></SettingsPage>
    </View>
  );
}

export default LivestreamSettings;

const styles = StyleSheet.create({

});