import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewDogButton = styled(RectButton)`
  background: #9f6a28;
  padding: 10px 40px;
  border-radius: 8px;

  position: absolute;
  bottom: 20px;
  right: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NewDogButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 12px;
`;
