import GradientText from '../../utility/gradient-text/GradientText';
// @ts-ignore
import bgVideo from '/public/static/videos/background-shape-chrome.webm';
export interface IBanner {
    firstLine: string;
    description: string;
}

const Banner: React.FC<IBanner> = ({ firstLine, description }) => {
    return (
        <div className="h-screen relative">
            <video
                src={bgVideo}
                className="h-screen object-cover"
                autoPlay
                loop
                muted
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 md:w-3/5">
                <h1 className="m-w-1/5 text-white text-3xl text-center md:text-5xl">
                    <GradientText words="BitSenpai" /> {firstLine}
                </h1>
                <p className="text-gray-600 text-center text-lg md:text-2xl">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Banner;
