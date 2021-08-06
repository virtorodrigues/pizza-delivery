import React, { InputHTMLAttributes } from 'react';
import { Styled } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Radiobutton: React.FC<InputProps> = ({ children, ...props }) => (
  <Styled>
    <input type="radio" {...props} />
    <label htmlFor={props.id}>{children}</label>
  </Styled>
);

export default Radiobutton;
