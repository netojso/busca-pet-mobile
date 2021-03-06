import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Callout, Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container, NewDogButton, NewDogButtonText  } from './styles';

interface CurrentRegionProps {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
}
const Main: React.FC = () =>{
  const { navigate } = useNavigation();

  const [currentRegion, setCurrentRegion] = useState<CurrentRegionProps>();

  const dogs = [
    {
      key: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkX4bzAfmRcBHMuuCftCJx0RQDaVUvSjxQgA&usqp=CAU",
      latitude: -20.3470989,
      longitude: -40.3015455
    },
    {
      key: 2,
      image: "data:image/jpeg;base64,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",
      latitude: -20.344654,
      longitude: -40.3045497
    },
    {
      key: 3,
      image: "https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0",
      latitude: -20.345519,
      longitude: -40.3038307
    }
  ]

  async function loadInitialPosition(){
    const { granted } = await requestPermissionsAsync();

    if (granted){
      const { coords } = await getCurrentPositionAsync();
      const {latitude, longitude} = coords;

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.9,
        longitudeDelta: 0.9
      })
    }
  }

  useEffect(()=> {
    loadInitialPosition();
  }, []);

  if(currentRegion === null){
    console.log("to off disso tudo")
    return null;
  }
  return (
  <Container>
    <MapView
    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
    initialRegion={currentRegion}
    >
      {dogs.map(dog => (
      <Marker
      onPress={() => {setTimeout(() => {
        navigate("Details")
      }, 500)} }
      key={dog.key}
      coordinate={{
        latitude: dog.latitude,
        longitude: dog.longitude
      }}>
        <Image style={{width: 50, height: 50, borderRadius: 25}} source={{ uri: dog.image}}/>
        <Callout style={{width: 120, height: 30}}>
          <Text style={{fontSize: 12, textAlign: 'center'}}>Encontrado há tres dias atrás</Text>
        </Callout>
      </Marker>
      ))}
    </MapView>
    <NewDogButton onPress={() => navigate("NewDog")}>
      <NewDogButtonText>Encontrei um pet</NewDogButtonText>
      <MaterialCommunityIcons name="dog-side" size={20} color="#fff" />
    </NewDogButton>
  </Container>
)};

export default Main;
