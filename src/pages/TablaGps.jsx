import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Mapa from "../components/Mapa";
import Layout from "../components/Layout";
import ButtonBack from "../components/ButtonBack";
import { StackActions } from "@react-navigation/native";
import Elemento from "../components/Elemento";
import { LinearGradient } from "expo-linear-gradient";

const TablaGps = ({ navigation }) => {
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const popAction = StackActions.pop(1);

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#C6D57E", "#D1E8E4"]}
      style={styles.gradiante}
    >
      <View style={styles.container}>
        <Mapa />

        <View style={styles.cuadricula}>
          {arreglo.map((cosa) => (
            <Elemento />
          ))}
        </View>

        <View style={styles.botonFlotante}>
          <ButtonBack funcion={() => navigation.dispatch(popAction)} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  BotonesMain: {
    width: 175,
    height: 125,
    margin: 20,
    backgroundColor: "#D1E8E4",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  botonFlotante: {
    position: "absolute",
    bottom: 120,
    left: 30,
  },
  cuadricula: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TablaGps;
