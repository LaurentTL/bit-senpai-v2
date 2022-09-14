import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import CryptoPrice from '../../components/cryto/crypto-price/CryptoPrice';
import CryptoSymName from '../../components/cryto/crypto-sym-name/CryptoSymName';
import VolCap from '../../components/cryto/vol-cap/VolCap';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { ToMillions } from '../../utils';
import { NextPageWithLayout } from '../page';

const Tracker: NextPageWithLayout = ({
  coinsGeko,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [search, setSearch] = useState('');

  let handleSearch = (searchValue: any) => {
    setSearch(searchValue);
    console.log(search);
  };

  return (
    <div className="px-6 mx-auto mb-8 text-white w-full flex flex-col justify-start lg:w-2/3 md:mb-16">
      <div className="w-full relative my-6 group">
        <div className="w-full absolute -inset-0.5 from-skin-first via-skin-second to-skin-third bg-gradient-20 rounded-lg blur opacity-75 group-hover:opacity-100"></div>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full relative px-7 py-4 bg-black rounded-lg leading-none flex items-center outline-none"
          placeholder="Search for a coin..."
        />
      </div>
      <div className="px-6 mb-5 py-3 flex w-full h-14 items-center bg-white bg-opacity-5 rounded-lg">
        <p className="w-1/3 text-gray-500 font-light md:w-1/3">Asset</p>
        <div className="flex flex-1 justify-around md:w-3/4">
          <div className="w-1/2 flex flex-col self-center md:flex-row md:flex-1">
            <p className="w-full text-gray-500 font-light text-center md:text-start">
              Price
            </p>
            <p className="w-full text-gray-500 font-light text-center">
              24h variation
            </p>
          </div>
          <div className="w-1/2 flex flex-col self-center md:flex-row md:flex-1">
            <p className="w-full text-gray-500 font-light text-end">Cap</p>
            <p className="w-full text-gray-500 font-light text-end">Vol</p>
          </div>
        </div>
      </div>
      {coinsGeko
        .filter((val: any) => {
          if (search == '') {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((coin: any) => {
          return (
            <div
              key={coin.id}
              className="w-full py-3 border-b border-gray-100 border-opacity-25  duration-100 hover:scale-105"
            >
              <Link as={`/tracker/${coin.id}`} href="/[traker]/[coinId]">
                <a className="w-full h-full flex flex-1 justify-between items-center">
                  <CryptoSymName
                    imageUrl={coin.image.small}
                    name={coin.symbol.toUpperCase()}
                    sym={coin.name}
                  />
                  <CryptoPrice
                    price={coin.market_data.current_price['eur']}
                    change24={coin.market_data.price_change_percentage_24h}
                  />
                  <VolCap
                    vol={ToMillions(coin.market_data.total_volume['eur'])}
                    cap={ToMillions(coin.market_data.market_cap['eur'])}
                  />
                </a>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const urlGeko = 'https://api.coingecko.com/api/v3/coins';

  const res = await fetch(urlGeko);
  const data = await res.json();

  data?.error ? console.log(data.error) : null;

  return {
    props: {
      coinsGeko: data,
    },
  };
};

export default Tracker;

Tracker.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
