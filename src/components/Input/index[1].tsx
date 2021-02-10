import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextField } from './styles';

interface InputProps extends TextInputProps{
  Icon?: any,
  placeholder: string,
  password?: boolean
}
const Input: React.FC<InputProps> = ({placeholder, password, Icon, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container {...rest}>
      {/* <AntDesign name={password ? "lock": "user"} size={20} color="rgba(159, 129, 91, 0.8)" /> */}
      {Icon}
      <TextField placeholder={placeholder} secureTextEntry={password}/>
    </Container>
  );
};

export default Input;
