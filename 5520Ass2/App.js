import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button } from "react-native";
import Home from './Home';
import EditEntry from './screens/EditEntry';
import AddEntry from './screens/AddEntry';
import { myColor } from './components/Color';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerTitleStyle:{color:myColor.white, fontSize: 18}, 
        headerTintColor:myColor.white, 
        headerStyle:{backgroundColor:myColor.navicolor}, 
        headerTitleAlign:"center"}}>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EditEntry" 
          component={EditEntry} 
          options={{title: 'Edit Entry'}} 
        />
        <Stack.Screen name="AddEntry" 
          component={AddEntry} 
          options={{title: 'Add Entry'}} 
        />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
