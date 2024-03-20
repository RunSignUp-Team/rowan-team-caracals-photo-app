import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import MutableCamButton from '../../components/buttons/MutableCamButton'
import { router } from 'expo-router';
import {Video} from 'expo-av';

const VideoPage = () => {
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isRecording, setIsRecording] = useState(false);
    const [video, setVideo] = useState(undefined);
    const cameraRef = useRef();

    const goToHomePage = () => {
        router.navigate('pages/Homepage');
      };

    const goToCameraPage = () => {
        router.navigate('pages/CameraPage');
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

    const recordVideo = async () => {
        setIsRecording(true);
        const options = {
            quality: "1080p",
            maxDuration: 30,
            mute: false
        };
        cameraRef.current.recordAsync(options).then((recordedVideo) => {
            setVideo(recordedVideo);
            setIsRecording(false);
        });
        console.log(data.uri);
    }

    const stopRecording = async () => {
        setIsRecording(false);
        cameraRef.current.stopRecording();
    }

    const discardVideo = async () => {
        setVideo(undefined);
        setIsRecording(false);
    }
    
    const saveVideo = async () => {
        try{
            await MediaLibrary.saveToLibraryAsync(video.uri);
            alert('Video saved!')
            setVideo(undefined);
        } catch(e) {
            console.log(e)
        }
    }

    if(!hasCameraPermission) {
        return <Text>This feature needs permission to your camera to function. Please enable it in your phone's settings.</Text>
    }

return(
    <View style = {styles.container}>
    {!video ?
        <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}>
        </Camera>
    :
    <Video
        style={styles.video}
        source={{uri: video.uri}}
        useNativeControls
        resizeMode='contain'
        isLooping
    />
    }
    <View>
    <TouchableOpacity>
                    <View style={styles.sideButtons}>
                        <Text style={styles.otherPage} onPress={goToCameraPage}>PHOTO</Text>
                        <Text style={styles.currentPage}>VIDEO</Text>
                    </View>
                </TouchableOpacity>
        {video ? 
        <View style={styles.sideButtons}>
            <MutableCamButton title={"Discard"} icon="close" onPress={discardVideo}/>
            <MutableCamButton title={"Save"} icon="checkmark" onPress={saveVideo}/>
        </View>
        :
        <View>
            <MutableCamButton title={isRecording ? 'Stop recording' : 'Start recording'} icon="videocam" onPress={isRecording ? stopRecording : recordVideo}/>
        </View>
        }
    </View>
        <MutableCamButton title={'Home'} icon="home" onPress={goToHomePage}/>
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
        video: {
            flex: 1,
            alignSelf: 'stretch',
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
      }); export default VideoPage
