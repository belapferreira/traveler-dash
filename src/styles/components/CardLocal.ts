import styled from 'styled-components';

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  position: relative;

  max-height: 305px;
  height: 100%;
  width: 100%;

  background: var(--shapes-01);
  border: 1px solid var(--shapes-02);
  border-radius: 1.6rem;

  #rate {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 56px;
    padding: 16px;

    position: absolute;
    z-index: 1;

    transform: translate(24px, -20px);

    background: var(--brand-orange);
    color: var(--shapes-01);
    border-radius: 10px;

    svg {
      margin-bottom: 8px;
      font-size: 1.8rem;
    }

    span {
      font-size: 2rem;
    }
  }

  #manage {
    height: 159px;

    position: relative;

    img {
      border-radius: 1.6rem 1.6rem 0 0;
      max-height: 159px;
    }

    #buttons {
      display: flex;
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }

  #name {
    display: flex;
    height: 73px;
    align-items: center;
    border-bottom: 1px solid var(--shapes-02);

    h2 {
      font-size: 2rem;
      color: var(--textos-títulos);
      font-family: 'Barlow';
      font-weight: 600;
      margin-left: 24px;
    }
  }

  #category {
    display: flex;
    height: 73px;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.6rem;
      color: var(--textos);
      font-family: 'Barlow';
      font-weight: 500;
      margin-left: 24px;
    }

    svg {
      font-size: 2.4rem;
      color: var(--brand-orange);
      margin-right: 24px;
    }
  }
`;

export default Container;
