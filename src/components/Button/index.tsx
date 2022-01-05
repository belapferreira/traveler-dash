import React, { ButtonHTMLAttributes } from 'react';

import Container from '@/styles/components/Button';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  model: 'orange' | 'green';
  icon?: JSX.Element;
};

function Button({ onClick, model, icon, children }: IButtonProps) {
  return (
    <Container onClick={onClick} model={model}>
      {icon}
      {children}
    </Container>
  );
}

export default Button;
