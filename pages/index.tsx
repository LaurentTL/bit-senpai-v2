import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Banner from '../components/sections/banner/Banner';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <section>
            <Banner
                firstLine={'is a cryptocurrency tracker.'}
                description={
                    'BitSenpai will bring to crypto investors a automated dollar cost average investment plan with trading bots.'
                }
            />
        </section>
    );
};

export default Home;

Home.getLayout = (page) => {
    return (
        <PrimaryLayout headerPosition="absolute inset-0 z-10">
            {page}
        </PrimaryLayout>
    );
};
