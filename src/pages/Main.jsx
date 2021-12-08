import React from "react";
import { Text, View, Button } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View>
      <Text>Hola Soy el Main</Text>
      <Button
        title="Ir al segundo"
        onPress={() => {
          navigation.navigate("Second");
        }}
      />
    </View>
  );
};

export default Main;
