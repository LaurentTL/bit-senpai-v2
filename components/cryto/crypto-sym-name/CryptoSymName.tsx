import Image from 'next/image';

export interface ICryptoSymName {
  imageUrl: string;
  name: string;
  sym: string;
}

const CryptoSymName: React.FC<ICryptoSymName> = ({ imageUrl, name, sym }) => {
  const capName = `${name[0].toUpperCase()}${name.slice(1)}`;

  return (
    <div className="w-1/3 flex items-center space-x-3">
      <div className="relative w-8 h-8">
        <Image src={imageUrl} width={100} height={100} alt={`${name} logo`} />
      </div>
      <div className="flex flex-col items-start gap-1 md:flex-row md:items-baseline md:gap-3">
        <p className="text-white">{capName}</p>
        <p className="text-gray-400 text-xs">{sym}</p>
      </div>
    </div>
  );
};

export default CryptoSymName;
