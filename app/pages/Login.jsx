import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import BasicTextInput  from '../../components/BasicTextInput';
import BasicButton from "../../components/buttons/BasicButton";
import { router } from "expo-router";
import login from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const onSubmit = async () => {
        try {
            const user = await login(username, password);
            await AsyncStorage.setItem('firstName', user);
            setIsLoggedIn(true); 
        }
        catch (error) {
            console.error('Error:', error);
            setLoginError("Incorrect Username or Password")
        }
       
    }

    useEffect(() => {
        if (isLoggedIn) {
            router.navigate('pages/Homepage');
        }
    }, [isLoggedIn]); 

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
