import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const LeftContainer = styled.div`
  display: block;
  width: 55vw;
  height: 100%;

  position: relative;

  background: var(--shapes-02);
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  width: 45vw;
  padding-top: 4.39vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 280px;
  width: 28.89vw;
  position: relative;


  h1 {
    margin-top: 22.68vh;
    font-family: 'Barlow';
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--textos-títulos);
    margin-bottom: 5.36vh;
  }

  > svg {
    color: var(--textos-complemento);
    font-size: 2.4rem;

    position: absolute;
    top: 0;
    left: 0;
  }

  form {
    #actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2.93vh;
      margin-bottom: 3.9vh;

      a {
          color: var(--textos-complemento);
          font-size: 1.6rem;
          font-family: 'Heebo';
        }

      div {
        display: flex;
        align-items: center;

        input[type='checkbox'] {
          appearance: none;
          width: 1.67vw;
          height: 1.67vw;
          background: var(--shapes-01);
          border: 1px solid var(--shapes-02);
          border-radius: 8px;
        }

        input[type='checkbox']:checked {
          appearance: none;
          width: 1.67vw;
          height: 1.67vw;
          background: var(--others-green);
          border: 1px solid var(--shapes-02);
          border-radius: 8px;
        }

        label {
          margin-left: 1.11vw;
          color: var(--textos-complemento);
          font-size: 1.6rem;
          font-family: 'Heebo';
        }
      }
    }

    #warn {
      display: flex;
      align-items: center;
      margin-top: 10.49vh;

      svg {
        font-size: 3.2rem;
        color: var(--brand-orange);
      }

      span {
        font-size: 1.4rem;
        color: var(--textos);
        margin-left: 1.67vw;
      }

    }
  }

`;
