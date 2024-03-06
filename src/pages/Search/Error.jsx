import nothingImg from "@/assets/images/nothing.svg";
const Error = ({text}) => {
  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-[400px]">
          <img src={nothingImg} className="h-36" />
          <h2 className="font-Jakarta font-500 text-lg sm:text-xl">{text}</h2>
        </div>
      </div>
    </div>
  );
};
export default Error;
