import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/pages/Main';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ForgotPassword from './src/pages/ForgotPassword';
import Details from './src/pages/Details';
import NewDog from './src/pages/NewDog';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="NewDog" component={NewDog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
