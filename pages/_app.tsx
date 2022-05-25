import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import '/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='global_container'>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
