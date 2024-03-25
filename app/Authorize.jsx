import React, {useEffect, useCallback} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { authorize } from "react-native-app-auth";

const config = {
    issuer: 'https://runsignup.com/oauth/authorize',
    clientId: '1',
    clientSecret: 'tgJhiHKdfPI8pSBUC2oZX4u+TYHjHrChyogBkcT7Zs8=',
    redirectUrl: 'run-media-up://',
    scopes: ['rsu_api_read', 'rsu_api_write'],
    additionalParameters: {
      code_challenge_method: 'S256',
      code_challenge: '6RhADn87rZBQCOWluQ_tAOO691oAW7eq13NhYXqZ3pk',
      response_type: 'code'
    },
}

async function result() {
  try {
    const authState = await authorize(config);
    console.log(authState);
  }
  catch (error) {
    console.log(error);
  }
}


const Authorize = () => {
  result();
  return (
    <View style={styles.container}>
      <Text>Authorize</Text>
      <Button title="Authorize" onPress={result} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default Authorize;