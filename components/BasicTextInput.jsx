import React from "react";
import { TextInput, Text, SafeAreaView, StyleSheet } from 'react-native'
import { COLORS } from "../constants/Colors";

const BasicTextInput = ({title}) => {
    const [text, onChangeText] = React.useState();
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
    );
}
export default BasicTextInput

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      alignSelf: 'center',
      marginBottom: 30,
  },
  inputContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
  },
  title: {
      marginBottom: 10,
      fontFamily: 'SF-Pro-Text-Bold',
      fontSize: 16,
      color: COLORS.medium_gray
  },
  input: {
      height: 62,
      width: 360,
      borderWidth: 1,
      paddingHorizontal: 24,
      paddingVertical: 20,
      borderRadius: 15,
      borderColor: COLORS.black,
      fontSize: 16,
  },
});
