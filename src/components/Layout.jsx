import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Layout = ({ navigation, children }) => {
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
        <View
          style={styles.container}
          onPress={() => {
            navigation.navigate("Second");
          }}
        >
          {children}
        </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Layout;
