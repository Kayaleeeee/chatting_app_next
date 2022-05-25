import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import Head from 'next/head';
import '/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='global_container'>
      <Head>
        <title>Zigzag chatting</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
