import Image from 'next/image';
import Link from 'next/link';
import logoBitSenpai from '../../../public/static/logos/bs-logo-gold.svg';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
    let dateY = new Date().getFullYear();

    return (
        <footer
            {...footerProps}
            className={`w-full px-3 border-t-[1px] border-gray-600 pt-8 ${className} md:px-24`}
        >
            <div className="container w-full grid">
                <div className="grid w-full grid-cols-2 gap-y-4 md:grid-cols-3">
                    <div className="flex flex-col">
                        <div className="relative w-10 h-10">
                            <Link href="/" passHref>
                                <Image
                                    src={logoBitSenpai}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    alt="logo bitsenpai"
                                />
                            </Link>
                        </div>
                        <p className="mt-3 font-light text-gray-600">
                            by LaurentTL <br /> frontend developer
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-gray-400 mb-3">BitSenpai</h2>
                        <Link href="/" legacyBehavior>
                            <a className="text-white font-light hover:text-blue-300">
                                About
                            </a>
                        </Link>
                        <Link href="/" legacyBehavior>
                            <a className="text-white font-light hover:text-blue-300">
                                Technologies
                            </a>
                        </Link>
                        <a
                            href="https://github.com/LaurentTL/bit-senpai-v2"
                            className="text-white font-light hover:text-blue-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-gray-400 mb-3">Get in touch</h2>
                        <p className="text-white font-light">
                            +33 6 58 03 83 64
                        </p>

                        <Link
                            href="mailto:laurent.treuil@gmail.com"
                            legacyBehavior
                        >
                            <a className="text-white font-light hover:text-blue-300">
                                Email
                            </a>
                        </Link>
                        <Link href="/" legacyBehavior>
                            <a className="text-white font-light hover:text-blue-300">
                                LinkedIn
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 mb-4">
                <p className="text-gray-400 font-light text-xs">
                    © {dateY} BitSenpai | LaurentTL. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
