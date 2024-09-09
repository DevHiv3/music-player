import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import MainScreen from "./main"
import Signup from "./screens/signup"
import Login from "./screens/login"
import Player from "./screens/player"
//import SearchScreen from "./screens/search"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Player" component={Player} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name="Login" component={Login} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}