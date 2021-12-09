import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Layout = ({ children }) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#D1E8E4", "#C6D57E"]}
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "cover",
  },
});

export default Layout;
