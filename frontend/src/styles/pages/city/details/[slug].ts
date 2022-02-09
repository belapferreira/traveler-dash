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
      max-width: 1120px;
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
          width: 160px;

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
            padding: 2.22vw;

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
            }
          }
        }
      }
    }

    #best-rate {
      max-width: 1120px;
      margin: auto;
      padding-top: 5.85vh;

      > h2 {
        font-size: 3.6rem;
        color: var(--textos-títulos);
        margin-bottom: 5.85vh;
      }

      #local-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 256px));
        gap: 32px;
        place-items: center;

        .local-card {
          width: 100%;
        }
      }
    }

    #highlighted {
      display: flex;
      margin-top: 9.76vh;
      margin-bottom: 9.76vh;

      background: var(--shapes-01);
      border-radius: 16px;
      border: 1px solid var(--shapes-02);

      #info {
        width: 50%;
        padding: 46px 60px 46px 64px;

        > h2 {
          font-size: 3.6rem;
          color: var(--textos-títulos);
          font-family: 'Barlow';
          font-weight: 600;
          margin-bottom: 16px;
        }

        > span {
          font-size: 1.6rem;
          color: var(--textos);
          font-family: 'Heebo';
          line-height: 26px;
        }

        #top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;

          #label {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            border-radius: 100px;
            background: var(--brand-orange);
            color: var(--shapes-01);
            padding: 8px;

            svg {
              font-size: 2rem;
            }

            span {
              font-size: 1.4rem;
              margin-left: 8px;
            }
          }

          #top-right {
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              font-size: 2.4rem;
              color: var(--brand-orange);
            }

            span {
              font-size: 1.6rem;
              font-family: 'Barlow';
              font-weight: 500;
              color: var(--textos);
              margin-left: 32px;
            }
          }
        }
      }

      #image {
        position: relative;
        height: 34.88vh;
        min-height: 286px;
        width: 50%;

        img {
          border-radius: 0 16px 16px 0;
        }

        #buttons {
          position: absolute;
          z-index: 1;
          top: 16px;
          right: 16px;
        }
      }
    }

    #all {
      margin-bottom: 9.76vh;

      #all-locals {
        max-width: 1120px;
        margin: auto;

        #filter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5.85vh;

          > h2 {
            font-size: 3.6rem;
            color: var(--textos-títulos);
          }

          #categories {
            border-bottom: 1px solid var(--shapes-02);

            button {
              background: var(--background);
              border: none;
              font-size: 1.6rem;
              font-family: 'Heebo';
              color: var(--textos);
              padding-bottom: 12px;
            }

            button.active {
              border-bottom: 2px solid var(--brand-orange);
            }

            button + button {
              margin-left: 32px;
            }
          }
        }

        #local-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(256px, 256px));
          gap: 32px;
          place-items: center;

          .local-card {
            width: 100%;
          }
        }
      }
    }
  }
`;
