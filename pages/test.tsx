import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Test: NextPageWithLayout = () => {
  return <div>Test Page</div>;
};

export default Test;

Test.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
