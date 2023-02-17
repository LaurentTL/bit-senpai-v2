import Image from 'next/image';
import logoBitSenpai from '../../public/static/images/logo.svg';

export interface ILogo {}

const Logo: React.FC<ILogo> = () => {
  return (
    <div className="flex gap-3 items-center h-100">
      <div className="relative h-7 w-7">
        <Image
          src={logoBitSenpai}
          fill
          style={{ objectFit: 'contain' }}
          alt="logo bitsenpai"
        />
      </div>
      <p className="font-bold text-xl text-white">BitSenpai</p>
    </div>
  );
};

export default Logo;
