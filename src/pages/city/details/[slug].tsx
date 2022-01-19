import React, { useState, MouseEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import {
  AddOutlined,
  ArrowBack,
  LocalSeeOutlined,
  FreeBreakfastOutlined,
  CalendarTodayOutlined,
  ErrorOutlineOutlined,
} from '@material-ui/icons';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ManageButtons from '@/components/ManageButtons';
import Button from '@/components/Button';
import CardLocal from '@/components/CardLocal';

import { getCities, getCityBySlug, ICityParams } from '@/services/city.service';
import { getLocalsByCity, ILocalParams } from '@/services/locals.service';

import { categoryIcon } from '@/utils/categoryIcon';

import { Container } from '@/styles/pages/city/details/[slug]';

interface IDetail {
  city: ICityParams[];
  locals: ILocalParams[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

function CityDetail({ city, locals }: IDetail) {
  // Incremental Static Generation
  const router = useRouter();
  const [tabButtonActive, setTabButtonActive] = useState('Todos');

  if (router.isFallback) {
    return <span>Loading...</span>;
  }

  // Four best locals which status is regular
  const localsRegular = locals.filter((local) => local.status === 'regular');
  const localsBetterRatedSorted = localsRegular
    .sort((a, b) => (a.rate < b.rate ? 1 : -1))
    .splice(0, 4);

  // Local which statis is highlighted
  const localHighlighted = locals.filter(
    (local) => local.status === 'highlighted',
  );

  // Locals filtered acconding button selected
  let localsFiltered;

  if (tabButtonActive === 'Todos') {
    localsFiltered = locals;
  } else {
    localsFiltered = locals.filter(
      (localFiltered) => localFiltered.category === tabButtonActive,
    );
  }

  const Icon = categoryIcon(localHighlighted[0].category);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const text = event.target as HTMLElement;
    setTabButtonActive(text.innerText);
  };

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

        <main>
          <div id="cover">
            <Image src={city[0].picture} layout="fill" objectFit="cover" />
          </div>

          <section id="details">
            <div id="city-detail">
              <h1>{city[0].city}</h1>
              <p>{city[0].description}</p>
              <span>{city[0].detail}</span>
            </div>

            <div id="city-data">
              <div className="card">
                <div className="icon">
                  <LocalSeeOutlined />
                </div>
                <div className="data">
                  <strong>{city[0].tourist_attractions}</strong>
                  <span>Pontos turísticos</span>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <FreeBreakfastOutlined />
                </div>
                <div className="data">
                  <strong>{city[0].food_drink}</strong>
                  <span>Comidas e bebidas</span>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <CalendarTodayOutlined />
                </div>
                <div className="data">
                  <strong>{city[0].food_drink}</strong>
                  <span>Eventos organizados</span>
                </div>
              </div>
            </div>
          </section>

          <section id="best-rate">
            <h2>Top avaliados</h2>

            <div id="local-cards">
              {localsBetterRatedSorted.map((local) => (
                <div key={local.id} className="local-card">
                  <CardLocal
                    picture={local.picture}
                    name={local.name}
                    category={local.category}
                    rate={local.rate}
                    href={`/city/local/details/${local.slug}`}
                    hrefEdit={`/city/local/edit/${local.slug}`}
                    hrefDelete={`/city/local/delete/${local.slug}`}
                  />
                </div>
              ))}
            </div>

            <div id="highlighted">
              <div id="info">
                <div id="top">
                  <div id="top-left">
                    <div id="label">
                      <ErrorOutlineOutlined />
                      <span>Destaque</span>
                    </div>
                  </div>

                  <div id="top-right">
                    <Icon />
                    <span>{localHighlighted[0].category}</span>
                  </div>
                </div>

                <h2>{localHighlighted[0].name}</h2>
                <span>{localHighlighted[0].description}</span>
              </div>

              <div id="image">
                <Image
                  src={localHighlighted[0].picture}
                  layout="fill"
                  objectFit="cover"
                />

                <div id="buttons">
                  <ManageButtons
                    hrefEdit={`/city/local/edit/${localHighlighted[0].slug}`}
                    hrefDelete={`/city/local/delete/${localHighlighted[0].slug}`}
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="all">
            <div id="all-locals">
              <div id="filter">
                <h2>Conheça todos</h2>
                <div id="categories">
                  <button
                    id="food_drink"
                    onClick={handleClick}
                    className={
                      tabButtonActive === 'Todos' ? 'active' : 'noActive'
                    }
                  >
                    Todos
                  </button>
                  <button
                    onClick={handleClick}
                    className={
                      tabButtonActive === 'Pontos turísticos'
                        ? 'active'
                        : 'noActive'
                    }
                  >
                    Pontos turísticos
                  </button>
                  <button
                    onClick={handleClick}
                    className={
                      tabButtonActive === 'Comidas e bebidas'
                        ? 'active'
                        : 'noActive'
                    }
                  >
                    Comidas e bebidas
                  </button>
                  <button
                    onClick={handleClick}
                    className={
                      tabButtonActive === 'Eventos organizados'
                        ? 'active'
                        : 'noActive'
                    }
                  >
                    Eventos organizados
                  </button>
                </div>
              </div>

              <div id="local-cards">
                {localsFiltered.map((localFiltered) => (
                  <div key={localFiltered.id} className="local-card">
                    <CardLocal
                      picture={localFiltered.picture}
                      name={localFiltered.name}
                      category={localFiltered.category}
                      rate={localFiltered.rate}
                      href={`/city/local/details/${localFiltered.slug}`}
                      hrefEdit={`/city/local/edit/${localFiltered.slug}`}
                      hrefDelete={`/city/local/delete/${localFiltered.slug}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}

export default CityDetail;

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
  const locals = await getLocalsByCity(city[0].city);

  return {
    props: {
      city,
      locals,
    },
    revalidate: 10,
  };
};
