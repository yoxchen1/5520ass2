import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { myColor } from './Color';

export default function Card(props) {
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
  }
})