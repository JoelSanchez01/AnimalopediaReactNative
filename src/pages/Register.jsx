import React, { useState } from "react";
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
import { auth } from "../../firebase.js";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView>
      <Layout>
        <HeaderPrincipal>
          <InputTexto
            placeholder={"Name"}
            contrasena={false}
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
            <TouchableOpacity style={styles.botonAzul} onPress={handleSignUp}>
              <Text>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botonRojo}
              onPress={() => navigation.navigate("Login")}
            >
              <Text>Login</Text>
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

export default Register;
