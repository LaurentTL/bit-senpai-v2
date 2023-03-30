export interface IOrDivider {}

const OrDivider: React.FC<IOrDivider> = () => {
    return (
        <div className="flex flex-col mb-3">
            <hr className="h-0 border-t mt-1 border-gray-600" />
            <div className="-mt-2 text-sm text-center">
                <span className="px-4 bg-bgblack text-white">OR</span>
            </div>
        </div>
    );
};

export default OrDivider;
