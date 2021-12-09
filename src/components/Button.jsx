import React from "react";
import { TouchableOpacity, Texto } from "react-native";
const Button = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Press Here</Text>
    </TouchableOpacity>
  );
};
