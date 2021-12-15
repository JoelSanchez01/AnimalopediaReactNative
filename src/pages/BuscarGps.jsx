import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Mapa from "../components/Mapa";
import Layout from "../components/Layout";
import ButtonBack from "../components/ButtonBack";
import { StackActions } from "@react-navigation/native";

const BuscarGps = ({ navigation }) => {
  const popAction = StackActions.pop(1);

  return (
    <Layout>
      <View style={styles.container}>
        <Mapa />

        <TouchableOpacity
          style={styles.BotonesMain}
          onPress={() => navigation.navigate("TablaGps")}
        >
          <Image
            style={styles.imagenBotonMain}
            source={require("../assets/venenosos.png")}
          />
          <Text>Venenosos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BotonesMain}
          onPress={() => navigation.navigate("TablaGps")}
        >
          <Image
            style={styles.imagenBotonMain}
            source={require("../assets/novenenosos.png")}
          />
          <Text>No Venenosos</Text>
        </TouchableOpacity>
        <View style={styles.botonFlotante}>
          <ButtonBack funcion={() => navigation.dispatch(popAction)} />
        </View>
      </View>
    </Layout>
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
    bottom: 100,
    left: 30,
  },
});

export default BuscarGps;
