import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputTexto = (props) => {
  const { placeholder } = props;
  return (
    <TextInput placeholder={placeholder} style={styles.input} label="Usuario" />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 100,
    height: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 100,
  },
});

export default InputTexto;
