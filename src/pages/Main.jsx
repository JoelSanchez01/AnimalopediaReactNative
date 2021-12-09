import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const Main = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.containerMain}>
        <Text>Hola Soy el Main</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
