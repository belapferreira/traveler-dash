import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

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
    overflow-y: scroll;

    #cover {
      position: relative;
      height: 41.46vh;
      width: 100%;
    }

    #details {
      display: flex;

      width: 100%;
      max-width: 77.78vw;
      height: 46.83vh;

      margin: auto;

      padding-top: 9.76vh;
      padding-bottom: 4.39vh;

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
        }
      }

      #city-data {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;

        > div + div {
          margin-left: 16px;
        }

        .card {
          display: block;
          min-width: 11.11vw;

          .icon {
            border-radius: 20px 20px 0 0;
            border: 1px solid var(--shapes-02);
            border-bottom: 0;

            svg {
              color: var(--brand-orange);
              font-size: 40px;
              margin: 3.9vh 0 3.9vh 3.9vh;
            }
          }

          .data {
            display: flex;
            flex-direction: column;
            border-radius: 0 0 20px 20px;
            border: 1px solid var(--shapes-02);
            padding: 3.9vh 0 3.9vh 3.9vh;

            strong {
              font-size: 4rem;
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

    #best-rate {
      max-width: 77.78vw;
      margin: auto;
      padding-top: 5.85vh;

      > h2 {
        font-size: 3.6rem;
        color: var(--textos-títulos);
        margin-bottom: 5.85vh;
      }

      #local-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2.22vw;
        place-items: center;

        .local-card {
          width: 100%;
        }
      }
    }
  }
`;
