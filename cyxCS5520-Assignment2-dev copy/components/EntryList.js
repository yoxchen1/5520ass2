import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Entry from './Entry'

export default function EntryList({ entries }) {
  return (
    <FlatList
      contentContainerStyle={styles.scrollStyle}
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
  scrollStyle: {
    margin: 18,
  }
})