import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import { Container } from '../styles/pages/City';

const City: NextPage = () => (
  <div>
    <Head>
      <title>Cities</title>
      <meta name="city" content="List of cities" />
    </Head>

    <Container>
      <Sidebar />
      <Header>Cidades</Header>
    </Container>
  </div>
);

export default City;
