import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import { Container } from '../styles/pages/Category';

const Category: NextPage = () => (
  <div>
    <Head>
      <title>Categories</title>
      <meta name="category" content="List of categories" />
    </Head>

    <Container>
      <Sidebar />
      <Header>Categorias</Header>
    </Container>
  </div>
);

export default Category;
