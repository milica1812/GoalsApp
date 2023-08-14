import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function UserInput({ handlerGoalInput, value, handlerButtonGoalPress }) {
    return (
        <View style={styles.userInputs}>
            <TextInput
                style={styles.inputs}
                onChangeText={handlerGoalInput}
                placeholder='Enter your goal...'
                value={value}
            />
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
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '70%',
        padding: 3,
    },
})