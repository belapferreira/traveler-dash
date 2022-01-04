import React from 'react';
import Head from 'next/head';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';

import AguasMornasImage from '../../public/images/águas-mornas-image.png';
import BombinhasImage from '../../public/images/bombinhas-image.png';
import BlumenauImage from '../../public/images/blumenau-image.png';
import FlorianopolisImage from '../../public/images/florianópolis-image.png';
import Imbituba from '../../public/images/imbituba-image.png';
import JaraguaDoSulImage from '../../public/images/jaragua-do-sul-image.png';
import LagesImage from '../../public/images/lages-image.png';
import RioDoSulImage from '../../public/images/rio-do-sul-image.png';

import { Container } from '../styles/pages/City';

function City() {
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
          </section>
        </main>
      </Container>
    </div>
  );
}

export default City;
