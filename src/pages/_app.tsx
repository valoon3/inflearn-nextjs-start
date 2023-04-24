import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import SEO from '../../seo.config';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
