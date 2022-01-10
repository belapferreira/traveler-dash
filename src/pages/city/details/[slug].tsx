import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { AddOutlined, ArrowBack } from '@material-ui/icons';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ManageButtons from '@/components/ManageButtons';
import Button from '@/components/Button';

import { getCities, getCityBySlug, IDataParams } from '@/services/city.service';

import { Container } from '@/styles/pages/city/details/[slug]';

interface IDetail {
  city: IDataParams[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

function Detail({ city }: IDetail) {
  // Incremental Static Generation
  const router = useRouter();

  if (router.isFallback) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Head>
        <title>{city[0].city}</title>
        <meta name="detail" content="City selected details" />
      </Head>

      <Container>
        <Header>
          <div id="left">
            <button id="back" onClick={() => router.back()}>
              <ArrowBack />
            </button>
          </div>

          <div id="right">
            <ManageButtons
              hrefEdit={`/city/edit/${city[0].slug}`}
              hrefDelete={`/city/delete/${city[0].slug}`}
            />

            <Button model="green" icon={<AddOutlined />}>
              Adicionar um local
            </Button>
          </div>
        </Header>

        <aside>
          <Sidebar />
        </aside>

        <main></main>
      </Container>
    </div>
  );
}

export default Detail;

// Dinamic Static Site Generation
export const getStaticPaths: GetStaticPaths = async () => {
  const cities = await getCities();
  const paths = cities.map((city) => {
    return {
      params: { slug: city.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// Static Site Generation
export const getStaticProps: GetStaticProps<IDetail> = async (context) => {
  const { slug } = context.params as IParams;

  const city = await getCityBySlug(slug);

  return {
    props: {
      city,
    },
    revalidate: 10,
  };
};
