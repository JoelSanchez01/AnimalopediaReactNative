import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Layout from "../components/Layout";

const MainDentro = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("BuscarGps")}
        >
          <Text style={styles.botonText}>Buscar en la ubicacion</Text>
          <Image
            style={styles.imagenBoton}
            source={require("../assets/gpsicon.png")}
          />
        </TouchableOpacity>

        <View style={styles.contenedorBotones}>
          <TouchableOpacity
            style={styles.BotonesMain}
            onPress={() => navigation.navigate("Buscar")}
          >
            <Image
              style={styles.imagenBotonMain}
              source={require("../assets/spidericon.png")}
            />
            <Text>Animales</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BotonesMain}
            onPress={() => navigation.navigate("Buscar")}
          >
            <Image
              style={styles.imagenBotonMain}
              source={require("../assets/paisicon.png")}
            />
            <Text>Lugar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  botonText: {
    fontSize: 20,
  },
  imagenBoton: {
    width: 30,
    height: 30,
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
  imagenBotonMain: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
});

export default MainDentro;
