import React, {useState, useEffect, useRef} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import MutableCamButton from '../../components/buttons/MutableCamButton'
import { router } from 'expo-router';
import {Video} from 'expo-av';

const CameraPage = () => {
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [isRecording, setIsRecording] = useState(false);
    const [video, setVideo] = useState(undefined);
    const cameraRef = useRef(null);

    const goToHomePage = () => {
        router.navigate('pages/Homepage');
      };
    
    const goToVideoPage = () => {
        router.navigate('pages/VideoPage');
    };

    useEffect(() => {
        (async () => {
          const mediaLibraryStatus= await MediaLibrary.requestPermissionsAsync();
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          const audioStatus = await Camera.requestMicrophonePermissionsAsync();
          setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
          setHasCameraPermission(cameraStatus.status === 'granted');
          setHasAudioPermission(audioStatus.status === 'granted');
        })();
      }, [])

    const takePicture = async () => {
        if(cameraRef) {
            try{
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch(e) {
                console.log(e);
            }
        }
    }

    const saveImage = async () => {
        if(image) {
            try{
                await MediaLibrary.createAssetAsync(image);
                alert('Picture saved!')
                setImage(null);
            } catch(e) {
                console.log(e)
            }
        }
    }

    if(!hasCameraPermission) {
        return <Text>This feature needs permission to your camera to function. Please enable it in your phone's settings.</Text>
    }

    return(
        <View style = {styles.container}>
        {!image ?
            <Camera
                style={styles.camera}
                type={type}
                flashMode={flash}
                ref={cameraRef}>
            </Camera>
        :
        <Image source={{uri: image}} style={styles.camera}/>
        }
        <View>
            {image ? 
            <View style={styles.sideButtons}>
                <MutableCamButton title={"Re-take"} icon="arrow-redo" onPress={() => setImage(null)}/>
                <MutableCamButton title={"Save"} icon="checkmark" onPress={saveImage}/>
            </View>
            :
                <MutableCamButton title={'Take a picture'} icon="camera" onPress={takePicture}/>
                /* <MutableCamButton title={isRecording ? 'Stop recording' : 'Take a video'} icon="videocam" onPress={isRecording ? stopRecording : takeVideo}/> */
            }
        </View>
            <View style={styles.sideButtons}>
                <MutableCamButton title={'Home'} icon="home" onPress={goToHomePage}/>
                <MutableCamButton title={'Video'} icon="videocam" onPress={goToVideoPage}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingBottom: 20,
    },
    camera: {
      flex: 1,
      borderRadius: 20,
    },
    sideButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    },
  }); export default CameraPage
