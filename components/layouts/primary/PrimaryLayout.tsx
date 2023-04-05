import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
    justify?: 'items-center' | 'items-start';
    headerPosition?: '' | 'absolute inset-0 z-10';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
    children,
    justify = 'items-center',
    headerPosition = '',
    ...divProps
}) => {
    return (
        <>
            <Head>
                <title>Bit Senpai</title>
            </Head>
            <div
                {...divProps}
                className={`min-h-screen flex flex-col relative ${justify}`}
            >
                <Header className={headerPosition} />
                <main className="w-full">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default PrimaryLayout;
