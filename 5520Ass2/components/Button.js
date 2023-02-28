//rnfe
import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

/**
 * This is the pressable button component that will be reused
 * @param props : propsed children && styles
 */
export default function Button(props) {
  //console.log(props);
  return (
    <Pressable 
        onPress={props.buttonPressed}
        style={({pressed})=>{
            //console.log("pressed");
            return pressed ? 
            [props.defaultStyle, styles.pressed, props.pressedStyle] : props.defaultStyle;
        }}
    >
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  buttonStyle: { 
    justifyContent: "center", 
    backgroundColor: "green" 
  },
  pressedStyle: { 
    backgroundColor: "red", 
    opacity: 0.5 
  },
  container: {
    paddingTop: 4,
    flex: 1,
  },
})