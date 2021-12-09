import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Boton = (props) => {
  const { texto, estilo, funcion } = props;

  return (
    <TouchableOpacity style={`${estilo}`} onPress={funcion}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botonAzul: {
    margin: 5,
    backgroundColor: "#38A3A5",
  },
  botonRojo: {
    backgroundColor: "#BD1616",
  },
});

export default Boton;
