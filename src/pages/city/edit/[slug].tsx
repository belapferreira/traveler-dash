import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

import { Container } from '@/styles/pages/city/edit/[slug]';

function EditCity() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.slug}</title>
        <meta name="edit-city" content="Edit city" />
      </Head>

      <Container>
        <header>
          <Header>Edit city</Header>
        </header>

        <aside>
          <Sidebar />
        </aside>

        <main></main>
      </Container>
    </div>
  );
}

export default EditCity;
