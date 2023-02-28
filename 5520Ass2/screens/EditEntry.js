import { View, Text, StyleSheet, Alert } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { myColor } from '../components/Color';
import { MaterialIcons } from '@expo/vector-icons';
import { deleteFromDBById, updateToDBById } from '../Firebase/firestoreHelper';

export default function EditEntry({ navigation, route }) {
  console.log('route:',route);
  function cancelForm() {
    navigation.goBack()
  }

  /**
   * Navigate to EditEntries screen
   * @param entries: pass the entries item to the EditEntries screen
   */
  function navigate(entries) {
    navigation.navigate("EditEntries", { entriesItem: entries });
  }

  return (
    <View style={styles.style}>
      <Card>
        <Text style={styles.textStyle}>
          Calories: {route.params.entry.value}
        </Text>
        <Text style={styles.textStyle}>
          Description: {route.params.entry.name}
        </Text>
        <View style={styles.buttonStyle}>
          <Button 
            buttonPressed={()=>{
              Alert.alert(
                'Delete',
                'Are you sure you want to delete this?',
                [
                  {
                    text: "No", 
                    style: "cancel", 
                    onPress: () => {console.log("No Pressed")}
                  },
                  {
                    text: 'Yes',
                    style: "confirm",
                    onPress: () => {
                      deleteFromDBById(route.params.entry.id);
                      cancelForm();
                    },
                  },
                ],
              );
            }}
            defaultStyle={styles.iconButton}
          >
            <MaterialIcons 
              style={styles.button}
              name="delete-outline" 
              size={24} 
              color={myColor.white} 
            />
          </Button>
          { route.params.entry.over &&  
          <Button 
            buttonPressed={()=>{
              Alert.alert(
                'Important',
                'Are you sure you want to mark this item as reviewed?',
                [
                  {
                    text: "No", 
                    style: "cancel", 
                    onPress: () => {}
                  },
                  {
                    text: 'Yes',
                    style: "confirm",
                    onPress: () => {
                      updateToDBById(route.params.entry.id);
                      cancelForm();
                    },
                  },
                ],
              );
            }}
            defaultStyle={styles.iconButton}
          >
            <MaterialIcons name="check" size={24} color={myColor.white} />
          </Button> }
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: myColor.backColor,
  },
  textStyle: {
    color: myColor.navicolor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginHorizontal: 15,
  },
  iconButton: {
    padding: 10,
    backgroundColor: myColor.navicolor,
    alignItems: 'center',
    width: 80,
    margin: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  }
})