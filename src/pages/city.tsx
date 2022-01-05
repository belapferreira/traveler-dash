import React from 'react';
import Head from 'next/head';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Card from '@/components/Card';

import { useGetCities } from '@/hooks/useGetCities';

import AguasMornasImage from '@/../public/images/aguas-mornas-image.png';

import { Container } from '../styles/pages/City';

function City() {
  const cities = useGetCities();

  return (
    <div>
      <Head>
        <title>Cities</title>
        <meta name="city" content="List of cities" />
      </Head>

      <Container>
        <header>
          <Header>Cidades</Header>
        </header>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <section id="cards">
            {cities.map((city) => (
              <div key={city.id} className="card">
                <Card
                  picture={city.picture}
                  city={city.city}
                  count={
                    city.tourist_attractions + city.food_drink + city.events
                  }
                  href={`/city/details/${city.slug}`}
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

/*
            <Card
              picture={AguasMornasImage}
              city="Águas Mornas"
              count={13}
              href={'/city/details/águas-mornas'}
            />
            <Card
              picture={BombinhasImage}
              city="Bombinhas"
              count={21}
              href={'/city/details/bombinhas'}
            />
            <Card
              picture={BlumenauImage}
              city="Blumenau"
              count={26}
              href={'/city/details/blumenau'}
            />
            <Card
              picture={FlorianopolisImage}
              city="Florianópolis"
              count={98}
              href={'/city/details/florianópolis'}
            />

            <Card
              picture={Imbituba}
              city="Imbituba"
              count={61}
              href={'/city/details/imbituba'}
            />
            <Card
              picture={JaraguaDoSulImage}
              city="Jaragua do sul"
              count={41}
              href={'/city/details/jaragua-do-sul'}
            />
            <Card
              picture={LagesImage}
              city="Lages"
              count={19}
              href={'/city/details/lages'}
            />
            <Card
              picture={RioDoSulImage}
              city="Rio do Sul"
              count={27}
              href={'/city/details/rio-do-sul'}
            />
*/
