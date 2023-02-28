import { SafeAreaView, StyleSheet } from 'react-native';
import EntryList from '../components/EntryList';
import { myColor } from '../components/Color';

export default function AllEntries({ entries }) {

  return (
    <SafeAreaView style={styles.container}>
      <EntryList entries={entries}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.backColor,
  }
})