import Head from 'next/head';
import Logo from '../../logo/Logo';

export interface IAuthLayout extends React.ComponentPropsWithoutRef<'main'> {
    title: string;
}

const AuthLayout: React.FC<IAuthLayout> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="flex flex-col md:flex-row-reverse md:h-screen">
                <section className="z-10 flex items-start w-full px-4 mx-auto md:px-0 md:items-center md:w-1/3">
                    <div className="bg-bgblack flex flex-row items-center w-full max-w-sm py-4 mx-auto md:mx-0 my-auto min-w-min relative md:-left-2.5 pt-4 md:py-4 transform origin-left">
                        <div className="py-4">
                            <Logo />
                        </div>
                    </div>
                </section>
                <section className="justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r md:border-gray-600">
                    <div className="w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12">
                        {children}
                    </div>
                </section>
            </main>
        </>
    );
};

export default AuthLayout;
