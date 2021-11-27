import React, { useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Focus } from "./src/features/focus"


export default function App() {
  const [ focusTask , setFocusTask ] = useState(null)
  return (
    <View style={styles.container}>
      {focusTask ? <Text>Habit TO FOCUS: </Text> : <Focus addFocus={setFocusTask} />}
      {console.log("[APP]: ", focusTask)}
      <Text>{focusTask}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#346AAF',
    paddingTop: 60,
    paddingLeft: 6,
    paddingRight: 6
  },
});
