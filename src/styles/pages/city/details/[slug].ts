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
  }
`;
