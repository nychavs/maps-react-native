import React, {useState} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import {Text, View} from "../components/Themed";

export default function MapScreen() {

  const [lat, setLatitude] = useState(-22.91387958710525)
  const [long, setLongitude] = useState(-47.068131631428884)
  const locals = [{
    latitude: -22.896875688928752,
    longitude: -47.11146552703074,
    title: 'bosch'},
    {latitude: -22.91387958710525,
    longitude: -47.068131631428884,
    title: 'senai'},
    {latitude: -22.850590745952736,
    longitude:  -47.231195788477336,
    title: 'ifsp'},
    {latitude:-22.858229699890725,
    longitude: -47.20148198835639,
    title: 'casa'},
    {latitude: -22.85520918203911,
    longitude:  -47.224505384778055,
    title: 'academia'},

  ]
  return (
    
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}> 
      {locals.map((local) => (
        <Marker 
        key={local.title}
        coordinate={{latitude: local.latitude, longitude: local.longitude}}
        title={local.title}>
        </Marker>
      ))}

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