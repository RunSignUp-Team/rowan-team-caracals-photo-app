import React, {useState, useEffect, useRef} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import MutableCamButton from '../../components/buttons/MutableCamButton'
import BasicButton from '../../components/buttons/BasicButton'
import { router } from 'expo-router';

const CameraPage = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    const goToHomePage = () => {
        router.navigate('pages/Homepage');
      };

    useEffect(() => {
        (async () => {
          MediaLibrary.requestPermissionsAsync();
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
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

    if(hasCameraPermission === false) {
        return <Text>No access to camera</Text>
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
            <View style= {{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
            }}>
                <MutableCamButton title={"Re-take"} icon="retweet" onPress={() => setImage(null)}/>
                <MutableCamButton title={"Save"} icon="check" onPress={saveImage}/>
            </View>
            :
            <MutableCamButton title={'Take a picture'} icon="camera" onPress={takePicture}/>
        }
        </View>
        <BasicButton title={'Home'} fontFamily={'SF-Pro-Text-Bold'} onPress={goToHomePage}></BasicButton>
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
    }
  });
  export default CameraPage
