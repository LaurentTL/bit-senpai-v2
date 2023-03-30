import Image from 'next/image';
import Link from 'next/link';
import logoBitSenpai from '../../public/static/logos/bs-logo-gold.svg';

export interface ILogo {}

const Logo: React.FC<ILogo> = () => {
    return (
        <Link href={'/'} passHref className="flex gap-3 items-center h-100">
            <div className="relative h-7 w-7">
                <Image
                    src={logoBitSenpai}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="logo bitsenpai"
                />
            </div>
            <p className="text-xl text-gold">BitSenpai</p>
        </Link>
    );
};

export default Logo;
