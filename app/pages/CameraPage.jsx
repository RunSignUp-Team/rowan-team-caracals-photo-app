import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import MutableCamButton from '../../components/buttons/MutableCamButton'
import { router } from 'expo-router';

const CameraPage = () => {
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [quickCam, setQuickCam] = useState(false);
    const cameraRef = useRef(null);

    const goToHomePage = () => {
        router.navigate('pages/Homepage');
      };
    
    const goToVideoPage = () => {
        router.navigate('pages/VideoPage');
    };

    useEffect(() => {
        (async () => {
          const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
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
                if(!hasMediaLibraryPermission) {
                    alert("Permission to save photos is currently not granted. Please enable the option in your phone's settings")
                } else {
                    if(quickCam) {
                        MediaLibrary.createAssetAsync(data.uri);
                    } else {
                        setImage(data.uri);
                    }
                }
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

    const quickCamSettings = () => {
        if(quickCam) {
            setQuickCam(false);
        } else {
            setQuickCam(true);
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
                <TouchableOpacity>
                    <View style={styles.sideButtons}>
                        <Text style={styles.currentPage}>PHOTO</Text>
                        <Text style={styles.otherPage} onPress={goToVideoPage}>VIDEO</Text>
                    </View>
                </TouchableOpacity>
            {image ? 
                <View style={styles.sideButtons}>
                    <MutableCamButton title={"Re-take"} icon="arrow-redo" onPress={() => setImage(null)}/>
                    <MutableCamButton title={"Save"} icon="checkmark" onPress={saveImage}/>
                </View>
            :
                <View style={styles.sideButtons}>
                    <MutableCamButton title={'Take a picture'} icon="camera" onPress={takePicture}/>
                    <MutableCamButton title={'Quick Camera'} icon={quickCam ? "flash" : "flash-outline"} onPress={quickCamSettings}/>
                </View>
            }
            <MutableCamButton title={'Home'} icon="home" onPress={goToHomePage}/>
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
    currentPage: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ff0000',
    },
    otherPage: {
        fontWeight: 'bold',
        fontSize: 16,
    },
  }); export default CameraPage
