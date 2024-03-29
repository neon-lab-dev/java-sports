import { useParams, useSearchParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import { useEffect } from "react";
import KeyFeatures from "./tabs/KeyFeatures";
import Specifications from "./tabs/Specifications";
import CustomerReviews from "./tabs/CustomerReviews";
import TabPage from "./tabs";
import { useQuery } from "@tanstack/react-query";
import AppLoading from "@/components/reusable/AppLoading";
import { getAProduct } from "@/api/products";

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
  const [searchParams, setSearchParams] = useSearchParams();

  const changeTab = (tab) => {
    setSearchParams({ activeTab: tab });
  };

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getAProduct(productId),
  });

  if (isLoading) return <AppLoading />;
  if (isError) return <h1>Product not found</h1>;

  return (
    <div className="flex flex-col gap-2 pb-8">
      <section className="bg-white pb-8">
        <div className="wrapper">
          {product.product ? (
            <ProductPage product={product.product} />
          ) : (
            <span>Product not found</span>
          )}
        </div>
      </section>
      <div className="flex justify-evenly py-2">
        {TABS.map(({ key }, index) => (
          <button
            onClick={() => changeTab(key)}
            key={index}
            className={`text-center text-sm sm:text-lg capitalize font-[600] ${
              !searchParams.get("activeTab") && index === 0
                ? "text-black"
                : searchParams.get("activeTab") === key
                  ? "text-black"
                  : "text-grey-dark"
            }`}
          >
            {key.split("-").join(" ")}
          </button>
        ))}
      </div>
      <TabPage product={product.product} />
    </div>
  );
};

export default ProductMainPage;
