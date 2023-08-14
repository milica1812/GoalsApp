import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

export default function UserGoals({inputGoals}) {
    return (
        <View style={styles.outputs}>
            <Text>Your goals:</Text>
            <FlatList
                data={inputGoals}
                renderItem={(data) =>
                    <View style={styles.goalSection}>
                        <Text style={styles.goalText}>{data.item}</Text>
                    </View>
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    outputs: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        marginTop: 10,
        flex: 10,
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

