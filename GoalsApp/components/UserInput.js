import React from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

export default function UserInput({ handlerGoalInput, value, onCancel, handlerButtonGoalPress, visible }) {
    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.userInputs}>
                <TextInput
                    style={styles.inputs}
                    onChangeText={handlerGoalInput}
                    placeholder='Enter your goal...'
                    value={value}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title='Add goal' onPress={() => handlerButtonGoalPress()} />
                    </View>
                    <View style={styles.btn}>
                        <Button title='Cancel' onPress={() => onCancel()}/>

                    </View>
                </View>



            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    userInputs: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '70%',
        padding: 3,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 7
    },
    btn: {
        width: 100,
        marginHorizontal: 7,
    }
})