import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import * as Linking from 'expo-linking';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();
const REDIRECT_URI = AuthSession.makeRedirectUri();
const CLIENT_ID = '1';
const CLIENT_SECRET = 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=';
// const CODE_CHALLENGE = 'zf30Cs0LaINkkPH-9S3KO_QCkePE9E9tp2gBzLfqRwA';
// const CODE_VERIFIER = '2cF_l9RECAiP8gBSa6KUabn31PrXrC8YLWqu5RC-dvU';
// const AUTH_URL = 'https://test3.runsignup.com/Profile/OAuth2/RequestGrant'; 
// const TOKEN_URL = 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json';

const Authpage = () => {
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
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
  
  useEffect(() => { if (response) {
    if (response.error) {
      console.error('Error:', response.params.error_description || response.error);
    return;
    };
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(request.url, 'url');
      // console.log(request.codeChallenge, 'codeChallenge');
      // console.log(request.codeVerifier, 'codeVerifier');
      // console.log(request, 'request');
      // console.log();
      request.clientSecret = CLIENT_SECRET;
      setAuthCode(code);
      fetchAccessToken();
    }}}, [response]);

    // async function testing() {
    //   //   const test = await request.getAuthRequestConfigAsync();
    //   //   console.log(request);
    //   // }    
      
    //   // testing();    

