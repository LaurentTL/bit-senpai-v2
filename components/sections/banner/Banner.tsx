import GradientText from '../../utility/gradient-text/GradientText';

export interface IBanner {
  firstLine: string;
  description: string;
}

const Banner: React.FC<IBanner> = ({ firstLine, description }) => {
  return (
    <div className="px-3 h-[calc(100vh-72px)] mx-auto flex flex-col justify-center items-center gap-10 md:w-3/5 md:min-h-[calc(100vh-(260px)]">
      <h1 className="m-w-1/5 text-white text-3xl text-center md:text-5xl">
        <GradientText words="BitSenpai" /> {firstLine}
      </h1>
      <p className="text-gray-600 text-center text-lg md:text-2xl">
        {description}
      </p>
    </div>
  );
};

export default Banner;
