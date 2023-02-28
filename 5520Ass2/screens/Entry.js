import { View, StyleSheet } from 'react-native';
import EntryList from '../components/EntryList';
import { myColor } from '../components/Color';

export default function Entry({ entries }) {
  //console.log('entires:',entries);
  return (
    <View style={styles.style}>
      <EntryList entries={entries}/>
    </View>
  )
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: myColor.backColor,
  }
})