import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Bases } from 'src/ components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Bases.Layout>
      <Component {...pageProps} />
    </Bases.Layout>
  );
}

export default MyApp;
