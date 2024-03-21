import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Button, ScrollView, FlatList } from 'react-native'
import SmallBasicButton from "../../components/buttons/SmallBasicButton";
import StatusButton from "../../components/buttons/StatusButton";
import SettingsButton from "../../components/buttons/SettingsButton";
import GalleryPageButton from "../../components/buttons/GalleryButton";
import LiveStreamButton from "../../components/buttons/LiveStreamButton";
import CameraPageButton from '../../components/buttons/CameraButton';
import SettingsModal from '../../components/SettingsPage'
import StatusModal from '../../components/StatusPage'
import BasicTextInput  from '../../components/BasicTextInput';
import SelectDropdown from "react-native-select-dropdown";
import ImageGallery from "react-image-gallery";
import { COLORS } from "../../constants/Colors";
import { router } from "expo-router";
import PhotoButton from "../../components/buttons/PhotoButton";
import TestPhoto from "../../assets/images/1.png";
const goToHomePage = () => {
    router.navigate('pages/Homepage');
    
  };

/*Some dummy information for now*/
const albums = ["8/13/1942", "5/7/1996", "8/24/2003"]

const photos = {
	"photos": [
		{
			"photo_id": 1,
			"album_id": 21,
			"race_event_days_id": 6568,
			"bibs": [
				1179
			],
			"original": {
				"image_url": "https:\/\/rsu-photos-v2-v2prod.s3.amazonaws.com\/customOriginal_v3\/race_21_6568_d375c60e-ba56-49b5-8812-82b597eef456.jpg",
				"height": 1067,
				"width": 1600
			},
			"thumbnail": {
				"image_url": "https:\/\/rl13photo5788d40734058.s3.amazonaws.com\/thumbs_v2\/race_21_6568_d375c60e-ba56-49b5-8812-82b597eef456.jpg",
				"height": 200,
				"width": 300
			},
			"large": {
				"image_url": "https:\/\/rsu-photos-v2-v2prod.s3.amazonaws.com\/large_watermarked_v3\/race_21_6568_d375c60e-ba56-49b5-8812-82b597eef456.jpg",
				"height": 600,
				"width": 900
			},
			"uploaded_filename": "myPhoto.jpg",
			"uploaded_ts": 1593547220
		},
		{
			"photo_id": 41,
			"album_id": 21,
			"race_event_days_id": 6827,
			"bibs": [
				1145,
				1308,
				1425
			],
			"original": {
				"image_url": "https:\/\/rl13photo5788d40734058.s3.amazonaws.com\/original_v2\/race_21_6568_d35026d1-3ad0-4e77-a374-ae95c0582c25.jpg",
				"height": 1200,
				"width": 1062
			},
			"thumbnail": {
				"image_url": "https:\/\/rl13photo5788d40734058.s3.amazonaws.com\/thumbs_v2\/race_21_6568_d35026d1-3ad0-4e77-a374-ae95c0582c25.jpg",
				"height": 300,
				"width": 266
			},
			"large": {
				"image_url": "https:\/\/rsu-photos-v2-v2prod.s3.amazonaws.com\/large_watermarked_v3\/race_21_6568_d35026d1-3ad0-4e77-a374-ae95c0582c25.jpg",
				"height": 900,
				"width": 797
			},
			"uploaded_filename": "myPhoto2.jpg",
			"uploaded_ts": 1593547222
		}
	]
}

{/*const renderPhoto = ({}) => {
    return (
    <View style={styles.photos}>
        <PhotoButton 
        photo={TestPhoto}
        onPress={() => setSelectedId(photos.photo.id)}
        ></PhotoButton>
        <Text>{photos.photos.photo_id}</Text>
    </View>
    )}*/}
