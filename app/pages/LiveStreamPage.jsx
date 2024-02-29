import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { router } from "expo-router";
import SmallBasicButton from "../../components/buttons/SmallBasicButton";

const Login = () => {

    const goToHomePage = () => {
        router.navigate('pages/Homepage');
      };


    return (
        <SafeAreaView style={styles.container}>
            
            <View style = {styles.home_button}>
                <SmallBasicButton title={'Home'} fontFamily={'SF-Pro-Text-Bold'} onPress={goToHomePage}></SmallBasicButton>
            </View>
            <Text style={{alignContent: 'center', justifyContent: 'center'}}>Livestream Page</Text>

        </SafeAreaView>
    );
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    home_button: {
        flex: 1,
        position: 'absolute',
        left: 20, 
        top: -30
    },
})
