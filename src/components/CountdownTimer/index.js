import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { brandColors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: brandColors.yellow,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: brandColors.darkBlue
    }
})

export const CountdownTimer = ({time}) => {
    

    const secondsToMinutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60) 
    const secondsToSeconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Focus for next: {secondsToMinutes}:{secondsToSeconds}</Text>
        </View>
    )
}