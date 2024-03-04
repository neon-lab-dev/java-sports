import CardSkeleton from "../skeletons/CardSkeleton";
import AppCard from "./AppCard";

/**
 *
 * @param items: Array of items
 *  Each item should have the following properties:
 * - title: string
 * - price: string or number
 * - discounted: string or number
 * - image: Image
 */

const AppProductSlider = ({ items, isLoading }) => {
  return (
    <div className="py-[20px] px-1 snap-x snap-mandatory flex overflow-x-auto gap-4 w-full">
      {isLoading ? (
        <>
          <CardSkeleton className="min-w-56" />
          <CardSkeleton className="min-w-56" />
          <CardSkeleton className="min-w-56" />
          <CardSkeleton className="min-w-56" />
        </>
      ) : (
        items?.map((item, index) => (
          <AppCard key={index} product={item} className="min-w-56" />
        ))
      )}
    </div>
  );
};

export default AppProductSlider;
