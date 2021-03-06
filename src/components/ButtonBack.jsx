import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import arrow from "../assets/arrowback.svg";

const ButtonBack = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Hola");
      }}
      style={styles.boton}
    >
      <Image
        style={styles.imagen}
        source={require("../assets/arrowback2.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#22577A",
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  imagen: {
    width: 60,
    height: 60,
  },
});
export default ButtonBack;
