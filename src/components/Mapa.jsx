import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView, { Circle, Marker } from "react-native-maps";

export default function Mapa() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [longitud, setLongitud] = useState(-98.9799179536181);
  const [latitud, setLatitud] = useState(22.72937240446674);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      let longitude = location.coords.longitude;
      let latitude = location.coords.latitude;
      setLatitud(latitude);
      setLongitud(longitude);
    }
  }, []);

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitud,
          longitude: longitud,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitud,
            longitude: longitud,
          }}
        />

        <Circle
          center={{ latitude: latitud, longitude: longitud }}
          radius={4000}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});
