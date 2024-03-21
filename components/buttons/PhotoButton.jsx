import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const viewPhoto = () => (
   {/* <PhotoProvider>
      <PhotoView src={require('../../assets/images/1.png')}>
        <img src={require('../../assets/images/1.png')} alt="" />
      </PhotoView>
    </PhotoProvider>*/ }
)

 
const PhotoButton = (photo, name) => (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.photo} source={photo} size={52} onPress={viewPhoto} />
                 {/*<Image style={styles.photo} source={photo} size={52} onPress={viewPhoto} />
                 <Text>Photo {name}</Text>*/}
    </TouchableOpacity>

)

const styles = StyleSheet.create({ 
    container: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 25,
        borderColor: 'orange',
        borderWidth: 5,
        alignItems: 'center',
    },
    photo: {
        borderColor: 'green',
        borderWidth: 5,
        width: 300, 
        height: 300,
    },
    text: {
        borderColor: 'green',
        borderWidth: 5,
    }
});
export default PhotoButton