import PRODUCTS_FOR_PRODUCT_PAGE from "@/assets/mock-data/productPageData";
import { useParams, useSearchParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import { useEffect } from "react";
import KeyFeatures from "./tabs/KeyFeatures";
import Specifications from "./tabs/Specifications";
import CustomerReviews from "./tabs/CustomerReviews";
import TabPage from "./tabs";

// eslint-disable-next-line react-refresh/only-export-components
export const TABS = [
  {
    key: "key-features",
    Component: KeyFeatures,
  },
  {
    key: "specifications",
    Component: Specifications,
  },
  {
    key: "customer-reviews",
    Component: CustomerReviews,
  },
];

const ProductMainPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS_FOR_PRODUCT_PAGE.find((p) => p._id === productId);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const tabs = TABS.map((tab) => tab.key);
    if (!tabs.includes(searchParams.get("activeTab"))) {
      setSearchParams({ activeTab: "key-features" });
    }
  }, [searchParams, setSearchParams]);

  const changeTab = (tab) => {
    setSearchParams({ activeTab: tab });
  };

  return (
    <div className="flex flex-col gap-2 py-8">
      <section className="bg-white pb-8">
        <div className="wrapper">
          <ProductPage product={product} />
        </div>
      </section>
      <div className="flex justify-evenly py-2">
        {TABS.map(({ key }, index) => (
          <button
            onClick={() => changeTab(key)}
            key={index}
            className={`text-center text-sm sm:text-lg capitalize font-[600] ${
              searchParams.get("activeTab") === key
                ? "text-black"
                : "text-grey-dark"
            }`}
          >
            {key.split("-").join(" ")}
          </button>
        ))}
      </div>
      <TabPage product={product} />
    </div>
  );
};

export default ProductMainPage;
