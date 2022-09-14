export interface IGradientText {
  words: string;
}

const GradientText: React.FC<IGradientText> = ({ words }) => {
  return (
    <span className="text-5xl text-transparent bg-clip-text font-bold from-skin-first via-skin-second to-skin-third bg-gradient-20 md:text-8xl">
      {words}
    </span>
  );
};

export default GradientText;
