import React, {useState}  from 'react';
import {Text,View} from 'react-native';
import {TextInput} from 'react-native-paper'
import {RoundedBtn} from '../../components/roundedBtn';
import styles from "./focus.styles"


export function Focus({ addFocus }) {

  const [storeTextInput,setStoreTextInput] = useState(null)
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What habit are you willing to practice?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          onSubmitEditing={({nativeEvent}) => {
            console.log("Native Event", nativeEvent)
            setStoreTextInput(nativeEvent.text);
          }
          }  />
        <View style={styles.btnContainer}>
          <RoundedBtn title={"+"} size={50} onPress={() => {addFocus(storeTextInput)}} />
          {console.log("[Focus]: ", storeTextInput)}
        </View>
      </View>
    </View>
  )}


