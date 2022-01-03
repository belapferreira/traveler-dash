import styled from 'styled-components';

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;

  max-height: 266px;
  height: 100%;
  max-width: 256px;
  width: 100%;

  background: var(--shapes-01);
  border: 1px solid var(--shapes-02);
  border-radius: 1.6rem;

  #manage {
    display: block;
    height: 100%;
    max-height: 159px;

    position: relative;

    img {
      border-radius: 1.6rem 1.6rem 0 0;
      max-height: 159px;
    }
  }

  #details {
    padding: 2.4rem;
    height: 100%;
    max-height: 107px;

    h2 {
      font-size: 2rem;
      font-family: 'Barlow';
      font-weight: 'semibold';
      color: var(--textos-títulos);
      line-height: 3rem;
    }

    span {
      font-size: 1.6rem;
      color: var(--textos);
      line-height: 2.8rem;
    }
  }
`;

export default Container;
