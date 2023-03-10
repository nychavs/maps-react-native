import React, {useState} from 'react';
import Dialog from 'react-native-dialog';
import MapView, {Marker, Callout, MarkerPressEvent} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import {Text, View} from "../components/Themed";
import { LatLng } from 'react-native-maps';

export default function MapScreen(this: any) {

  const [lat, setLatitude] = useState(-22.91387958710525)
  const [long, setLongitude] = useState(-47.068131631428884)

  let coord : LatLng = {latitude: 0, longitude: 0};
  const [coordenadas, setCoordenadas] = useState(coord)
  const [visible, setVisible] = useState(false)
  const [nome, setNome] = useState('')

  const [lista, setLista] = useState(
    [{lat: -22.896875688928752,long: -47.11146552703074, nome: 'bosch'},
    {lat: -22.91387958710525, long: -47.068131631428884, nome: 'senai'},
    {lat: -22.850590745952736, long:  -47.231195788477336, nome: 'ifsp'},
    {lat:-22.858229699890725, long: -47.20148198835639, nome: 'casa'},
    {lat: -22.85520918203911, long:  -47.224505384778055,nome: 'academia'}])
  
  const addMarcador = (e : LatLng) => {
    setCoordenadas(e)
    setVisible(true)
  }

  const handleControl = () => {
    setVisible(false);
  }

  const deletarMarcador = (e : MarkerPressEvent) => {
    alert(e.nativeEvent.coordinate.longitude)
    let novaLista = [...lista as any]
    let posicaoItem = novaLista.findIndex(x => x.lat = e.nativeEvent.coordinate.latitude && 
      x.long == e.nativeEvent.coordinate.longitude)
    novaLista.splice(posicaoItem, 1)

    setLista(novaLista)
  }

  const handleOk = () => {
    let novaLista = [... lista as any]
    novaLista.push({
      lat: coordenadas.latitude,
      long: coordenadas.longitude,
      nome: nome
    })
    setLista(novaLista)
    setVisible
  }
  
    return (
    
    <View style={styles.container}>
      <MapView style={styles.map}
        // initialRegion={{
        //   latitude: lat,
        //   longitude: long,
        //   latitudeDelta: 0.003,
        //   longitudeDelta: 0.003,
        // }}
      onPress={e => addMarcador(e.nativeEvent.coordinate)}
        >
          

      {lista.map((local) => (
        <Marker 
        key={local.nome}
        coordinate={{latitude: local.lat, longitude: local.long}}
        title={local.nome}
        onPress={e => deletarMarcador(e)}
        >
        </Marker>
      ))}

      </MapView>

      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Inserir marcador</Dialog.Title>
          <Dialog.Description>
            Informe abaixo o nome deste marcador
          </Dialog.Description>
          <Dialog.Input onChange={(e) => setNome(e.nativeEvent.text)}/>
          <Dialog.Button onPress={() => handleControl()} label="Cancel"/>
          <Dialog.Button onPress={() => handleOk()} label="Adicionar"/>
        </Dialog.Container>
      </View>
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