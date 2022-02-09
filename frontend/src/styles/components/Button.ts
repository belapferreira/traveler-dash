import styled from 'styled-components';
import { shade } from 'polished';

import { IButtonProps } from '@/components/Button';

const Container = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7.2rem;
  border: none;
  background: ${(props) =>
    props.model === 'orange'
      ? 'var(--brand-orange)'
      : props.model === 'green'
      ? 'var(--others-green)'
      : props.model === 'blue'
      ? 'var(--brand-blue)'
      : 'var(--brand-orange)'};
  font-size: ${(props) => (props.model === 'orange' ? '1.8rem' : '1.6rem')}
  font-weight: medium;
  font-family: 'Heebo';
  color: var(--shapes-01);
  border-radius: 1rem;

  :hover {
    background: ${(props) =>
      props.model === 'orange'
        ? shade(0.2, '#f25d27')
        : props.model === 'green'
        ? shade(0.2, '#51b853')
        : props.model === 'blue'
        ? shade(0.2, '#115d8c')
        : shade(0.2, '#f25d27')};
  }
`;

export default Container;
