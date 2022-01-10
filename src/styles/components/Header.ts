import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: var(--shapes-01);

  border-bottom: 1px solid var(--shapes-02);

  div {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 77.78vw;
  }
`;

export default Container;
