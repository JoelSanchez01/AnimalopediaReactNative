import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputTexto = (props) => {
  const { placeholder, contrasena, onChangeText, value } = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      label={placeholder}
      secureTextEntry={contrasena}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 20,
    padding: 10,
  },
});

export default InputTexto;
