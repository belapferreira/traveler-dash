<p align="center">
  <img src="public/images/traveler-dash-symbol.svg" width="30%" alt="Traveler Dash"/>
</p>

<h3 align="center">
  A aplicação em desenvolvimento é um dashboard sobre onde comer e beber, pontos turísticos e eventos de cidades para oferecer informações relevantes a viajantes.
</h3>

</br>

<h3 align="center">
  :construction: In construction :construction:
</h3>

</br>

<p align="center" display="flex">
  <img src="public/images/traveler-login.png" width="30%" max-width="100%"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="public/images/traveler-main.png" width="30%" max-width="100%" />
</p>

</br>

<p align="center">
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#heavy_check_mark-configurações-necessárias">Configurações necessárias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_down_small-clonando-o-repositório">Clonando o repositório</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#beginner-iniciando-o-servidor-fake">Iniciando o servidor fake</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-o-frontend">Iniciando o frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tecnologias--ferramentas--recursos">Tecnologias | Ferramentas | Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>
</p>

### Features

- Página de login - **Iniciado** | _Incluir validações e autenticação_;
- Página de listagem e exibição de cidades - **Feita**;
- Página de detalhes da cidade selecionada - **Feita**;
- Página de detalhes do local selecionado - **Iniciado**;
- Criação de nova cidade - **Feito parcialmente** | _Ajustar validação de imagens, checkbox, mapa e campos condicionais_;
- Criação de novo local - **Iniciado**;
- Edição de cidade - **Não iniciado**;
- Edição de local - **Não iniciado**;
- Exclusão de cidade - **Não iniciado**;
- Exclusão de local - **Não iniciado**;
- Página de listagem de categorias - **Não iniciado**;
- Criação de nova categoria - **Não iniciado**;
- Edição de categoria - **Não iniciado**;
- Exclusão de cidade - **Não iniciado**;
- Página de listagem e gestão de depoimentos - **Não iniciado**;
- Exclusão de depoimento - **Não iniciado**.

### :heavy_check_mark: Configurações necessárias

- [Git](https://git-scm.com)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### :arrow_down_small: Clonando o repositório

1. Pelo terminal, acesse o diretório em que deseja ter o repositório clonado e execute o comando a seguir.

```bash
# clonando o repositório
git clone https://github.com/belapferreira/traveler-dash
```

### :beginner: Iniciando os servidores fake

1. Acesse a pasta backend do diretório do repositório clonado usando o terminal e execute os comandos abaixo em abas diferentes com exceção do primeiro.

```bash
# instalando as dependências
yarn install

# iniciando o servidor de dados fake criado com json-server
yarn json-server

# iniciando o servidor de upload de imagens
yarn file-server
```

### :computer: Iniciando o frontend

1. Pelo terminal, acesse a pasta frontend do diretório do repositório clonado e execute os seguintes comandos separadamente.

```bash
# instalando as dependências
yarn install

# iniciando a aplicação
yarn dev
```

### :wrench: Tecnologias | Ferramentas | Recursos

Esse projeto foi desenvolvido utilizando os seguintes recursos:

Geral

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

Server

- [cors](https://www.npmjs.com/package/cors)
- [express](https://expressjs.com/pt-br/)
- [multer](https://github.com/expressjs/multer)
- [nodemon](https://github.com/remy/nodemon)
- [json-server](https://github.com/typicode/json-server)

Frontend

- [@hookform/error-message](https://www.npmjs.com/package/@hookform/error-message)
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
- [@material-ui/icons](https://mui.com/pt/components/material-icons/)
- [axios](https://github.com/axios/axios)
- [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)
- [next](https://nextjs.org/)
- [polished](https://polished.js.org/)
- [react](https://pt-br.reactjs.org/)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-hook-form](https://react-hook-form.com/)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [styled-components](https://styled-components.com/)
- [typescript](https://www.typescriptlang.org/)
- [yup](https://github.com/jquense/yup)

### :memo: License

Esse projeto está sob MIT license. Veja [LICENSE](https://github.com/belapferreira/traveler-dash/blob/master/LICENSE) para mais informações.

---

Feito por Bela Ferreira :blue_heart: Contato: https://www.linkedin.com/in/belapferreira :blush:
