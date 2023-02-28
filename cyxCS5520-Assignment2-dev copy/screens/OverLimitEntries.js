import { View } from 'react-native';
import EntryList from '../components/EntryList';
import React from 'react';
import { myColor } from '../components/Color';

export default function OverLimitEntries({ entries }) {
  return (
    <View style={styles.container}>
      <EntryList entries={entries}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.backColor,
  }
})