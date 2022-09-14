import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Banner from '../components/sections/banner/Banner';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
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
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
