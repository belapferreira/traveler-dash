import styled from 'styled-components';

import { IInputProps } from '@/components/Input';

const Container = styled.div<IInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.2rem;
  background: var(--shapes-01);
  padding: 2.4rem;
  border-radius: ${(props) =>
    props.type === 'top'
      ? '1.6rem 1.6rem 0 0'
      : props.type === 'bottom'
      ? '0 0 1.6rem 1.6rem'
      : '1.6rem'};
  border: 1px solid var(--shapes-02);
  border-top: ${(props) =>
    props.type === 'bottom' ? '0' : '1px solid var(--shapes-02)'};

  input {
    border: none;
    color: var(--textos);

    &::placeholder {
      color: var(--textos-complemento);
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    color: var(--textos-complemento);
    font-size: 2.4rem;
  }
`;

export default Container;
