import type { AppProps } from 'next/app';
import DataProvider from '@/contexts/DataContext';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
        <GlobalStyles />
        <ToastContainer style={{ fontSize: '1.4rem' }} />
      </DataProvider>
    </>
  );
}

export default MyApp;
