import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Fix to correct style file
import { Container } from '@/styles/pages/city/edit/[slug]';

function DeletelLocal() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.slug}</title>
        <meta name="delete-local" content="Delete local" />
      </Head>

      <Container>
        <header>
          <Header>Delete local</Header>
        </header>

        <aside>
          <Sidebar />
        </aside>

        <main></main>
      </Container>
    </div>
  );
}

export default DeletelLocal;
