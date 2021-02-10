import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, CancelButton, CancelText } from './styles';
import { FlatList, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ImageProps {
  localeUri: string,
  itemKey: number
}
const NewDog: React.FC = () =>
{
  const { navigate } = useNavigation();
  const [selectedImage, setSelectedImage] = useState([] as ImageProps[]);

  const openImagePickerAsync = async (itemKey: number) => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage([...selectedImage, {localeUri: pickerResult.uri, itemKey}]);
  }

  const renderItems = ({item}) => (
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: 160,
        height: 160,
        marginRight: 10,
        backgroundColor: '#fff'}}>

        {selectedImage[item.key] != null ? (
          <Image
          source={{uri : selectedImage[item.key].localeUri}}
          style={{flex: 1, width: "100%", height: "100%"}}/>
          ) : (
            <TouchableOpacity
            onPress={() => openImagePickerAsync(item.key)}>
            <Octicons name="device-camera" color="#7e7e7e" size={40}/>
            </TouchableOpacity>
          )
        }
        </View>
  );
  return (
  <Container>

    <CancelButton onPress={() => navigate("Main")}>
      <CancelText>CANCELAR</CancelText>
    </CancelButton>

    <Input placeholder="Digite seu nome"
    Icon={<AntDesign name="user" size={20} color="rgba(159, 129, 91, 0.8)" />}/>

    <Input placeholder="Digite a raça do pet"
    Icon={<MaterialCommunityIcons name="dog-side" size={20} color="rgba(159, 129, 91, 0.8)" />}/>

    <Input style={{height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}
    placeholder="Diga como e por onde encontrou o pet"/>

    <View style={{flex: 1}}>
    <FlatList
      horizontal
      data={[{key: 0}, {key: 1}, {key: 2}]}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItems}
    />
    </View>
    <Input placeholder="Digite seu WhatsApp"
    Icon={<FontAwesome5 name="whatsapp" size={20} color="rgba(159, 129, 91, 0.8)" />}/>
    <Button>CADASTRAR</Button>
  </Container>
  )};

export default NewDog;
