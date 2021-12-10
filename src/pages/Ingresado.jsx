import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { auth } from "../../firebase";
const Ingresado = ({ navigation }) => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <View style={styles.Container}>
      <Text>Hola ya ingresaste: {auth.currentUser?.email}</Text>
      <Button title="Log Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Ingresado;
