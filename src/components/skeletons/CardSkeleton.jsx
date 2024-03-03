import AppSkeleton from "./AppSkeleton";

const CardSkeleton = ({ className = "" }) => {
  return (
    <AppSkeleton
      className={`sm:min-w-[300px] snap-center xs:snap-start min-w-[230px] card-shadow rounded-xl h-[330px] sm:h-[350px] ${className}`}
    />
  );
};

export default CardSkeleton;
