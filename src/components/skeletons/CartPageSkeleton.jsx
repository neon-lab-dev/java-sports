import AppSkeleton from "./AppSkeleton";

const CartPageSkeleton = () => {
  return (
    <div className="bg-white p-6">
      <div className="wrapper flex flex-col xl:flex-row gap-4 max-w-[1400px]">
        <div className="flex flex-col gap-2 w-full">
          <AppSkeleton className="h-36 xl:h-52 w-full " />
          <AppSkeleton className="h-36 xl:h-52 w-full" />
        </div>
        <AppSkeleton className="h-52 xl:h-80 w-full xl:w-96" />
      </div>
    </div>
  );
};
export default CartPageSkeleton;
