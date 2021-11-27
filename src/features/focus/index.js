import React  from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {TextInput} from 'react-native-paper'
import { RoundedBtn } from '../../components/roundedBtn';


export function Focus() {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What habit are you willing to practice?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} />
        <View style={styles.btnContainer}>
          <RoundedBtn title={"+"} size={50}  />
        </View>
      </View>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: 5
  },
  btnContainer: {
    justifyContent: 'center'
  }
});
