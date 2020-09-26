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
        title="Go to components demo"
      />
      <TouchableOpacity
        onPress={() => {
          console.log('List Pressed')
          navigate('List')
        }}
      >
        <Text>Go To List Component</Text>
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
