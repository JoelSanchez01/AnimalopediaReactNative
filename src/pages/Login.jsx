import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import InputTexto from "../components/InputTexto";

const Login = () => {
  return (
    <Layout>
      <View style={styles.containerLogin}>
        <View style={styles.containerLogin__Header}>
          <Text style={styles.textTitle}>Animalopedia</Text>
          <Image
            style={styles.imagenLogo}
            source={require("../assets/logo.png")}
          />
          <Text>Ingresa tus datos</Text>
          <InputTexto placeholder={"Usuario"} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogin__Header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagenLogo: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 30,

    fontFamily: "NotoSans_700Bold",
  },
});

export default Login;
