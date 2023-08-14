import React from "react";
import { Text, StyleSheet, FlatList, View, Pressable } from "react-native";

export default function UserGoals({ inputGoals, onDeleteItem }) {
    return (
        <View style={styles.outputs}>
            <Text>Your goals:</Text>
            <FlatList
                data={inputGoals}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => onDeleteItem(index)}>
                        <View style={styles.goalSection}>
                            <Text style={styles.goalText}>{item.text}</Text>
                        </View>
                    </Pressable>

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
        padding: 10,
        borderRadius: 12,
        backgroundColor: 'blue'
    },
    goalText: {
        color: 'white',
        fontSize: 14
    }
})

