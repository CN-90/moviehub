import React from 'react';
import { Input, InputGroup, InputLabel } from './Form-input.styles';

const FormInput = ({ label, ...otherprops }) => {
  return (
    <InputGroup>
      <InputLabel htmlFor="">{label}</InputLabel>
      <br></br>
      <Input placeholder={label} {...otherprops} />
    </InputGroup>
  );
};

export default FormInput;
