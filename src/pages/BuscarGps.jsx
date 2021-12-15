import React from "react";
import { View, StyleSheet } from "react-native";
import Mapa from "../components/Mapa";
const BuscarGps = () => {
  return (
    <View style={styles.container}>
      <Mapa />
    </View>
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
