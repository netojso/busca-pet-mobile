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
  margin-bottom: 14px;
`;
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: 50px;
`;
export const CreateAccountText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
