import type { AppProps } from 'next/app';
import { Provider, useCreateStore } from 'store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <Provider createStore={createStore}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
