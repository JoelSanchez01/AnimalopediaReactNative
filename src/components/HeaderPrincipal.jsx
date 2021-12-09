import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HeaderPrincipal = ({ children }) => {
  return (
    <View style={styles.containerLogin}>
      <Text style={styles.textTitle}>Animalopedia</Text>
      <Image style={styles.imagenLogo} source={require("../assets/logo.png")} />
      <Text style={styles.textRegular}>Ingresa tus datos</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textRegular: {
    fontFamily: "NotoSans_400Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  imagenLogo: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 40,
    fontFamily: "NotoSans_700Bold",
  },
});

export default HeaderPrincipal;
