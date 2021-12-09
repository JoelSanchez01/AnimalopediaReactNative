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
          <Text style={styles.textRegular}>Ingresa tus datos</Text>
          <InputTexto placeholder={"User"} contrasena={false} />
          <InputTexto placeholder={"Password"} contrasena={true} />
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
  textRegular: {
    fontFamily: "NotoSans_400Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  imagenLogo: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 40,
    fontFamily: "NotoSans_700Bold",
  },
});

export default Login;
