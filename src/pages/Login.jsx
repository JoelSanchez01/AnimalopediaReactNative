import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HeaderPrincipal from "../components/HeaderPrincipal";
import Layout from "../components/Layout";
import InputTexto from "../components/InputTexto";
import Boton from "../components/Boton";

const Login = () => {
  return (
    <Layout>
      <HeaderPrincipal>
        <InputTexto placeholder={"User"} contrasena={false} />
        <InputTexto placeholder={"Password"} contrasena={true} />
        <View style={styles.botones}>
          <TouchableOpacity
            style={styles.botonAzul}
            onPress={() => console.log("Login")}
          >
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonRojo}
            onPress={() => console.log("Atras")}
          >
            <Text>Atras</Text>
          </TouchableOpacity>
        </View>
      </HeaderPrincipal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  botones: {
    flexDirection: "row-reverse",

    justifyContent: "space-between",
  },
  botonAzul: {
    margin: 5,
    backgroundColor: "#38A3A5",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
  },
  botonRojo: {
    backgroundColor: "#BD1616",
    margin: 5,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
    color: "white",
  },
});

export default Login;
