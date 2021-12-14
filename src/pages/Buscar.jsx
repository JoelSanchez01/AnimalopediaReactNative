import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Elemento from "../components/Elemento";

const Buscar = () => {
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#C6D57E", "#D1E8E4"]}
      style={styles.gradiante}
    >
      <View style={styles.container}>
        <TextInput
          placeholder={"Busqueda"}
          style={styles.input}
          label={"Busqueda"}
          secureTextEntry={false}
        />

        <View style={styles.cuadricula}>
          {arreglo.map((cosa) => (
            <Elemento />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradiante: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginTop: 40,
    width: 250,
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  cuadricula: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Buscar;
