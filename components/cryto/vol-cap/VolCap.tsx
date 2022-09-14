export interface IVolCap {
  vol: string;
  cap: string;
}

const VolCap: React.FC<IVolCap> = ({ vol, cap }) => {
  return (
    <div className="text-white w-1/3 flex items-end flex-col md:flex-row">
      <p className="text-white md:w-1/2 md:text-end">{vol}</p>
      <p className="text-white md:w-1/2 md:text-end">{cap}</p>
    </div>
  );
};

export default VolCap;
