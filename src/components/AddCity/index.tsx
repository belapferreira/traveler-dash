import React from 'react';
import { ErrorOutlineOutlined } from '@material-ui/icons';

import Input from '@/components/Input';
import Button from '@/components/Button';

import Container from '@/styles/components/AddCity';

function AddCity() {
  return (
    <Container>
      <div id="title">
        <div>01</div>
        <h1>Adicione uma cidade</h1>
      </div>

      <div id="content">
        <div id="sub-title">
          <h2>Dados da cidade</h2>
        </div>

        <div id="city">
          <p>Nome da cidade</p>
          <Input type="single" />
        </div>

        <p>Foto da cidade</p>
        <div id="picture">
          <span>+ Adicionar uma foto</span>
        </div>

        <p>Descrição da cidade</p>
        <div id="description">
          <span>Máximo 320 caracteres</span>
          <Input type="single" />
        </div>

        <div id="bottom">
          <div id="warn">
            <ErrorOutlineOutlined />
            <span>
              Preencha todos os <br></br> dados com cuidado
            </span>
          </div>

          <Button model="blue">Próximo</Button>
        </div>
      </div>
    </Container>
  );
}

export default AddCity;
