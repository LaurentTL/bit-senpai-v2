import toastMessage from '../../../lib/utils/toastMessage';

export interface ISignButton {}

const SignButton: React.FC<ISignButton> = () => {
    return (
        <button>
            <a
                onClick={() => toastMessage('unavailable')}
                className="rounded-full w-24 py-1.5 block text-center from-blue-500 via-purple-600 to-pink-600 bg-gradient-20 text-white"
            >
                Sign up
            </a>
        </button>
    );
};

export default SignButton;
