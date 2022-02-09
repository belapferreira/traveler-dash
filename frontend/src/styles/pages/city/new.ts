import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: 6.67vw 93.33vw;
  grid-template-rows: 11.71vh 88.29vh;
  grid-template-areas: 'aside header' 'aside main';

  header {
    grid-area: header;

    div {
      width: 100%;
      justify-content: space-between;
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

    #middle {
      display: flex;
      justify-content: center;
      width: 100%;

      span {
        font-size: 2rem;
        font-weight: 500;
        font-family: 'Barlow';
        color: var(--textos-complemento);
      }
    }

    #right {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      span {
        font-size: 1.2rem;
        font-family: 'Barlow';
        color: var(--textos-complemento);
      }

      span.current {
        font-size: 1.2rem;
        font-family: 'Barlow';
        color: var(--textos);
        font-weight: 700;
      }
    }
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
    overflow-y: scroll;

    #content {
      display: flex;

      width: 100%;
      max-width: 800px;

      margin: auto;
    }
  }
`;
