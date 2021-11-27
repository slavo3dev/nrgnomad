import React  from 'react';
import {Text,View} from 'react-native';
import {TextInput} from 'react-native-paper'
import {RoundedBtn} from '../../components/roundedBtn';
import styles from "./focus.styles"


export function Focus({ addFocusTask }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What habit are you willing to practice?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          onSubmitEditing={(nativeEvent) => { addFocusTask(nativeEvent.text)}
          }  />
        <View style={styles.btnContainer}>
          <RoundedBtn title={"+"} size={50}  />
        </View>
      </View>
    </View>
  )}


