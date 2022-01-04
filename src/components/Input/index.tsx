import React, { InputHTMLAttributes } from 'react';

import Container from '../../styles/components/Input';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'top' | 'bottom' | 'single';
  icon?: JSX.Element;
}

function Input({ type, placeholder, icon }: IInputProps) {
  return (
    <Container type={type}>
      <input type="text" placeholder={placeholder} />
      <div>{icon}</div>
    </Container>
  );
}

export default Input;
