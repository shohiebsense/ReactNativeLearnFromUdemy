import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
const friends = [
  {
    name: 'Friend #1',
    age: 20,
    key: '1',
  },
  {
    name: 'Friend #2',
    age: 20,
    key: '2',
  },
  {
    name: 'Friend #3',
    age: 20,
    key: '3',
  },
  {
    name: 'Friend #4',
    age: 20,
    key: '4',
  },
  {
    name: 'Friend #5',
    age: 20,
    key: '5',
  },
  {
    name: 'Friend #6',
    age: 20,
    key: '6',
  },
  {
    name: 'Friend #7',
    age: 20,
    key: '7',
  },
  {
    name: 'Friend #8',
    age: 20,
    key: '8',
  },
  {
    name: 'Friend #9',
    age: 20,
    key: '9',
  },
]

const ListScreen = () => {
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.key}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
})

export default ListScreen
