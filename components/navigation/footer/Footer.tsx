import Image from 'next/image';
import Link from 'next/link';
import logoBitSenpai from '../../../public/static/images/logo.svg';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={`w-full px-3 ${className}`}>
      <div className="container w-full grid">
        <div className="grid w-full grid-cols-2 gap-y-4 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="relative w-10 h-10">
              <Link href="/">
                <a>
                  <Image
                    src={logoBitSenpai}
                    layout="fill"
                    objectFit="contain"
                    alt="logo bitsenpai"
                  />
                </a>
              </Link>
            </div>
            <p className="mt-3 font-light text-gray-600">
              by LaurentTL <br /> frontend developer
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-400 mb-3">BitSenpai</h2>
            <Link href="/">
              <a className="text-white font-light hover:text-blue-300">About</a>
            </Link>
            <Link href="/">
              <a className="text-white font-light hover:text-blue-300">
                Technologies
              </a>
            </Link>
            <Link href="https://github.com/LaurentTL/bit-senpai-v2">
              <a className="text-white font-light hover:text-blue-300">
                GitHub
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-400 mb-3">Get in touch</h2>
            <p className="text-white font-light">+33 6 58 03 83 64</p>

            <Link href="mailto:laurent.treuil@gmail.com">
              <a className="text-white font-light hover:text-blue-300">Email</a>
            </Link>
            <Link href="/">
              <a className="text-white font-light hover:text-blue-300">
                LinkedIn
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-4">
        <p className="text-gray-400 font-light text-xs">
          ?? 2022 BitSenpai | LaurentTL. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
