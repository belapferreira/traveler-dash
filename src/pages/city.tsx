import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AddOutlined } from '@material-ui/icons';

import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CardCity from '@/components/CardCity';

import { useGetCities } from '@/hooks/useGetCities';

import { Container } from '../styles/pages/City';

function City() {
  const cities = useGetCities();
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Cities</title>
        <meta name="city" content="List of cities" />
      </Head>

      <Container>
        <Header>
          <h1>Cidades</h1>
          <Button
            model="green"
            icon={<AddOutlined />}
            onClick={() => router.push('/city/new')}
          >
            Adicionar um perfil
          </Button>
        </Header>

        <aside>
          <Sidebar />
        </aside>

        <main>
          <section id="cards">
            {cities.map((city) => (
              <div key={city.id} className="card">
                <CardCity
                  picture={city.picture}
                  city={city.city}
                  count={
                    city.tourist_attractions + city.food_drink + city.events
                  }
                  href={`/city/details/${city.slug}`}
                  hrefEdit={`/city/edit/${city.slug}`}
                  hrefDelete={`/city/delete/${city.slug}`}
                />
              </div>
            ))}
          </section>
        </main>
      </Container>
    </div>
  );
}

export default City;

// Server Side Rendering
/*
  import { GetServerSideProps } from 'next';
  import { getCities, IDataParams } from '@/services/city.service';

  interface ICities {
    cities: IDataParams[];
  }

  function City({ cities }: ICities) {}

  export const getServerSideProps: GetServerSideProps<ICities> = async () => {
    const cities = await getCities();

    return {
      props: {
        cities,
      },
    };
  };
*/
