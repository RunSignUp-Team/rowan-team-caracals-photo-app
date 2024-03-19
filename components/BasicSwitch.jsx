import React from "react";
import { Switch, View, StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export default function BasicSwitch() {

    const [isEnabled, setIsEnabled] = React.useState(false);
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={styles.container}>
        <Switch
        trackColor={{ false: COLORS.black, true: COLORS.RSU_pink }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBlockColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 15,
        padding: 40, 
    },
});



