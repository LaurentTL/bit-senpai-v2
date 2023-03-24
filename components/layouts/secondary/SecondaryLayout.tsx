import Head from 'next/head';

export interface ISecondaryLayout
    extends React.ComponentPropsWithoutRef<'div'> {
    justify?: 'items-center' | 'items-start';
}

const SecondaryLayout: React.FC<ISecondaryLayout> = ({
    children,
    justify = 'items-center',
    ...divProps
}) => {
    return (
        <>
            <Head>
                <title>Bit Senpai</title>
            </Head>
            <div
                {...divProps}
                className={`min-h-screen flex flex-col ${justify}`}
            >
                <main className="px-5 w-full">{children}</main>
                <div className="m-auto" />
            </div>
        </>
    );
};

export default SecondaryLayout;
