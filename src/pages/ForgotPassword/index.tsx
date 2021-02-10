import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import logo from '../../assets/second-logo.png';
import {
  Container,
  Title,
  GoBackButton,
  GoBackText,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const ForgotPassword: React.FC = () =>
{
  const { navigate } = useNavigation();

  return (
  <Container>
    <Image source={logo} />

    <Title>RECUPERAR SENHA</Title>
    <Input placeholder="Insira seu e-mail"/>

    <Button onPress={() => navigate("Login")}>RECUPERAR</Button>

    <GoBackButton onPress={() => navigate("Login")}>
      <Ionicons name="arrow-undo-circle" size={25} color="#fff" />
      <GoBackText>Voltar para login</GoBackText>
    </GoBackButton>
  </Container>
  )};

export default ForgotPassword;
