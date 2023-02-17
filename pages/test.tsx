import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Modal from '../components/modals/Modal';
import { NextPageWithLayout } from './page';

const Test: NextPageWithLayout = () => {
  return (
    <>
      <button className="bg-white">Test Modal</button>
      <div className="w-screen h-screen flex justify-center items-center">
        <Modal title="Not Available !" message="We work on this feature." />
      </div>
    </>
  );
};

export default Test;

Test.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
