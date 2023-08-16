import React from "react";
import { Text, StyleSheet, FlatList, View, Pressable } from "react-native";

export default function UserGoals({ inputGoals, onDeleteItem }) {
    return (
        <View style={styles.outputs}>
            <Text>Your goals:</Text>
            <FlatList
                data={inputGoals}
                renderItem={({ item, index }) => (

                    <View style={styles.goalSection}>
                        <Pressable onPress={() => onDeleteItem(index)}
                            android_ripple={{ color: '#dddddd' }}
                            style={({ pressed }) => pressed && styles.pressedItem}> 
                            <Text style={styles.goalText}>{item.text}</Text>
                        </Pressable>
                    </View>


                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    outputs: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        marginTop: 10,
        paddingTop: 12
    },
    goalSection: {
        margin: 7,
        borderRadius: 12,
        backgroundColor: 'blue'
    },
    goalText: {
        padding: 10,
        color: 'white',
        fontSize: 14
    },
    pressedItem: {
        color: '#dddddd'
    }
})

