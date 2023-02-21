import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import InfinitecoinList from '../components/cryto/infinitecoinList/InfinitecoinList';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Swr: NextPageWithLayout = ({
    initialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(initialData);

    return (
        <div>
            <InfinitecoinList
                queryKey="https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&sparkline=false"
                initialData={initialData}
            />
            ;
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const urlGeko =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=false';

    const res = await fetch(urlGeko);
    const data = await res.json();

    console.log(data);

    data?.error ? console.log(data.error) : null;

    return {
        props: {
            initialData: data,
        },
    };
};

export default Swr;

Swr.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
