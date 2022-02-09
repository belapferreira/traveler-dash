import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: var(--shapes-01);
  padding: 2.4rem;
  border-radius: 1.6rem;
  border: 1px solid var(--shapes-02);

  textarea {
    border: none;
    color: var(--textos);
    width: 100%;
    height: 100%;
    background: inherit;

    &::placeholder {
      color: var(--textos-complemento);
    }
  }
`;

export default Container;
