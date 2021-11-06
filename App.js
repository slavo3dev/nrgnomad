import React, { useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Focus } from "./src/features/focus"


export default function App() {
  const [ focusTask , setFocusTask ] = useState(null)
  return (
    <View style={styles.container}>
      { focusTask ? <Text>Habit Builder</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#346AAF',
    padding: 50
  },
});
