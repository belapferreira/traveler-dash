import styled from 'styled-components';

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
      display: flex;
      justify-content: space-between;
    }

    h1 {
      font-size: 3.6rem;
      font-family: 'Barlow';
      color: var(--textos-títulos);
    }

    button {
      width: 214px;
      height: 48px;
    }
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
    overflow-y: scroll;

    #cards {
      width: 100%;
      max-width: 1120px;
      margin: auto;
      padding-top: 5.85vh;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
      gap: 32px;
      place-items: center;

      .card {
        width: 100%;
      }
    }
  }
`;
