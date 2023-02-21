import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer />
            <AuthProvider>
                {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
        </SessionProvider>
    );
}

export default MyApp;
