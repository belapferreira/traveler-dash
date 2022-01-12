import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 6.67vw 93.33vw;
  grid-template-rows: 11.71vh 88.29vh;
  grid-template-areas: 'aside header' 'aside main';

  header {
    grid-area: header;

    div {
      justify-content: flex-end;
    }

    #left {
      display: flex;
      justify-content: flex-start;

      #back {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        background: var(--shapes-01);
        border: 1px solid var(--shapes-02);
        border-radius: 10px;

        :hover {
          background: ${shade(0.01, '#dce2e6')};
        }

        svg {
          font-size: 20px;
          color: var(--textos);
        }
      }
    }

    #right {
      button {
        margin-left: 1.67vw;
        max-width: 14.86vw;
        max-height: 5.85vh;
      }
    }
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;

    #cover {
      position: relative;
      height: 41.46vh;
    }

    #details {
      display: flex;

      width: 100%;
      max-width: 77.78vw;
      margin: auto;

      margin-top: 9.76vh;

      #city-detail {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 3.47vw;

        h1 {
          font-size: 5.4rem;
          color: var(--textos-títulos);
          font-family: 'Barlow';
          font-weight: 600;
          margin-bottom: 4.88vh;
        }

        p {
          font-size: 2rem;
          color: var(--textos-títulos);
          font-family: 'Heebo';
          margin-bottom: 3.9vh;
        }

        span {
          font-size: 1.6rem;
          color: var(--textos);
          font-family: 'Heebo';
          margin-bottom: 3.9vh;
        }
      }
    }

    #city-data {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      > div + div {
        margin-left: 16px;
      }

      .card {
        display: block;
        min-width: 11.11vw;

        .icon {
          border-radius: 20px 20px 0 0;
          border: 1px solid var(--shapes-02);

          svg {
            color: var(--brand-orange);
            font-size: 40px;
            margin: 32px 0 32px 32px;
          }
        }

        .data {
          display: flex;
          flex-direction: column;
          border-radius: 0 0 20px 20px;
          border: 1px solid var(--shapes-02);
          padding: 32px 0 32px 32px;

          strong {
            font-size: 5.4rem;
            color: var(--textos-títulos);
            font-family: 'Barlow';
            font-weight: 600;
            margin-bottom: 1.95vh;
          }

          span {
            font-size: 1.6rem;
            color: var(--textos);
            font-family: 'Heebo';
            width: 4.93vw;
          }
        }
      }
    }
  }
`;
