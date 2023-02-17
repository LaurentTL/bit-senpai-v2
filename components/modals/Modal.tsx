import { XMarkIcon } from '@heroicons/react/24/solid';

export interface IModal {
  title: string;
  message: string;
}

const Modal: React.FC<IModal> = ({ title, message }) => {
  return (
    <div className="w-96 p-0.5 from-blue-500 via-purple-600 to-pink-600 bg-gradient-20 rounded-lg">
      <div className="w-full rounded-lg h-fit flex flex-col gap-6 justify-center p-8 relative bg-black">
        <h2 className="text-white text-center">{title}</h2>
        <p className="text-white text-center">{message}</p>
        <XMarkIcon
          className="w-8 h-8 absolute top-2 right-2 text-white cursor-pointer"
          onClick={console.log}
        />
      </div>
    </div>
  );
};

export default Modal;
