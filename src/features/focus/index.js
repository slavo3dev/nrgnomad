import React  from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {TextInput} from 'react-native-paper'
import { RoundedBtn } from '../../components/roundedBtn';


export function Focus() {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What habit are you willing to practice?</Text>
        <View styles={styles.inputContainer}>
          <TextInput />
          <RoundedBtn title={"+"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    paddingTop: 18
  }
});
