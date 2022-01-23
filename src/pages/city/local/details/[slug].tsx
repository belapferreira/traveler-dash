import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ArrowBack, WhatsApp } from '@material-ui/icons';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ManageButtons from '@/components/ManageButtons';
import Button from '@/components/Button';

import {
  getLocals,
  getLocalBySlug,
  ILocalParams,
} from '@/services/locals.service';

import { weekDay } from '@/utils/weekDays';

import { Container } from '@/styles/pages/city/local/details/[slug]';

interface ILocalDetail {
  local: ILocalParams[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

function LocalDetail({ local }: ILocalDetail) {
  const router = useRouter();

  const days = local[0].opening;

  const phone = local[0].phone;

  console.log(phone);

  return (
    <div>
      <Head>
        <title>{router.query.slug}</title>
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
              hrefEdit={`/city/local/edit/${local[0].slug}`}
              hrefDelete={`/city/local/delete/${local[0].slug}`}
            />
          </div>
        </Header>

        <aside>
          <Sidebar />
        </aside>

        <main>
          <section id="details">
            <div id="content">
              <div id="city-detail">
                <h1>{local[0].name}</h1>
                <p>{local[0].description}</p>
              </div>

              <div id="opening">
                <div id="opening-title">
                  <h2>Atendimento</h2>
                </div>

                <div id="times">
                  {days.map((day) => (
                    <div key={day.day} className="times-card">
                      <span>{weekDay(day.day)}</span>
                      <strong>
                        {day.status === 'closed'
                          ? 'Fechado'
                          : `${day.start}h - ${day.end}h`}
                      </strong>
                    </div>
                  ))}
                </div>

                <div id="contact">
                  <Button model="green" icon={<WhatsApp />}>
                    Entrar em contato
                  </Button>

                  <div id="phone">
                    <span>Telefone</span>
                    <strong>{local[0].phone}</strong>
                  </div>
                </div>
              </div>

              <div id="address">
                <div id="address-title">
                  <h2>Endereço</h2>
                </div>

                <div id="address-local">
                  <span>{local[0].address}</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div id="picture">
          <Image src={local[0].picture} layout="fill" objectFit="cover" />
        </div>
      </Container>
    </div>
  );
}

export default LocalDetail;

// Dinamic Static Site Generation
export const getStaticPaths: GetStaticPaths = async () => {
  const locals = await getLocals();
  const paths = locals.map((local) => {
    return {
      params: { slug: local.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// Static Site Generation
export const getStaticProps: GetStaticProps<ILocalDetail> = async (context) => {
  const { slug } = context.params as IParams;

  const local = await getLocalBySlug(slug);

  return {
    props: {
      local,
    },
    revalidate: 10,
  };
};
