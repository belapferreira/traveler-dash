import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.2rem;
  background: var(--brand-orange);
  border-radius: 1rem;

  :hover {
    background: ${shade(0.2, '#f25d27')}
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--shapes-01);
  }
`;

export default Container;
