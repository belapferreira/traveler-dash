import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

import { Container } from '../styles/pages/Feedback';

const Main: NextPage = () => (
  <div>
    <Head>
      <title>Feedbacks</title>
      <meta name="feedback" content="List of feedbacks" />
    </Head>

    <Container>
      <Header>
        <h1>Feedbacks</h1>
      </Header>

      <aside>
        <Sidebar />
      </aside>

      <main></main>
    </Container>
  </div>
);

export default Main;
