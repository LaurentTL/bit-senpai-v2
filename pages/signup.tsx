import SecondaryLayout from '../components/layouts/secondary/SecondaryLayout';
import Banner from '../components/sections/banner/Banner';
import { NextPageWithLayout } from './page';

const SignUp: NextPageWithLayout = () => {
    return (
        <>
            <section className="flex flex-col items-center gap-y-5">
                <Banner
                    firstLine={'is a cryptocurrency tracker.'}
                    description={
                        'BitSenpai will bring to crypto investors a automated dollar cost average investment plan with trading bots.'
                    }
                />
            </section>
        </>
    );
};

export default SignUp;

SignUp.getLayout = (page) => {
    return <SecondaryLayout>{page}</SecondaryLayout>;
};
