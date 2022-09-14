import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import LogButton from '../../buttons/log/LogButton';
import SignButton from '../../buttons/sign/SignButton';
import Logo from '../../logo/Logo';
import HoverLink from '../../utility/hoverlink/HoverLink';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open == true ? setOpen(false) : setOpen(true);
  };

  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="w-full relative">
        <div className="px-3 py-4 flex justify-between items-center lg:w-full">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="hidden lg:flex ml-10">
            <HoverLink
              route="/tracker"
              title="Go to Tracker"
              hoverColor="blue"
            />
          </div>
          <div className="ml-auto flex items-center h-full gap-6">
            <div className="hidden md:block">
              <LogButton />
            </div>
            <div className="hidden md:block">
              <SignButton />
            </div>
            <div
              className="h-full w-10 cursor-pointer md:hidden"
              onClick={() => handleClick()}
            >
              <Bars3Icon className="h-full fill-current text-white m-auto" />
            </div>
          </div>
        </div>
        <div
          className={`${
            open ? 'flex' : 'hidden'
          } z-50 absolute inset-0 px-3 py-4 flex-col w-full h-screen backdrop-blur-lg bg-gray/30 lg:hidden`}
        >
          <div className="ml-auto h-10 w-10">
            <XMarkIcon
              className="h-full fill-current cursor-pointer text-white m-auto"
              onClick={() => handleClick()}
            />
          </div>
          <div className="mt-8 mb-3">
            <Logo />
          </div>
          <div className="flex items-center mt-3 mb-6 gap-6">
            <LogButton />
            <SignButton />
          </div>
          <HoverLink route="/tracker" title="Go to Tracker" hoverColor="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
