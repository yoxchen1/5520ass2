import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  onSnapshot,
  where,
  orderBy,
  query,
} from "firebase/firestore";
import Button from './Button';
import { myColor } from './Color';
import { Ionicons } from '@expo/vector-icons';

/**
 * This is the entry component that will be used
 * @param entry the data from the db
 * if the entry.value is lager than the 500, it will be added with a waring icon
 */ 
export default function Entry({ entry }) {
  //console.log(entry);
  const navigation = useNavigation();

  function itemPressed() {
    navigation.navigate('EditScreen', {
      expenseId: expense.key,
      amount: expense.amount,
      description: expense.description,
      isImportant: expense.isImportant
    });
  }


  return (
    <Button 
      buttonPressed={()=>
        navigation.navigate('EditEntry', {entry:entry})}
      defaultStyle={styles.entry}
    >
      <Text style={styles.entryName}>{ entry.name }</Text>
      
      {/* check if the value is over the number ,and add the alert icon */}
      <View style={styles.entryTag}>
        {entry.over && 
        <Ionicons 
        name="warning" 
        size={22} 
        color={myColor.warning} />}
        <Button defaultStyle={styles.entryValueButton}>
          <Text style={styles.entryValue}>{ entry.value }</Text>
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
  },
  container: {
    paddingTop: 4,
    flex: 1,
  },
})