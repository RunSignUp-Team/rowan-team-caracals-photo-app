import React from "react";
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import BasicTextInput  from '../components/BasicTextInput';
import BasicButton from "../components/buttons/BasicButton/BasicButton";

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
        <BasicTextInput title='Username/Email'></BasicTextInput>
        <BasicTextInput title='Password'></BasicTextInput>
        <BasicButton title='Submit' fontFamily={'SF-Pro-Text-Bold'}></BasicButton>
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
