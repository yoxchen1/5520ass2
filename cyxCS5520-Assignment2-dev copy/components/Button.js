import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <Pressable 
        onPress={props.buttonPressed}
        style={({pressed})=>{
            return pressed ? 
            [props.customizedStyle, styles.pressed, props.pressedStyle] : props.customizedStyle;
        }}
    >
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  }
})