import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './../components/ColorCounter'

const COLOR_INCREMENT = 15

const isNotInRange = (number) => {
  console.log(number)
  return number > 255 || number < 0
}
const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        !isNotInRange(change) ? setRed(change) : null
        return
      case 'green':
        !isNotInRange(change) ? setGreen(change) : null
        return
      case 'blue':
        !isNotInRange(change) ? setBlue(change) : null
        return
      default:
        return
    }
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor('red', red + COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor('red', red + COLOR_INCREMENT * -1)
        }}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          setColor(`green`, green + COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor('green', green + COLOR_INCREMENT * -1)
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          setColor('blue', blue + COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor('blue', blue + COLOR_INCREMENT * -1)
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>
        red : {red} green: {green} blue: {blue}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
