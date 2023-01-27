import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../state/auth/AuthContext';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, session, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
    </SessionProvider>
  );
}

export default MyApp;
