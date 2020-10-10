import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  //state === {counter: number}
  //action === {type: 'increment' || 'decrement', payload : 15}
  return { ...state, counter: state.counter + action.payload }
}

const CounterScreenUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  })
  const { counter } = state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase_counter', payload: 1 })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease_counter', payload: -1 })
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

export default CounterScreenUsingReducer
