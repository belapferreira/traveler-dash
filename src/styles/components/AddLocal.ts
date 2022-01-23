import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: var(--shapes-01);

  border: 1px solid var(--shapes-02);
  border-radius: 16px;
  margin-top: 5.85vh;
  margin-bottom: 9.76vh;

  #title {
    display: flex;
    justify-content: flex-start;
    place-items: center;
    padding: 4.88vh 4.44vw;
    height: 17.44vh;
    border-radius: 16px 16px 0 0;
    border-bottom: 1px solid var(--shapes-02);

    background: linear-gradient(
      to right bottom,
      rgba(245, 255, 245, 1),
      rgba(220, 245, 221, 0)
    );

    div {
      display: flex;
      place-items: center;
      justify-content: center;
      height: 64px;
      width: 64px;
      border-radius: 10px;
      background: var(--others-green);
      font-size: 2.4rem;
      font-family: 'Barlow';
      font-weight: 600;
      color: var(--shapes-01);
    }

    h1 {
      font-size: 3.6rem;
      font-family: 'Barlow';
      font-weight: 600;
      color: var(--others-green);

      margin-left: 2.77vw;
    }
  }

  #content {
    display: flex;
    flex-direction: column;
    padding: 5.85vh 4.44vw;

    #sub-title,
    #address {
      border-bottom: 1px solid var(--shapes-02);

      h2 {
        font-size: 2.4rem;
        font-family: 'Barlow';
        font-weight: 500;
        color: var(--textos-títulos);
        margin-bottom: 1.95vh;
      }
    }

    p {
      font-size: 1.4rem;
      font-family: 'Heebo';
      color: var(--textos);
      margin-bottom: 1.22vh;
      margin-top: 2.93vh;
    }

    input {
      background: var(--background);
    }

    #local {
      > div {
        background: var(--background);
        border-radius: 10px;
      }
    }

    #picture {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--background);
      height: 19.51vh;
      border: 1px dashed var(--shapes-02);
      border-radius: 10px;

      > span {
        color: var(--brand-orange);
        font-size: 1.6rem;
        font-family: 'Heebo';
      }
    }

    #description {
      position: relative;
      margin-bottom: 1.95vh;

      > div {
        background: var(--background);
        height: 24.63vh;
        border-radius: 10px;
      }

      > span {
        position: absolute;
        bottom: 0;
        right: 0;

        margin-right: 1.11vw;
        margin-bottom: 0.98vh;

        color: var(--textos-complemento);
        font-size: 1.2rem;
        font-family: 'Heebo';
      }
    }

    #category {
      display: flex;
      width: 100%;
      margin-bottom: 7.8vh;

      .category-card {
        background: var(--background);
        border-radius: 10px;
        border: 1px solid var(--shapes-02);
      }

      .category-card + .category-card {
        margin-left: 1.11vw;
      }

      #top-category-card {
        display: flex;
        width: 100%;
        padding: 2.93vh;
        border-bottom: 1px solid var(--shapes-02);

        svg {
          font-size: 4rem;
          color: var(--brand-orange);
        }

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
      }

      #bottom-category-card {
        padding: 2.93vh;
        font-size: 2rem;
        color: var(--textos-títulos);
        font-family: 'Barlow';
        font-weight: 600;
      }
    }

    #address-content {
      #top-address {
        display: flex;
        width: 100%;

        div + div {
          margin-left: 1.11vw;
        }

        #CEP {
          width: 26%;

          input {
            max-width: 100%;
          }
        }
      }

      #bottom-address {
        display: flex;
        width: 100%;

        div + div {
          margin-left: 1.11vw;
        }

        #number {
          width: 24.2%;

          input {
            max-width: 100%;
          }
        }
      }

      #CEP,
      #street,
      #neighborhood,
      #number {
        > div {
          background: var(--background);
          border-radius: 10px;
          border: 1px solid var(--shapes-02);
        }
      }
    }

    #bottom {
      display: flex;
      margin-top: 5.85vh;

      button {
        width: 240px;
        height: 48px;
        font-size: 1.6rem;
        font-family: 'Heebo';
        font-weight: medium;
      }
    }

    #warn {
      display: flex;
      align-items: center;
      justify-content: flex-start;

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

export default Container;
