import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Layout = ({ children }) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#C6D57E", "#D1E8E4"]}
      style={styles.gradiante}
    >
      <ImageBackground
        source={require("../assets/Background.png")}
        style={styles.background}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradiante: {
    width: "100%",
    height: "100%",
  },
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Layout;
