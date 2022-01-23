import React from 'react';
import { ErrorOutlineOutlined } from '@material-ui/icons';

import Input from '@/components/Input';
import Button from '@/components/Button';

import { categoryIcon } from '@/utils/categoryIcon';

import Container from '@/styles/components/AddLocal';

function AddLocal() {
  const IconFoodCategory = categoryIcon('Comidas e bebidas');
  const IconPlaceCategory = categoryIcon('Pontos turísticos');
  const IconEventCategory = categoryIcon('Eventos organizados');

  return (
    <Container>
      <div id="title">
        <div>02</div>
        <h1>Adicione um local</h1>
      </div>

      <div id="content">
        <div id="sub-title">
          <h2>Dados Básicos</h2>
        </div>

        <div id="local">
          <p>Nome da local</p>
          <Input type="single" />
        </div>

        <p>Foto do local</p>
        <div id="picture">
          <span>+ Adicionar uma foto</span>
        </div>

        <p>Descrição do local</p>
        <div id="description">
          <span>Máximo 320 caracteres</span>
          <Input type="single" />
        </div>

        <p>Selecione uma categoria</p>
        <div id="category">
          <div className="category-card">
            <div id="top-category-card">
              <IconFoodCategory />
              <input
                type="checkbox"
                id="food_drink"
                value="Comidas e bebidas"
              />
            </div>
            <div id="bottom-category-card">
              Comida <br></br> e Bebida
            </div>
          </div>

          <div className="category-card">
            <div id="top-category-card">
              <IconPlaceCategory />
              <input
                type="checkbox"
                id="tourist_attractions"
                value="Pontos turísticos"
              />
            </div>
            <div id="bottom-category-card">
              Pontos <br></br> Turísticos
            </div>
          </div>

          <div className="category-card">
            <div id="top-category-card">
              <IconEventCategory />
              <input type="checkbox" id="events" value="Eventos organizados" />
            </div>
            <div id="bottom-category-card">
              Eventos <br></br> Organizados
            </div>
          </div>
        </div>

        <div id="address">
          <h2>Endereço</h2>
        </div>

        <div id="address-content">
          <div id="top-address">
            <div id="CEP">
              <p>CEP</p>
              <Input type="single" />
            </div>

            <div id="street">
              <p>Rua</p>
              <Input type="single" />
            </div>
          </div>

          <div id="bottom-address">
            <div id="neighborhood">
              <p>Bairro</p>
              <Input type="single" />
            </div>

            <div id="number">
              <p>Número</p>
              <Input type="single" />
            </div>
          </div>
        </div>

        <div id="bottom">
          <div id="warn">
            <ErrorOutlineOutlined />
            <span>
              Preencha todos os <br></br> dados com cuidado
            </span>
          </div>

          <Button model="green">Concluir cadastro</Button>
        </div>
      </div>
    </Container>
  );
}

export default AddLocal;
