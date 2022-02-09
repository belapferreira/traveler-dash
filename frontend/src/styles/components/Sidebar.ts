import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  background: var(--brand-orange);

  padding-top: 2.92vh;

  img {
    min-width: 1.53vw;
    max-width: 1.53vw;
    min-height: 3.33vw;
    max-height: 3.33vw;
  }

  svg {
    font-size: 1.67vw;
    color: var(--shapes-01);
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 1.94vw 4.88vh 1.94vw;
    padding: 0.55vw;

    border: none;
    border-radius: 1rem;
    background: transparent;

    :hover {
      background: ${shade(0.1, '#f25d27')};
    }
  }

  button.noClicked {
    svg {
      color: var(--others-orange-low);
    }
  }
`;

export default Container;
