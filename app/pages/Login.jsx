import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import BasicTextInput  from '../../components/BasicTextInput';
import BasicButton from "../../components/buttons/BasicButton";
import { router } from "expo-router";
import login from '../AuthContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async () => {
        try {
            await login(username, password);
        }
        catch (error) {
            console.error('Error:', error);
        }
        router.navigate('pages/Homepage');
    }

    // const goToHomePage = () => {
    //     router.navigate('pages/Homepage');
    //   };

    return (
        <SafeAreaView style={styles.container}>
            <BasicTextInput 
                title='Username/Email' 
                placeholder='Username or email' 
                setValue={setUsername} 
                secureTextEntry={false}>
            </BasicTextInput>
            <BasicTextInput 
                title='Password' 
                placeholder='Password' 
                setValue={setPassword} 
                secureTextEntry={true}>
            </BasicTextInput>
            <BasicButton 
                title='Submit' 
                fontFamily={'SF-Pro-Text-Bold'} 
                onPress={onSubmit}>
            </BasicButton>
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
