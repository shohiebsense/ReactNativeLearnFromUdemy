import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './../components/ColorCounter'

const COLOR_INCREMENT = 15
const reducer = (state, action) => {
  //state === {red : number, green: number, blue: number}
  //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case 'red':
      return !isNotInRange(state.red + action.amount)
        ? { ...state, red: state.red + action.amount }
        : { state }
    case 'green':
      return !isNotInRange(state.green + action.amount)
        ? { ...state, green: state.green + action.amount }
        : { state }
    case 'blue':
      return !isNotInRange(state.blue + action.amount)
        ? { ...state, blue: state.blue + action.amount }
        : { state }
    default:
      return { state }
  }
}

const isNotInRange = (number) => {
  console.log(number)
  return number > 255 || number < 0
}

const SquareScreenUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  })
  const { red, green, blue } = state
  console.log(state)

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT * -1 })
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT * -1 })
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${state.green}, ${blue})`,
        }}
      />
      <Text>
        red : {red} green: {green} blue: {blue}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreenUsingReducer
