import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';
import Chart from '../../components/cryto/chart/Chart';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import GradientText from '../../components/utility/gradient-text/GradientText';
import { ToMillions } from '../../lib/utils';
import { HistoricalChart, SingleCoin } from '../../lib/utils/api';
import { NextPageWithLayout } from '../page';

const CoinPage: NextPageWithLayout = ({
    dataCoin,
    dataHistoCoin,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const description =
        `${dataCoin.description.en.split('. ').slice(0, 2).join('. ')}` + '.';

    const imageLarge = dataCoin.image.large;

    return (
        <>
            <div className="m-3 flex flex-col items-center md:flex-row">
                <div className="w-full flex justify-around md:w-2/3">
                    <div className="w-1/2 flex justify-around items-center pb-5">
                        <div className="w-[70px] h-[70px] relative mr-3">
                            <Image
                                src={imageLarge}
                                alt={dataCoin.id}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div>
                            <GradientText
                                words={dataCoin.symbol.toUpperCase()}
                            />
                            <p className="text-white text-lg">
                                {dataCoin.name}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center pb-3">
                        <GradientText words={`# ${dataCoin.market_cap_rank}`} />
                        <p className="text-white">Market cap</p>
                    </div>
                </div>
                <div className="w-ful flex-1 p-6 mb-6 bg-gradient-20 from-skin-first to-skin-third rounded-lg md:w-1/3">
                    <p className="text-black">{ReactHtmlParser(description)}</p>
                </div>
            </div>
            <div className="m-3 pb-8 border border-gray-600 rounded-lg flex justify-between items-center">
                <div className="p-3">
                    <p className="text-gray-500">Market Cap</p>
                    <p className="text-white">
                        {ToMillions(dataCoin.market_data.market_cap.eur)} eur
                    </p>
                </div>
                <div className="p-3">
                    <p className="text-gray-600">Current Price</p>
                    <p className="text-white">
                        {dataCoin.market_data.current_price.eur} eur
                    </p>
                </div>
                <div className="p-3">
                    <p className="text-gray-500">Market volume</p>
                    <p className="text-white">
                        {ToMillions(dataCoin.market_data.total_volume.eur)} eur
                    </p>
                </div>
            </div>
            <br />
            <Chart id={dataCoin.id} data={dataHistoCoin} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id: any = context.params?.coinId;
    const resCoin = await fetch(SingleCoin(id));
    const dataCoin = await resCoin.json();

    const resHistoCoin = await fetch(HistoricalChart(id));
    const dataHistoCoin = await resHistoCoin.json();

    console.log(dataHistoCoin);
    return {
        props: {
            dataCoin,
            dataHistoCoin,
        },
    };
};

export default CoinPage;

CoinPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
