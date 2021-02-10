import React from 'react';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Input from '../../components/Input';
import logo from '../../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  return (
  <Container>
    <Image source={logo} />

    <Title>FAÇA SEU LOGIN</Title>
    <Input placeholder="Insira seu nome"
    Icon={<AntDesign name="user" size={20} color="rgba(159, 129, 91, 0.8)" />}/>
    <Input placeholder="Insira sua senha"
    Icon={<AntDesign name="lock" size={20} color="rgba(159, 129, 91, 0.8)" />}
    password/>

    <Button onPress={() => navigate("Main")}>ENTRAR</Button>

    <ForgotPassword onPress={() => navigate("ForgotPassword")}>
      <ForgotPasswordText>ESQUECI MINHA CONTA</ForgotPasswordText>
    </ForgotPassword>

    <CreateAccountButton onPress={() => navigate("Register")}>
      <CreateAccountText>CRIE SUA CONTA</CreateAccountText>
    </CreateAccountButton>
  </Container>
)};

export default Login;
