import Logo from '../components/logo/Logo';

const SignUp = () => {
    return (
        <>
            <main className="flex flex-col md:flex-row-reverse md:h-screen">
                <section className="z-10 flex items-start w-full px-4 mx-auto md:px-0 md:items-center md:w-1/3">
                    <div className="bg-bgblack flex flex-row items-center w-full max-w-sm py-4 mx-auto md:mx-0 my-auto min-w-min relative md:-left-2.5 pt-4 md:py-4 transform origin-left">
                        <div className="py-4">
                            <Logo />
                        </div>
                    </div>
                </section>
                <section className="justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r md:border-gray-600">
                    <div className="w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12">
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
                        <div className="my-12">
                            <form action="/sign-up">
                                <div className="flex flex-col mb-3">
                                    <label
                                        htmlFor="user_mail"
                                        className="text-white inline-block mb-3 font-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        autoFocus
                                        required
                                        autoComplete="email"
                                        type="email"
                                        name="user[email]"
                                        className="text-white caret-white bg-bggray border-[1px] outline-none border-gray-600 py-1 px-4 rounded-md focus:bg-bgblack focus:border-[1px] focus:border-blue-400"
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label
                                        htmlFor="user_password"
                                        className="text-white inline-block mb-3 font-600"
                                    >
                                        Password
                                    </label>
                                    <input
                                        required
                                        autoComplete="password"
                                        type="password"
                                        name="user[password]"
                                        className="text-white caret-white bg-bggray border-[1px] outline-none border-gray-600 py-1 px-4 rounded-md focus:bg-bgblack focus:border-[1px] focus:border-blue-400"
                                    />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label
                                        htmlFor="user_password_confirmation"
                                        className="text-white inline-block mb-3 font-600"
                                    >
                                        Password confirmation
                                    </label>
                                    <input
                                        required
                                        autoComplete="new-password"
                                        type="password"
                                        name="user[password_confirmation]"
                                        className="text-white caret-white bg-bggray border-[1px] outline-none border-gray-600 py-1 px-4 rounded-md focus:bg-bgblack focus:border-[1px] focus:border-blue-400"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col mb-3">
                            <hr className="h-0 border-t mt-1 border-gray-600" />
                            <div className="-mt-2 text-sm text-center">
                                <span className="px-4 bg-bgblack text-white">
                                    OR
                                </span>
                            </div>
                        </div>
                        <h2 className="text-white">Github connexion here</h2>
                    </div>
                </section>
            </main>
        </>
    );
};

export default SignUp;
