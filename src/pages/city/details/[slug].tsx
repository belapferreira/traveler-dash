import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

import { Container } from '../../../styles/pages/city/details/[slug]';

function Detail() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.slug}</title>
        <meta name="detail" content="City selected details" />
      </Head>

      <Container>
        <header><Header>{router.query.slug}</Header></header>
        <aside><Sidebar /></aside>

        <main></main>
      </Container>
    </div>
  )
};

export default Detail;
