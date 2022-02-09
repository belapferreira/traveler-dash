import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowBack } from '@material-ui/icons';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import AddCity from '@/components/AddCity';
import AddLocal from '@/components/AddLocal';

import { Container } from '@/styles/pages/city/new';

function NewCity() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const goNextStep = () => {
    if (step === 2) {
      return;
    } else {
      setStep((value) => value + 1);
    }
  };

  const goBackStep = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep((value) => value - 1);
    }
  };

  return (
    <div>
      <Head>
        <title>New City</title>
        <meta name="new-city" content="Add new city" />
      </Head>

      <Container>
        <Header>
          <div id="left">
            <button id="back" onClick={() => goBackStep()}>
              <ArrowBack />
            </button>
          </div>

          <div id="middle">
            <span>Adicionar um perfil</span>
          </div>

          <div id="right">
            <span>
              <span className={step === 1 ? 'current' : 'regular'}>01 </span>-
              <span className={step === 2 ? 'current' : 'regular'}> 02</span>
            </span>
          </div>
        </Header>

        <aside>
          <Sidebar />
        </aside>

        <main>
          <div id="content">
            {step === 1 && <AddCity goNextStep={goNextStep} />}
            {step === 2 && <AddLocal />}
          </div>
        </main>
      </Container>
    </div>
  );
}

export default NewCity;
