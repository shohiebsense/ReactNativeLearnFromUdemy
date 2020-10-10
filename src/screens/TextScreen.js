import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        textContentType="newPassword"
        secureTextEntry={true}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue)
        }}
      />
      <Text>My name is {name}</Text>
      {name.length < 5 ? (
        <Text>Name should be 5 characters length</Text>
      ) : (
        <Text>Oke</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
