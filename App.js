import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";

import Ingresado from "./src/pages/Ingresado";
import Register from "./src/pages/Register";
import Login from "./src/pages/Login";
import MainDentro from "./src/pages/MainDentro";

import Buscar from "./src/pages/Buscar";
import BuscarGps from "./src/pages/BuscarGps";
import TablaGps from "./src/pages/TablaGps";

import {
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from "@expo-google-fonts/noto-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoader, error] = useFonts({
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic,
  });

  if (!fontsLoader) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      >
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Ingreso" component={Ingresado} />
        <Stack.Screen name="MainDentro" component={MainDentro} />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="BuscarGps" component={BuscarGps} />
        <Stack.Screen name="TablaGps" component={TablaGps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const config = {
  animation: "spring",
  config: {
    sitffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
