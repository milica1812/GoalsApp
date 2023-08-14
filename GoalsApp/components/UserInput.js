import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function UserInput({handlerGoalInput, handlerButtonGoalPress}) {
    return (
        <View style={styles.userInputs}>
            <TextInput style={styles.inputs} onChangeText={handlerGoalInput} placeholder='Enter your goal...' />
            <Button title='Add goal' onPress={handlerButtonGoalPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    userInputs: {
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '70%',
        padding: 3,
    },
})