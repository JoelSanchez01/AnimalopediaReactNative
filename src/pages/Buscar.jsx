import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Buscar = () => {
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

        <View style={styles.cuadricula}></View>
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
});

export default Buscar;
