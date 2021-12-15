import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView, { Circle, Marker } from "react-native-maps";

export default class Mapa extends React.Component {
  constructor() {
    super();

    this.state = {
      location: null,
      errorMsg: null,
      longitud: -98.97247913223634,
      latitud: 22.74489985654589,
    };
  }

  UNSAFE_componentWillMount() {
    const funcion = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        this.setState({
          errorMsg: "Permission to access location was denied",
        });
        return;
      }
      let locationfinal = await Location.getCurrentPositionAsync({});
      this.setState({ location: locationfinal });
      let text = "Waiting..";
      if (this.state.errorMsg) {
        text = this.state.errorMsg;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
        let longitude = this.state.location.coords.longitude;
        let latitude = this.state.location.coords.latitude;
        this.setState({ latitud: latitude });
        this.setState({ longitud: longitude });
      }
    };
    funcion();
    console.log("soy una funcioon");
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitud,
            longitude: this.state.longitud,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: this.state.latitud,
              longitude: this.state.longitud,
            }}
          />

          <Circle
            center={{
              latitude: this.state.latitud,
              longitude: this.state.longitud,
            }}
            radius={4000}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: 400,
  },
});
