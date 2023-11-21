import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Signin from '../authentication/Signin.jsx';
import Signup from '../authentication/Signup.jsx';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName='signin'>
            <Stack.Screen name='signin' component={Signin}/>
            <Stack.Screen name='signup' component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation