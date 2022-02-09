import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 19.51vh;

  #selected-image {
    position: relative;
    height: 100%;
    width: 100%;

    background: var(--background);

    border: 1px dashed var(--shapes-02);
    border-radius: 10px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;

      object-fit: cover;
    }

    button {
      position: absolute;
      top: 1rem;
      right: 1rem;

      font-size: 1.5rem;
      font-family: 'Heebo';
      color: var(--brand-orange);

      width: 104px;
      background: var(--background);
      border: 1px dashed var(--shapes-02);
      border-radius: 4px;
    }
  }

  #image-uploader {
    height: 100%;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      background: var(--background);

      border: 1px dashed var(--shapes-02);
      border-radius: 10px;
    }

    label {
      font-size: 1.5rem;
      font-family: 'Heebo';
      color: var(--brand-orange);
    }

    input {
      display: none;
    }
  }
`;

export default Container;
