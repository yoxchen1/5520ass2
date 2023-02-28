import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import {
  collection,
  onSnapshot,
  where,
  orderBy,
  query,
} from "firebase/firestore";
import React from 'react'
import Entry from './Entry'
import Card from "./Card";

/**
 * This is the entrylist component that will be used
 * @param entries the data from the db
 * if the entry.value is lager than the 500, it will be added with a waring icon
 */ 
export default function EntryList({ entries }) {
  //console.log(entries);
  return (
    <FlatList
      contentContainerStyle={styles.normalStyle}
      data = {entries}
      renderItem={({item}) => {
        return (
          <Entry entry={item} />
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  normalStyle: {
    margin: 18,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 15,
    minWidth: 100,
  },
  invalidInput: {
    marginTop: 25,
    fontSize: 18,
    alignSelf: 'center',
  }
})