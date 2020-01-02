import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, ...otherprops }) => {
  return <StyledButton {...otherprops}>{children}</StyledButton>;
};

export default Button;
