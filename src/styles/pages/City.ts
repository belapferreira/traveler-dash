import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 6.67vw 93.33vw;
  grid-template-rows: 11.71vh 88.29vh;
  grid-template-areas: 'aside header' 'aside main';

  header {
    grid-area: header;
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
  }

  #cards {
    width: 90%;
    max-width: 77.78vw;
    margin: auto;
    padding-top: 5.85vh;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 2.22vw;
    place-items: center;
  }
`;
