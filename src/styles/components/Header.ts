import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 77.78vw;
  }

  width: 100%;
  height: 11.71vh;
  background: var(--shapes-01);

  border-bottom: 1px solid var(--shapes-02);

  h1 {
    font-size: 3.6rem;
    font-family: 'Barlow';
    color: var(--textos-títulos);
  }

  button {
    background: var(--others-green);
    max-width: 14.86vw;
    max-height: 5.85vh;
  }
`;

export default Container;
