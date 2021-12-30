import React, { ButtonHTMLAttributes } from 'react';

import Container from '../../styles/components/Button';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

function Button({ onClick }: IButtonProps) {
  return (
    <Container>
      <button onClick={onClick}>Acessar plataforma</button>
    </Container>
  )
}

export default Button;
