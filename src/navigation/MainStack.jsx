import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainDentro from "../pages/MainDentro";
import Second from "../pages/Second";
import Main from "../pages/Main";
import Buscar from "../pages/Buscar";
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="MainDentro" component={MainDentro} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;