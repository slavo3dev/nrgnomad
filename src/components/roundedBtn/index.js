import React  from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import { brandColors } from '../../utils/colors';



export function RoundedBtn({
    style = {},
    textStyle = {},
    size = 126,
    ...props
}) {
  
  return (
     <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: brandColors.white,
      borderWidth: 2,
    },
    text: { color: brandColors.white, fontSize: 18 },
  });
