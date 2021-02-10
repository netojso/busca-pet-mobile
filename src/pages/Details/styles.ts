import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #9f815c;
`;

export const Card = styled.View`
  width: 100%;
  padding: 12px 22px 22px;
  border-radius: 20px;
  background-color: #fafafa;

`;
export const Title = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;

  margin: 8px 0px;
`;

export const WhatsAppButton = styled(RectButton)`
  width: 100%;
  padding: 10px 40px;
  margin-top: 12px;
  border-radius: 8px;
  background-color: #34AF23;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

`;
