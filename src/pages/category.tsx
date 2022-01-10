import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

import { Container } from '@/styles/pages/Category';

const Category: NextPage = () => (
  <div>
    <Head>
      <title>Categories</title>
      <meta name="category" content="List of categories" />
    </Head>

    <Container>
      <Header>
        <h1>Categorias</h1>
      </Header>

      <aside>
        <Sidebar />
      </aside>

      <main></main>
    </Container>
  </div>
);

export default Category;
