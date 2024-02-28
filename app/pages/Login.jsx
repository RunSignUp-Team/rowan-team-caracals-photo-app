import React from "react";
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import BasicTextInput  from '../../components/BasicTextInput';
import BasicButton from "../../components/buttons/BasicButton";
import { router } from "expo-router";

const Login = () => {

    const handleSubmit = () => {
        console.log('Name:', Username);
        console.log('Password:', Password);
      };

    const goToHomePage = () => {
        router.navigate('pages/Homepage');
      };

    return (
        <SafeAreaView style={styles.container}>
            <BasicTextInput name='Username' title='Username/Email'></BasicTextInput>
            <BasicTextInput name='Password' title='Password'></BasicTextInput>
            <BasicButton title='Submit' fontFamily={'SF-Pro-Text-Bold'} onPress={handleSubmit}></BasicButton>
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
    }
})
