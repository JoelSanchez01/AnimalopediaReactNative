import React from "react";
import { View, StyleSheet } from "react-native";
import Mapa from "../components/Mapa";
import { LinearGradient } from "expo-linear-gradient";

const BuscarGps = () => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#C6D57E", "#D1E8E4"]}
      style={styles.gradiante}
    >
      <View style={styles.container}>
        <Mapa />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default BuscarGps;
