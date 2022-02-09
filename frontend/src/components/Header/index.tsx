import React, { ReactNode } from 'react';

import Container from '@/styles/components/Header';

interface IHeaderProps {
  children: ReactNode;
}

function Header({ children }: IHeaderProps) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}

export default Header;
