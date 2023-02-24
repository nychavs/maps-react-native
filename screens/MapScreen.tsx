import React, {useState} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import {Text, View} from "../components/Themed";

export default function MapScreen() {

  const [latitude, setLatitude] = useState(-22.91387958710525)
  const [longitude, setLongitude] = useState(-47.068131631428884)

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}> 

      <Marker coordinate={{ latitude : latitude, longitude : longitude }}>
        <Callout>
          <Text>SENAI</Text>
        </Callout>
      </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});