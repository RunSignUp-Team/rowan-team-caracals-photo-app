import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import * as Linking from 'expo-linking';
import * as AuthSession from 'expo-auth-session';

const AuthTest = () => {
    const [authorizationCode, setAuthorizationCode] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [authorizationState, setAuthorizationState] = useState(null);


 // Step 1: Generate the authorization URL
 const generateAuthorizationUrl = () => {
   const clientId = '1';
   const redirectUri = AuthSession.makeRedirectUri();
   const scope = encodeURIComponent('rsu_api_read rsu_api_write');
   const state = encodeURIComponent('1234abcd');
   const codeChallengeMethod = 'S256'; // or 'plain'
   const codeVerifier = '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk'; // generate a random code verifier


   const authorizationUrl = `https://test3.runsignup.com/Profile/OAuth2/RequestGrant?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&code_challenge_type=${codeChallengeMethod}&code_challenge=${codeVerifier}`;
   return authorizationUrl;
 };


 // Step 2: Open the authorization URL in the device's default web browser
 const handleOpenAuthorizationUrl = async () => {
   const url = generateAuthorizationUrl();
   await WebBrowser.openBrowserAsync(url);
//    const result = await WebBrowser.openAuthSessionAsync(url);
//    if (result.type === 'success') {
//      console.log(result);   
//  };}
 }

 // Step 3: Handle redirection back to the app
   useEffect(() => {
     const handleRedirect = async (event) => {
       if (event.url.startsWith('run-media-up://')) {
         const response = Linking.parse(event.url);
         const { queryParams } = response;
         if (queryParams && queryParams.code) {
           setAuthorizationCode(queryParams.code);
         }
       }
     };
      Linking.addEventListener('url', handleRedirect);
      return () => {
       Linking.removeEventListener('url', handleRedirect);
     };
   }, []);


//  Step 4: Exchange authorization code for access token
 useEffect(() => {
   const exchangeCodeForToken = async () => {
     console.log('authorizationCode:', authorizationCode)
     if (authorizationCode) {
       const tokenEndpoint = 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json';
       const clientId = '1';
       const clientSecret = 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=';
       const redirectUri = 'run-media-up://';
       const codeChallengeMethod = 'S256'; // or 'plain'
       const codeVerifier = '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk'; // same as used in step 1


       const params = {
         grant_type: 'authorization_code',
         client_id: clientId,
         client_secret: clientSecret,
         redirect_uri: redirectUri,
         code: authorizationCode,
         code_challenge_method: codeChallengeMethod,
         code_verifier: codeVerifier,
       };


       try {
         const response = await fetch(tokenEndpoint, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
           },
           body: new URLSearchParams(params).toString(),
         });
         console.log(new URLSearchParams(params).toString());
         const data = await response.json();
         setAccessToken(data.access_token);
         setRefreshToken(data.refresh_token);
       } catch (error) {
         console.error('Error exchanging code for token:', error);
       }
     }
   };


   exchangeCodeForToken();
 }, [authorizationCode]);


//  Step 5: Render button to open authorization URL
//  Render access token if available

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!accessToken && <Button title="Open Authorization URL" onPress={handleOpenAuthorizationUrl} />}
      {accessToken && <Text>Access Token: {accessToken}</Text>}
      <Text>Redirect URI: {AuthSession.makeRedirectUri()}</Text>
      {/* <Button title='please work' onPress={() =>  promptAsync()}/> */}
    </View>
  );
};
export default AuthTest;