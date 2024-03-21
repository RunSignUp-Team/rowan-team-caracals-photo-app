import React from "react";
import { View, StyleSheet } from 'react-native'
import { COLORS } from "../constants/Colors";
import GalleryPageButton from "./buttons/GalleryButton";
import CameraPageButton from "./buttons/CameraButton";
import LiveStreamButton from "../components/buttons/LiveStreamButton";

const BottomLayer = () => {
    return (
        <View style={styles.bottomLayer}>
            <GalleryPageButton
                size={42}
                color="#020040"
                style={styles.galleryButton} />

            <CameraPageButton
                size={49}
                color="#020040"
                style = {styles.cameraButton} />

            <LiveStreamButton
                size={46}
                color="#020040"
                style = {styles.liveButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    bottomLayer: {
        flex: 1,
        position: 'absolute',
        height: 40, 
        backgroundColor: '#F4CBC6', // '#FF8BC3', '#FF99CA', '#FCB2D5', '#F4CBC6', '#FFDAB9',
        borderColor: COLORS.black,
        borderStyle: 'solid',
        borderTopWidth: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        bottom: 0,
        // marginBottom: 5,
    },
    galleryButton: {
        alignItems: "center",
        // borderBlockColor: 'black',
        // borderWidth: 1,
        marginTop: 10,
    },
    cameraButton: {
        alignItems: "center",
        // borderBlockColor: 'black',
        // borderWidth: 1,
        marginTop: 10,
    },
    liveButton: {
        alignItems: "center",
        // borderBlockColor: 'black',
        // borderWidth: 1,
        marginTop: 5,
    }
});

export default BottomLayer;