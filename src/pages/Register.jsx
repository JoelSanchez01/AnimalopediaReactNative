import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HeaderPrincipal from "../components/HeaderPrincipal";
import Layout from "../components/Layout";
import InputTexto from "../components/InputTexto";

const Register = ({ navigation }) => {
  return (
    <Layout>
      <HeaderPrincipal>
        <InputTexto placeholder={"Name"} contrasena={false} />
        <InputTexto placeholder={"Email"} contrasena={false} />
        <InputTexto placeholder={"User"} contrasena={false} />
        <InputTexto placeholder={"Password"} contrasena={true} />
        <InputTexto placeholder={"Password"} contrasena={true} />
        <View style={styles.botones}>
          <TouchableOpacity
            style={styles.botonAzul}
            onPress={() => console.log("Register")}
          >
            <Text>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonRojo}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text>Login</Text>
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

export default Register;
