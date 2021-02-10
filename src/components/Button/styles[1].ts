import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #9f6a28;
  width: 100%;
  margin-top: 14px;
  padding: 10px 60px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
