import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 6.67vw 46.66vw 46.67vw;
  grid-template-rows: 11.71vh 88.29vh;
  grid-template-areas: 'aside header picture' 'aside main picture';
  overflow: hidden;

  header {
    grid-area: header;

    div {
      justify-content: flex-end;
      max-width: 32.22vw;
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
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
    width: 100%;
    overflow: auto;

    #content {
      overflow-y: auto;
      max-width: 32.22vw;
      margin: auto;
    }

    #details {
      width: 100%;
      height: 100%;

      padding-top: 7.8vh;
      padding-bottom: 4.39vh;

      #city-detail {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 3.47vw;
        margin-bottom: 9.76vh;

        h1 {
          font-size: 5.4rem;
          color: var(--textos-títulos);
          font-family: 'Barlow';
          font-weight: 600;
          margin-bottom: 3.9vh;
        }

        p {
          font-size: 2rem;
          color: var(--textos-títulos);
          font-family: 'Heebo';
        }
      }

      #opening {
        max-width: 31.11vw;

        #opening-title {
          border-bottom: 1px solid var(--shapes-02);
        }

        h2 {
          font-size: 2.4rem;
          color: var(--textos-títulos);
          font-family: 'Barlow';
          font-weight: 600;
          margin-bottom: 1.95vh;
        }
      }

      #times {
        display: grid;
        grid-template-columns: repeat(4, minmax(7.22vw, 7.22vw));
        gap: 8px;
        margin-top: 3.9vh;

        .times-card {
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: var(--shapes-01);
          border: 1px solid var(--shapes-02);
          border-radius: 8px;

          > span {
            font-size: 1.6rem;
            color: var(--textos-títulos);
            font-family: 'Barlow';
            margin-bottom: 4px;
          }

          strong {
            font-size: 1.6rem;
            color: var(--textos-títulos);
            font-family: 'Barlow';
            font-weight: bold;
          }
        }
      }

      #contact {
        display: flex;
        align-items: center;
        margin-top: 4.88vh;

        button {
          width: 15.63vw;
          height: 48px;
          margin-right: 32px;

          font-size: 1.6rem;
          font-weight: medium;
          font-family: 'Heebo';

          svg {
            font-size: 2rem;
            margin-right: 16px;
          }
        }

        #phone {
          display: flex;
          flex-direction: column;

          > span {
            font-size: 1.6rem;
            font-family: 'Heebo';
            color: var(--textos);
          }

          > strong {
            font-size: 2rem;
            font-family: 'Barlow';
            font-weight: 600;
            color: var(--textos-títulos);
          }
        }
      }

      #address {
        max-width: 31.11vw;
        margin-top: 9.76vh;
        margin-bottom: 9.76vh;

        #address-title {
          border-bottom: 1px solid var(--shapes-02);
          margin-bottom: 3.9vh;
        }

        h2 {
          font-size: 2.4rem;
          color: var(--textos-títulos);
          font-family: 'Barlow';
          font-weight: 600;
          margin-bottom: 1.95vh;
        }

        #address-local {
          width: 50%;

          span {
            font-size: 1.6rem;
            font-family: 'Heebo';
            color: var(--textos);
          }
        }
      }
    }
  }

  #picture {
    grid-area: picture;
    position: relative;
    overflow: auto;
  }
`;
