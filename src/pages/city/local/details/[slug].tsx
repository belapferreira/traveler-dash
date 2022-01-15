import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Detail() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.slug}</title>
        <meta name="detail" content="City selected details" />
      </Head>

      <h1>{router.query.slug}</h1>
    </div>
  );
}

export default Detail;
