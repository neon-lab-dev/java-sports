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
    <div className="py-[20px] flex overflow-x-auto gap-[36px]">
      {items.map((item, index) => (
        <AppCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AppProductSlider;
