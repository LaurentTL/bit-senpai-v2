import OrDivider from '../components/divider/or-divider/OrDivider';
import SignUpForm from '../components/forms/SignUpForm/SignUpForm';
import AuthLayout from '../components/layouts/auth/AuthLayout';
import { NextPageWithLayout } from './page';

const SignUp: NextPageWithLayout = () => {
    return (
        <>
            <h2 className="text-xl text-white font-semibold md:text-2xl">
                Sign up
            </h2>
            <p className="text-white">
                Already have an account?&nbsp;
                <a className="font-medium" href="/sign-in">
                    Sign in
                </a>
                .
            </p>
            <SignUpForm />
            <OrDivider />
            <h2 className="text-white">Github connexion here</h2>
        </>
    );
};

export default SignUp;

SignUp.getLayout = (page) => {
    return <AuthLayout title="Sign up">{page}</AuthLayout>;
};
