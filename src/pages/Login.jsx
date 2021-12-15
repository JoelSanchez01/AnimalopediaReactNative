import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";

import HeaderPrincipal from "../components/HeaderPrincipal";
import Layout from "../components/Layout";
import InputTexto from "../components/InputTexto";
import { StackActions } from "@react-navigation/native";
import { auth } from "../../firebase.js";

const Login = ({ navigation }) => {
  const popAction = StackActions.pop(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in With:", user.email);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("MainDentro");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView>
      <Layout>
        <HeaderPrincipal>
          <InputTexto
            placeholder={"Email"}
            contrasena={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputTexto
            placeholder={"Password"}
            contrasena={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.botones}>
            <TouchableOpacity style={styles.botonAzul} onPress={handleLogin}>
              <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botonRojo}
              onPress={() => navigation.dispatch(popAction)}
            >
              <Text>Atras</Text>
            </TouchableOpacity>
          </View>
        </HeaderPrincipal>
      </Layout>
    </KeyboardAvoidingView>
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
