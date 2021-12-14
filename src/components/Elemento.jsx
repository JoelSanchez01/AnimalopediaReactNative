import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Elemento = () => {
  return (
    <View style={styles.Elemento}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/spidericon.png")}
      />
      <Text>Elemento</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Elemento: {
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    textAlign: "center",
    height: 115,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default Elemento;
