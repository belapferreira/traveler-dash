import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArrowBack, VisibilityOutlined, ErrorOutlineOutlined } from '@material-ui/icons';
import { Form } from '@unform/web';

import Input from '../components/Input';
import Button from '../components/Button';

import SignInImage from '../../public/images/background-login-image.png';

import { Container, LeftContainer, RightContainer, Content } from '../styles/pages/SignIn';

function SignIn() {
  const router = useRouter();

  function handleClick() {
    router.push('/city');
  }

  return (
    <div>
      <Head>
        <title>Sign in</title>
        <meta name="sign in" content="Sign in page" />
      </Head>

      <Container>
        <LeftContainer>
          <Image src={SignInImage} layout='fill' objectFit='cover' />
        </LeftContainer>

        <RightContainer>
          <Content>
            <ArrowBack />
            <h1>Fazer login</h1>

            <Form onSubmit={() => { }}>
              <section id='inputs'>
                <Input type='top' placeholder='E-mail' />
                <Input type='bottom' placeholder='Senha' icon={<VisibilityOutlined />} />
              </section>

              <section id='actions'>
                <div>
                  <input type='checkbox' id='remember-me' value='remember-me' />
                  <label htmlFor='remember-me'>Lembrar-me</label>
                </div>

                <a href="">Esqueci minha senha</a>
              </section>

              <Button onClick={handleClick} model='orange'>Acessar a plataforma</Button>

              <section id='warn'>
                <ErrorOutlineOutlined />
                <span>Acesso restrito à <br></br> sócios e moderadores</span>
              </section>

            </Form>

          </Content>
        </RightContainer>
      </Container>
    </div>
  )
};

export default SignIn;
