import { ParseFloatToFixedTwo } from '../../../utils';

export interface ICryptoPrice {
  price: string;
  change24: string;
}

const CryptoPrice: React.FC<ICryptoPrice> = ({ price, change24 }) => {
  return (
    <div className="w-1/3 flex flex-col self-center md:flex-row">
      <p className="text-white w-1/2 self-center md:text-start md:self-start">
        {ParseFloatToFixedTwo(price)}
      </p>
      {parseInt(change24, 10) > 0 ? (
        <p className="text-green-600 self-center md:text-center md:w-1/2">
          {ParseFloatToFixedTwo(change24)} %
        </p>
      ) : (
        <p className="text-red-600 self-center md:text-center md:w-1/2">
          {ParseFloatToFixedTwo(change24)} %
        </p>
      )}
    </div>
  );
};

export default CryptoPrice;
