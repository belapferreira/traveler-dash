import React, { ReactNode } from 'react';
import { AddOutlined } from '@material-ui/icons';

import Button from '../../components/Button';

import Container from '../../styles/components/Header';

interface IHeaderProps {
  children: ReactNode;
}

function Header({ children }: IHeaderProps) {
  return (
    <Container>
      <div>
        <h1>{children}</h1>
        <Button model='green' icon={<AddOutlined />}>Adicionar um perfil</Button>
      </div>
    </Container>
  )
}

export default Header;
