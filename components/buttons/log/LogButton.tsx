import { useContext } from 'react';
import AuthContext from '../../../state/auth/AuthContext';

export interface ILogButton extends React.ComponentPropsWithoutRef<'button'> {}

const LogButton: React.FC<ILogButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <div className="w-26 p-0.5 flex justify-center items-center from-blue-500 via-purple-600 to-pink-600 bg-gradient-20 rounded-full">
      <button
        onClick={authenticated ? logOut : login}
        className={`${className} w-26 text-center m-auto bg-black rounded-full px-5 py-1.5 text-white`}
        {...buttonProps}
      >
        {authenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LogButton;
