import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/login/login.screen";
import { RegisterScreen } from "./screens/register/register.screen";
import { Home } from "./screens/home/home.screen";

//const { Navigator, Screen } = createStackNavigator();

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
      <Stack.Screen name='Register' component={RegisterScreen}></Stack.Screen>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
