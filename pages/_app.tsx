import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../state/auth/AuthContext';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
    session: any;
}

function MyApp({ Component, session, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <SessionProvider session={session}>
            <AuthProvider>
                {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
            <Toaster />
        </SessionProvider>
    );
}

export default MyApp;
