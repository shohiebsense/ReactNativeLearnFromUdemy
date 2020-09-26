import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  const yourName = 'Shohieb'

  return (
    <View>
      <Text style={styles.textStyle}> This is the components screen</Text>
      <Text style={styles.yourNameStyle}>My name is {yourName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  yourNameStyle: {
    fontSize: 30,
  },
})

export default ComponentsScreen
