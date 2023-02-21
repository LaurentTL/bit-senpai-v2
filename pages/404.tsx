import Link from 'next/link';
import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';

export default function FourOhFour() {
    return (
        <>
            <Header />
            <section className="w-screen h-[80vh] flex flex-col gap-28 justify-center items-center">
                <h1 className="text-white w-2/3 text-center md: text-xl">
                    It seems like the page you are looking for doesn&apos;t
                    exist.
                </h1>
                <div className="relative my-6 group">
                    <div className="absolute -inset-0.5 from-skin-first via-skin-second to-skin-third bg-gradient-20 rounded-lg blur opacity-75 group-hover:opacity-100"></div>
                    <Link
                        href="/"
                        className=" text-gray-300 relative px-7 py-4 bg-black rounded-lg leading-none flex items-center outline-none"
                    >
                        Go back home
                    </Link>
                </div>
                {/* <Link href="/" className="text-white"></Link> */}
            </section>
            <Footer />
        </>
    );
}
