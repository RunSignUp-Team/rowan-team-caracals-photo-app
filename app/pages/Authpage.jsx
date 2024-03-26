import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import * as Linking from 'expo-linking';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BasicButton from '../../components/buttons/BasicButton';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { COLORS } from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

WebBrowser.maybeCompleteAuthSession();
const REDIRECT_URI = AuthSession.makeRedirectUri();
// Replace with actual values if needed (should be in .env)
const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.EXPO_PUBLIC_CLIENT_SECRET;
// console.log(CLIENT_ID);
// console.log(CLIENT_SECRET);
// Test Values
// const CODE_CHALLENGE = 'zf30Cs0LaINkkPH-9S3KO_QCkePE9E9tp2gBzLfqRwA';
// const CODE_VERIFIER = '2cF_l9RECAiP8gBSa6KUabn31PrXrC8YLWqu5RC-dvU';
// const AUTH_URL = 'https://test3.runsignup.com/Profile/OAuth2/RequestGrant'; 
// const TOKEN_URL = 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json';

const Authpage = () => {
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const logoImage = require('../../assets/brand/logo-circle.png');

  const [loaded] = useFonts({
    'SF-Pro-Text-Light': require('../../assets/fonts/SF-Pro-Text-Light.otf'),
    'SF-Pro-Text-Bold': require('../../assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Light': require('../../assets/fonts/SF-Pro-Text-Light.otf'),
  });
  if (!loaded) {
    return null;
  }

  const discovery = {
    authorizationEndpoint: 'https://test3.runsignup.com/Profile/OAuth2/RequestGrant',
    tokenEndpoint: 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json',
  };

  const [request, response, promptAsync] = AuthSession.useAuthRequest({
    responseType: 'code',
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    codeChallengeMethod: 'S256',
    scopes: ['rsu-api-read', 'rsu-api-write'],
  }, discovery);

  const fetchAccessToken = async () => {
    try {
      const params = {
        grant_type: 'authorization_code',
        client_id: request.clientId,
        client_secret: CLIENT_SECRET,
        redirect_uri: AuthSession.makeRedirectUri(),
        code: response.params.code,
        code_verifier: request.codeVerifier,
        code_challenge_method: request.codeChallengeMethod,
      }

      const tokenResponse = await fetch('https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(params).toString(),
        });
      
      const data = await tokenResponse.json();

      // Store tokens in AsyncStorage
      await AsyncStorage.setItem('accessToken', data.access_token);
      await AsyncStorage.setItem('refreshToken', data.refresh_token);

      // Set state variables with tokens
      setAccessToken(data.access_token);
      setRefreshToken(data.refresh_token);
      if (accessToken) {
        console.log(accessToken);
        router.navigate('pages/Homepage');
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };

  useEffect(() => {
    const loadTokens = async () => {
      try {
        // Load tokens from AsyncStorage
        const accessToken = await AsyncStorage.getItem('accessToken');
        const refreshToken = await AsyncStorage.getItem('refreshToken');

        // Set state variables with tokens
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
      } catch (error) {
        console.error('Error loading tokens:', error);
      }
    };

    // Call the loadTokens function when component mounts
    loadTokens();
  },);

  useEffect(() => {
    if (response) {
      if (response.error) {
        console.error('Error:', response.params.error_description || response.error);
        return;
      };
      if (response?.type === 'success') {
        const { code } = response.params;
        console.log(request.url);
        request.clientSecret = CLIENT_SECRET;
        setAuthCode(code);
        fetchAccessToken();
      }
    }
  }, [response]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
      <LinearGradient 
        colors={['rgba(239, 79, 157, .9)', 'rgba(239, 79, 157, 0)', 'transparent']} //
        start={[.9, 0]}
        end={[.02, 0]}
        style={styles.circle1} />
      <LinearGradient 
        colors={['rgba(239, 79, 157, .9)', 'rgba(239, 79, 157, 0)', 'transparent']} //
        start={[.9, 0]} 
        end={[0.02, 0]}
        style={styles.circle2} />
      </View>
      <Image style={styles.logo} source={logoImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Run{'\n'}MediaUp</Text>
        <Text style={styles.blurb}>A RunSignUp© app{'\n'}for managing your {'\n'}media.</Text>
      </View>
      <View style={styles.button}>
      <BasicButton title= "Continue with RunSignUp" onPress={() => promptAsync()} />
      </View>
    </SafeAreaView>
  );
};


// OG Starting page,
// once logged in, move on to homepage


export default Authpage;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.off_white,
  },
  circle1: {
    position: 'absolute',
    width: 433,
    height: 433,
    borderRadius: 250,
    bottom: -200,
    left: -200,
    transform: [{rotate: '-90deg'}],
  },
  circle2 : {
    position: 'absolute',
    width: 449,
    height: 449,
    borderRadius: 250,
    bottom: -300,
    left: -29,
    transform: [{rotate: '-90deg'}],
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    // borderWidth: 5, 
    // borderColor: 'black',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 20,
    // borderWidth: 5,
    alignSelf: 'stretch',
    // borderColor: 'red',
  },
  title: {
    padding: 5,
    fontSize: 40,
    lineHeight: 35,
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Bold',
    // borderColor: 'black',
    // borderWidth: 5,
  },
  textContainer: {
    marginTop: -180,
    // borderWidth: 5,
    // borderColor: 'green',
  },
  blurb: {
    padding: 5,
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Light',
    // borderColor: 'orange',
    // borderWidth: 5,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 10,
    alignSelf: 'center',
    // borderColor: 'blue',
    // borderWidth: 5,
  }
});