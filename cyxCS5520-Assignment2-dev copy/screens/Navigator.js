import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import EditEntry from './EditEntry';
import AddEntry from './AddEntry';
import { myColor } from '../components/Color';

const Stack = createNativeStackNavigator();

export default function Navigator() {

  return (
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
  )
}