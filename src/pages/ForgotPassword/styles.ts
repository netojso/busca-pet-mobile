import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #9f815c;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const GoBackText = styled.Text`
  margin-left: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`;
