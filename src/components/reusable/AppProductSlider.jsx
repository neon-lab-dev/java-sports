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

const AppProductSlider = ({ items }) => {
  return (
    <div className="py-[20px] px-1 snap-x snap-mandatory flex overflow-x-auto gap-4 w-full">
      {items.map((item, index) => (
        <AppCard key={index} product={item} className="min-w-56" />
      ))}
    </div>
  );
};

export default AppProductSlider;