import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { myColor } from './Color';

/**
 * This is the card component that will be used
 * @param props the children content
 */
export default function Card(props) {
  //console.log(props);
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: myColor.backColorlight,
    margin: 60,    
    padding: 18,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  }
})