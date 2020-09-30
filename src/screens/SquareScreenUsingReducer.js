import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './../components/ColorCounter'

const COLOR_INCREMENT = 15
const reducer = (state, action) => {
  //state === {red : number, green: number, blue: number}
  //action === {type: 'red' || 'green' || 'blue', payload: 15 || -15}
  //convention:
  //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

  switch (action.type) {
    case 'change_red':
      return !isNotInRange(state.red + action.payload)
        ? { ...state, red: state.red + action.payload }
        : { state }
    case 'change_green':
      return !isNotInRange(state.green + action.payload)
        ? { ...state, green: state.green + action.payload }
        : { state }
    case 'change_blue':
      return !isNotInRange(state.blue + action.payload)
        ? { ...state, blue: state.blue + action.payload }
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
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT * -1 })
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT * -1 })
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
