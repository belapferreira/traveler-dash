import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background: var(--shapes-01);
    border: 1px solid var(--shapes-02);

    :hover {
      background: ${shade(0.01, '#dce2e6')};
    }
  }

  #edit {
    margin-right: 4px;
    border-radius: 10px 0 0 10px;
  }

  #delete {
    border-radius: 0 10px 10px 0;
  }

  svg {
    font-size: 20px;
    color: var(--textos);
  }
`;

export default Container;
