import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { myColor } from './Color';
import { Ionicons } from '@expo/vector-icons';

export default function Entry({ entry }) {

  const navigation = useNavigation();

  return (
    <Button 
      buttonPressed={()=>
        navigation.navigate('EditEntry', {entry:entry})}
      customizedStyle={styles.entry}
    >
      <Text style={styles.entryName}>{ entry.name }</Text>
      
      <View style={styles.entryTag}>
        {entry.warning && 
        <Ionicons 
        name="ios-warning" 
        size={18} 
        color={myColor.warning} />}
        <Button customizedStyle={styles.entryValueButton}>
          <Text style={styles.entryValue}>{ entry.val }</Text>
        </Button>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  entryTag: {
    flexDirection:'row', 
    alignItems:'center'
  },
  entryName: {
    color: myColor.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  entry: {
    backgroundColor: myColor.navicolor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    margin: 8,
  },
  entryValue: {
    color: myColor.navicolor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  entryValueButton: {
    width: 80,
    alignItems: 'center',
    backgroundColor: myColor.white,
    padding: 5,
  }
})