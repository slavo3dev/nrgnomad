import React from "react";
import {View,Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "black"
    }
})

export const CountdownTimer = ({time}) => {
    

    const secondsToMinutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60) 
    const secondsToSeconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Focus for next: {time}s</Text>
            <Text style={styles.text}>{secondsToMinutes}:{secondsToSeconds}</Text>
        </View>
    )
}