const fetchAccessToken = async () => {
  try {
    const tokenReponse = await AuthSession.exchangeCodeAsync({
      code: response.params.code,
      redirectUri: request.redirectUri,
      clientSecret: CLIENT_SECRET,
  }, discovery);
  console.log(tokenReponse);
  console.log(request);
  }
  catch (error) {
    console.error('Error exchanging code for token:', error);
    console.log(error.params);
  }

}
    //       grant_type: 'authorization_code',
    //       client_id: request.clientId,
    //       client_secret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
    //       redirect_uri: AuthSession.makeRedirectUri(),
    //       code: response.params.code,
    //       code_verifier: request.codeVerifier? request.codeVerifier : '2cF_l9RECAiP8gBSa6KUabn31PrXrC8YLWqu5RC-dvU',
    //       code_challenge_method: request.codeChallengeMethod? request.codeChallengeMethod : 'S256',



    // const fetchAccessToken = async () => {
    //   try {
    //     // const tokenResponse = await AuthSession.exchangeCodeAsync({
    //     //   code: response.params.code,
    //     //   redirectUri: AuthSession.makeRedirectUri(),
    //     //   clientId: request.clientId,
    //     //   clientSecret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
    //     //   extraParams: {
    //     //     code_challenge_method: request.codeChallengeMethod? request.codeChallengeMethod : 'S256',
    //     //     code_verifier: request.codeVerifier? request.codeVerifier : '2cF_l9RECAiP8gBSa6KUabn31PrXrC8YLWqu5RC-dvU',
    //     //   }
    //     // }, discovery);
    //     const params = {
    //       grant_type: 'authorization_code',
    //       client_id: request.clientId,
    //       client_secret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
    //       redirect_uri: AuthSession.makeRedirectUri(),
    //       code: response.params.code,
    //       code_verifier: request.codeVerifier? request.codeVerifier : '2cF_l9RECAiP8gBSa6KUabn31PrXrC8YLWqu5RC-dvU',
    //       code_challenge_method: request.codeChallengeMethod? request.codeChallengeMethod : 'S256',
    //     }
        
    //     const tokenResponse = await fetch('https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json', 
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //         body: new URLSearchParams(params).toString(),
    //       });
    //       console.log(new URLSearchParams(params).toString());
    //       const data = await tokenResponse.json();
    //       console.log(data);
    //       setAccessToken(data.access_token);
    //       setRefreshToken(data.refresh_token);
    //       console.log(accessToken);
    //     }
    //       catch (error) {
    //         console.log(error.params);
    //         console.log(error.info);
    //         console.error('Error exchanging code for token:', error);
    //       }
    //     }; 





    //   if (response.params.code) {

    //     const tokenEndpoint = 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json';
    //     const clientId = '1';
    //     const clientSecret = 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=';
    //     const redirectUri = 'run-media-up://';
    //     const codeChallengeMethod = 'S256'; // or 'plain'
    //     const codeVerifier = '2cF_l9RECAiP8gBSa6KUabn31PrXrC8YLWqu5RC-dvU'; // same as used in step 1
 
 
    //     const params = {
    //       grant_type: 'authorization_code',
    //       client_id: clientId,
    //       client_secret: clientSecret,
    //       redirect_uri: AuthSession.makeRedirectUri(),
    //       code: response.params.code,
    //       code_challenge_method: codeChallengeMethod,
    //       code_verifier: codeVerifier,
    //     };
 
 
    //     try {
    //       const response = await fetch('https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: new URLSearchParams(params).toString(),
    //       });
    //       console.log(new URLSearchParams(params).toString());
    //       const data = await response.json();
    //       console.log(data);
    //       setAccessToken(data.access_token);
    //       setRefreshToken(data.refresh_token);
    //       console.log(accessToken);
    //   //  try {
    //   // // const tokenResponse = await AuthSession.exchangeCodeAsync({
    //   // //   code: response.params.code,
    //   // //   redirectUri: AuthSession.makeRedirectUri(),
    //   // //   clientId: '1',
    //   // //   clientSecret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
    //   // //   extraParams: {
    //   // //     code_challenge_method: 'S256',
    //   // //     code_verifier: '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk',
    //   // //   }}, discovery); }


    //   //   catch (error) {
    //   //     // console.log(error.params);
    //   //     // console.error('Error exchanging code for token:', error);
    //   //   }
    //   // }; 
    //   }
    //   catch (error) {
    //     console.error('Error exchanging code for token:', error);
    //   }
    // }
  // };


  //   const exchangeCodeForToken = async () => {
  //     console.log('authorizationCode:', authCode);
  //     if (authCode) {
  //       const tokenEndpoint = 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json';
  //       const clientId = '1';
  //       const clientSecret = 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=';
  //       const redirectUri = 'run-media-up://';
  //       const codeChallengeMethod = 'S256'; // or 'plain'
  //       const codeVerifier = '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk'; // same as used in step 1
 
 
  //       const params = {
  //         grant_type: 'authorization_code',
  //         client_id: '1',
  //         client_secret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
  //         redirect_uri: 'run-media-up://',
  //         code: authCode,
  //         code_challenge_method: 'S256',
  //         code_verifier: '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk',
  //       };
 
  //       try {
  //         const response = await fetch(tokenEndpoint, {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded',
  //           },
  //           body: new URLSearchParams(params).toString(),
  //         });
  //         console.log(new URLSearchParams(params).toString());
  //         const data = await response.json();
  //         console.log(data);
  //         setAccessToken(data.access_token);
  //         setRefreshToken(data.refresh_token);
  //       } catch (error) {
  //         console.error('Error exchanging code for token:', error);
  //       }
  //     }
  // };

  //     const { code } = response.params;
  //     // const exchangeFn = async (exchangeTokenReq) => {
  //       // try {
  //       //   const exchangeResponse = await AuthSession.exchangeCodeAsync(
  //       //     exchangeTokenReq, discovery);
  //       //   console.log(exchangeResponse);
  //       // } catch (error) {
  //       //   console.error('what', error);
  //       // }

  //      const exResponse = await fetch(TOKEN_URL, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         body: new URLSearchParams(params).toString(),
  //       });
  //       console.log(new URLSearchParams(params).toString());
  //       const data = await response.json();
  //       setAccessToken(data.access_token);
  //       setRefreshToken(data.refresh_token);
  //     } catch (error) {
  //       console.error('Error exchanging code for token:', error);
  //     }

  //   }
  //   exchangeFn({
  //     code: code,
  //     redirectUri: REDIRECT_URI,
  //     clientId: CLIENT_ID,
  //     clientSecret: CLIENT_SECRET,
  //     extraParams: {
  //       grant_type: 'authorization_code',
  //       code_challenge_method: CODE_CHALLENGE_TYPE,
  //       code_verifier: CODE_CHALLENGE,
  //     }
  //   });

  // }}}, [discovery, request, response]);


  // grant_type: 'authorization_code',
  // client_id: CLIENT_ID,
  // client_secret: CLIENT_SECRET,
  // redirect_uri: REDIRECT_URI,
  // code: response.params.code,
  // code_verifier: CODE_CHALLENGE,
  // code_challenge_method: CODE_CHALLENGE_TYPE,

  // useEffect(() => {
  //   const exchangeCodeForToken = async () => {
  //     if (authCode) {
  //       try {
  //         const tokenResponse = await AuthSession.exchangeCodeAsync({
  //           code: authCode,
  //           redirectUri: REDIRECT_URI,
  //           clientId: CLIENT_ID,
  //           clientSecret: CLIENT_SECRET,
  //           extraParams: {
  //             grant_type: 'authorization_code',
  //             code_challenge_method: CODE_CHALLENGE_TYPE,
  //             code_verifier: CODE_CHALLENGE,
  //           }
  //         }, discovery);
          
  //         // Update accessToken state with the received token
  //         setAccessToken(tokenResponse.accessToken);
  //       } catch (error) {
  //         console.log(error.params);
  //         console.error('Error exchanging code for token:', error);
  //       }
  //     }
  //   }; 
    
  //   exchangeCodeForToken();
  // }, [authCode]);


  // useEffect(() => { 
  //   }   
  // });



  // useEffect(() => { if (authCode) {
  //   fetch(TOKEN_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: new URLSearchParams({
  //       grant_type: 'authorization_code',
  //       client_id: CLIENT_ID,
  //       client_secret: CLIENT_SECRET,
  //       redirect_uri: REDIRECT_URI,
  //       code: authCode,
  //       code_challenge_method: 'S256',
  //       code_verifier: CODE_CHALLENGE,
  //     }),
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(response, 'response');
  //     console.log(data);
  //     setAccessToken(data.access_token);
  //   });
  // }});



  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* {!accessToken && <Button title="Open Authorization URL" onPress={handleOpenAuthorizationUrl} />} */}
      {accessToken && <Text>Access Token: {accessToken}</Text>}
      <Text>Redirect URI: {AuthSession.makeRedirectUri()}</Text>
      <Button title='please work' onPress={() =>  promptAsync()}/>
    </View>
  );
};
export default Authpage;



    // const response = await AuthSession.startAsync({ authUrl: authURL });
    
    // const response = await WebBrowser.openAuthSessionAsync(authURL, redirectUri);
    // if (response.type === 'success') {
    // console.lo

  // const [accessToken, setAccessToken] = useState(null);
  // const login = async () => {
    




    
  //   const params = {
  //     response_type: 'code',
  //     client_id: '1',
  //     redirect_uri: redirectUri,
  //     scope: 'rsu-api-read rsu-api-write',
  //     state: '123abc',
  //     code_challenge_type: 'S256',
  //     code_challenge: '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk'
  //   };
  //   const authURL = 'https://test3.runsignup.com/Profile/OAuth2/RequestGrant?' + new URLSearchParams(params);
  //   // const response = await AuthSession.startAsync({ authUrl: authURL });
    
  //   const response = await WebBrowser.openAuthSessionAsync(authURL, redirectUri);
  //   if (response.type === 'success') {
  //   console.lo


  // const [accessToken, setAccessToken] = useState(null);
  // const discovery = {
  //   authorizationEndpoint: 'https://test3.runsignup.com/Profile/OAuth2/RequestGrant',
  //   tokenEndpoint: 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json',
  // };
  // const [request, response, promptAsync] = AuthSession.useAuthRequest({
  //   clientId: clientID,
  //   clientSecret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
  //   codeChallenge: '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk',
  //   codeChallengeMethod: 'S256',
  //   responseType: 'code',
  //   state: '123abc',
  //   scopes: ['rsu-api-read rsu-api-write'],
  //   redirectUri: redirectUri,
  // }, discovery);

  // useEffect(() => { if (response?.type === 'success') {
  //   const { code } = response.params;
  //   console.log(code);
  // }
  // }, [response]);
