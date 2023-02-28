import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { myColor } from '../components/Color';
import { writeToDB } from '../Firebase/firestoreHelper';

export default function AddEntry({ navigation }) {
  const [name, setName] = useState();
  const [value, setValue] = useState();
  let overNum = 500;

  function resetInput() {
    setName('');
    setValue('');
  }

  function valid() {
    let numReg = /^\+?[1-9][0-9]*$/;
    if (!numReg.test(value) ||value.length === 0 ||
        value.length > 10) return false;
    if (name && value && !isNaN(value)) 
      return true;
    return false;
  }

  function updateTextEntered(newEntry) {
    writeToDB(newEntry);
  }

  function cancelForm() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputItemStyle}>
          <Text style={styles.inputNameStyle}>Calories</Text>
            <TextInput
              value={value}
              onChangeText={setValue}
              style={styles.inputLine}
            />
        </View>

        <View style={styles.inputItemStyle}>
          <Text style={styles.inputNameStyle}>Description</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.inputLine}
            />
        </View>
      </View>

    <View style={styles.buttonContainer}>
        <Button
          buttonPressed={()=>resetInput()}
          defaultStyle={styles.inputButton}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Button>

        <Button 
          defaultStyle={styles.inputButton}
          buttonPressed={()=>{
          if (valid()) {
            let over = false;
            if (value >= overNum) {
              over = true;
            }
            const newEntry = { value: value, name: name, over: over }
            updateTextEntered(newEntry);
            resetInput();
            cancelForm();
          } else {
            Alert.alert(
              'Invalid Input',
              'Please input values again',
              [
                {
                  text: 'OK',
                },
              ],
            );
          }
          }}
          >
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputButton: {
    alignItems: 'center',
    backgroundColor: myColor.navicolor,
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: myColor.white,
    fontSize: 18,
  },
  inputLine: {
    backgroundColor: myColor.backColorlight,
    color: myColor.navicolor,
    fontSize: 18,
    fontWeight: 'bold',
    height: 40,
    padding: 10,
    flex: 2,
  },
  inputItemStyle: {
    flexDirection: 'row',
    margin: 10,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: myColor.backColor,
    alignItems: 'center',
  },
  inputNameStyle: {
    color: myColor.navicolor,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    adjustContent: 'center',
    margin: 18,
  },
  button: {
    marginHorizontal: 15,
    minWidth: 100,
  },
  invalidInput: {
    color: myColor.backColorlight,
    marginTop: 25,
    fontSize: 18,
    alignSelf: 'center',
  }
})