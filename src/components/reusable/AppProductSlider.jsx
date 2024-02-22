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
    <div className="py-[20px] flex overflow-x-auto gap-4">
      {items.map((item, index) => (
        <AppCard key={index} {...item} className="min-w-56" />
      ))}
    </div>
  );
};

export default AppProductSlider;