const Album = () => {
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [statusModalVisible, setStatusModalVisible] = useState(false)
    const [selectedId, setSelectedId] = useState();
    return(
        <View style = {styles.container}>
            <View style = {styles.home_button}>
                <SmallBasicButton title={'Home'} fontFamily={'SF-Pro-Text-Bold'} onPress={goToHomePage}></SmallBasicButton>
            </View>
            <View style = {styles.settings_button}>
                <SettingsButton onPress={() => setSettingsModalVisible(true)}/>
            </View>
            
            <SettingsModal
            modalVisible={settingsModalVisible}
            setModalVisible={setSettingsModalVisible}>
     </SettingsModal>
     
            <StatusButton
                size={38}
                color="black"
                style={styles.statusButton}
                onPress={() => setStatusModalVisible(true)}/>    
        <StatusModal
            modalVisible={statusModalVisible}
            setModalVisible={setStatusModalVisible}>
         </StatusModal>
            <View style={styles.line} />

        {/*Written by Ahmed*/}

        <ScrollView style={styles.scrollView}>
            <PhotoButton style = {styles.photos}
                defaultButtonText = 'Photo (photo id)'
                photo={require('../../assets/images/1.png')}
                name = "Test 1"
            />
            <PhotoButton style = {styles.photos}
                defaultButtonText = 'Photo (photo id)'
                photo={require('../../assets/images/TestPhoto2.jpeg')}
                name = "Test 2"
            />
            <PhotoButton style = {styles.photos}
                defaultButtonText = 'Photo (photo id)'
                photo={require('../../assets/images/TestPhoto3.jpeg')}
                name = "Test 3"
            />
        </ScrollView>
        {/*<FlatList>
            numColumns={1}
            data={photos}
            renderItem={renderPhoto}
            keyExtractor={photos => photos.photo_id}
            extraData={selectedId}
    </FlatList>*/}

       {/*<View style = {styles.photos}>
            <PhotoButton
                defaultButtonText = 'Photo (photo id)'
                photo={TestPhoto}
                onSelect={(selectedItem, index) => {
                    return (
                        <ImageViewer
                            imageUrls={TestPhoto}
                            enableSwipeDown={true}
                            onSwipeDown={() => console.log("Swiped down!")}
                        />
                    );
                }}
            />
            </View>/*}


        {/*Fill in with actual info later */}
            <View style={styles.bottomLayer}>

                <View style={styles.galleryButton} />
                <GalleryPageButton
                     size={42}
                        color="black"
                     style={styles.galleryButton} />

                <CameraPageButton
                    size={49}
                    color="black"
                    style = {styles.cameraButton} />

                <LiveStreamButton
                    size={46}
                    color="black"
                    style = {styles.liveButton} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.off_white,
        marginBottom: -34
    },
    home_button: {
        flex: 1,
        position: 'absolute',
        left: 20, 
        top: -30
    },
 
    settings_button: {
        position: 'absolute', 
        top: -14, 
        right: 10, 
    },
    statusButton: {
        position: 'absolute',
        top: 19,
        right: 65,
        padding: 2,
        borderRadius: 1
    },
    line: {
        position: 'absolute',
        top: 77,
        width: '100%',
        height: 1.2,
        backgroundColor: 'black',
    },
    photos: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    bottomLayer: {
        flex: 1,
         position: 'absolute',
        height: 80, 
         backgroundColor: COLORS.RSU_pink,
        borderColor: COLORS.black,
        borderStyle: 'solid',
        borderTopWidth: 1,
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
        flexDirection: 'row',
        bottom: -1,
     },
    galleryButton: {
        position: 'absolute',
        bottom: 20,
        left: 60,
    },
    cameraButton: {
        position: 'absolute', 
        bottom: 18,
        alignContent: 'center'
    },
    liveButton: {
        position: 'absolute',
        bottom: 18,
        right: 60,
    },
    scrollView: {
        position: 'relative',
        marginVertical: 80,
        borderWidth: 1, 
        borderColor: COLORS.black,
        bottom: 0,
        width: '100%',

    },
});
export default Album
