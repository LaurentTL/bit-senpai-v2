export interface ISignUpForm {}

const SignUpForm: React.FC<ISignUpForm> = () => {
    return (
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
    );
};

export default SignUpForm;
