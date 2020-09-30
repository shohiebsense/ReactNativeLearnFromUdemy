import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Button, Text, StyleSheet } from 'react-native'

const HomeScreen = (props) => {
  const navigate = (navigationName) => {
    props.navigation.navigate(navigationName)
  }

  return (
    <View>
      <Text style={styles.text}>Hi There!!!</Text>
      <Button
        onPress={() => {
          console.log('Button presed')
          navigate('Components')
        }}
        title="Go to components demo Page"
      />
      <TouchableOpacity
        onPress={() => {
          console.log('List Pressed')
          navigate('List')
        }}
      >
        <Text>Go To List Component</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('Image')
        }}
      >
        <Text>Go to Image Component</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('Counter')
        }}
      >
        <Text>Go to Counter Component</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('Color')
        }}
      >
        <Text>Go to Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('Square')
        }}
      >
        <Text>Go to Square Demooo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('SquareUsingReducer')
        }}
      >
        <Text>Go to Square Demooo Using Reducer</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
