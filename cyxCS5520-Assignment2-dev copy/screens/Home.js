import React from 'react';
import AllEntries from './AllEntries';
import Button from '../components/Button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { myColor } from '../components/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from '../Firebase/firebaseConfig';

let iconAll = 'coffee'
let iconOver = 'alert'
let iconAdd = 'plus'

export default function Home({ navigation }) {

  const [entries, setEntries] = useState([]);
  let getQ = query(collection(db, "entries"));
  
  useEffect(() => {
    const unsubscribe = onSnapshot(getQ, (querySnapshot) => {
      if (querySnapshot.empty) {
        setEntries([]);
      } else {
        const newEntries = [];
        querySnapshot.forEach((doc) => {
            newEntries.push({ ...doc.data(), id:doc.id });
        });
        setEntries(newEntries);
      }
    });
    return function cleanup() {
      unsubscribe();
    };
  }, []);
  
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
        name="Home"
        screenOptions={{
        headerStyle: {backgroundColor:myColor.navicolor}, 
        headerTitleStyle: {color:myColor.white, fontSize: 20}, 
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        tabBarStyle: { position: 'absolute', 
        backgroundColor: myColor.navicolor },
        tabBarActiveTintColor: myColor.focus,
    }}>
        <Tab.Screen 
            name="All Entries"
            children={() => <AllEntries entries={entries} />}
            options={{
              title: 'All Entries', 
              tabBarIcon:({ color, size })=>
              <MaterialCommunityIcons 
              name={iconAll} 
              size={size} 
              color={color} 
              />,
              headerRight: () => {
                return (
                  <Button 
                  buttonPressed={()=>navigation.navigate('AddEntry')}
                  customizedStyle={{marginHorizontal: 18}}
                  >
                    <MaterialCommunityIcons name="plus" size={18} color={myColor.white} />
                  </Button>
                )
              }
            }} />
        <Tab.Screen 
            name="OverLimitEntries" 
            children={() => 
              <AllEntries 
              entries={entries.filter(item => item.warning === true)}
              />}
            
            options={{
              title: 'Over-limit Entries', 
              tabBarIcon:({ color, size })=><MaterialCommunityIcons 
              name={iconOver} 
              size={size} 
              color={color} 
              />,
              headerRight: () => {
                return (
                  <Button 
                    buttonPressed={()=>navigation.navigate('AddEntry')}
                    customizedStyle={{marginHorizontal: 18}}
                    >
                    <MaterialCommunityIcons 
                    name={iconAdd} 
                    size={24} 
                    color={myColor.white} 
                    />
                  </Button>
                )
              }
            }} />
    </Tab.Navigator>
  )
}