import React  from 'react';
import {StyleSheet,Text,View} from 'react-native';


export function Focus() {
  
  return (
    <View style={styles.container}>
      <Text>What habit are you willing to practice?</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
