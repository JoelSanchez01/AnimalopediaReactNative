import React from "react";

import MainStack from "./src/navigation/MainStack";

import {
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from "@expo-google-fonts/noto-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

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
  return <MainStack />;
}
