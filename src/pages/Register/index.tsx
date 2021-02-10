import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import {
  Container,
  Title,
  GoBackButton,
  GoBackText,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Register: React.FC = () =>
{
  const { navigate } = useNavigation();

  return (
    <Container>
    <Title>CRIE SUA CONTA</Title>
    <Input placeholder="Insira seu nome"/>
    <Input placeholder="Insira seu e-mail"/>
    <Input placeholder="Insira sua senha" password/>
    <Input placeholder="Confirme sua senha" password/>

    <Button style={{marginTop: 18}} onPress={() => navigate("Details")}>Registrar</Button>

    <GoBackButton onPress={() => navigate("Login")}>
      <Ionicons name="arrow-undo-circle" size={25} color="#fff" />
      <GoBackText>Voltar para login</GoBackText>
    </GoBackButton>
    </Container>
  )
};

export default Register;
