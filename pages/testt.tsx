import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Banner from '../components/sections/banner/Banner';
import { NextPageWithLayout } from './page';

const Test: NextPageWithLayout = () => {
    return (
        <>
            <Banner
                firstLine={'is a cryptocurrency tracker.'}
                description={
                    'BitSenpai will bring to crypto investors a automated dollar cost average investment plan with trading bots.'
                }
            />
        </>
    );
};

export default Test;

Test.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
