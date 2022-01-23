import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowBack } from '@material-ui/icons';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import AddCity from '@/components/AddCity';

import { Container } from '@/styles/pages/city/new';

function NewCity() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta name="new-city" content="Add new city" />
      </Head>

      <Container>
        <Header>
          <div id="left">
            <button id="back" onClick={() => router.back()}>
              <ArrowBack />
            </button>
          </div>

          <div id="middle">
            <span>Adicionar um perfil</span>
          </div>

          <div id="right">
            <span>01 - 02</span>
          </div>
        </Header>

        <aside>
          <Sidebar />
        </aside>

        <main>
          <div id="content">
            <AddCity />
          </div>
        </main>
      </Container>
    </div>
  );
}

export default NewCity;
