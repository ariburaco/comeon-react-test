import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Disabling SSR, solves the issue of the localStorage not being available in the server side
// Without this, the localStorage is not available in the server side and initial states are not set in the first render at client side
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
