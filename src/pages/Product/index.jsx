import PRODUCTS_FOR_PRODUCT_PAGE from "@/assets/mock-data/productPageData";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";

const ProductMainPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS_FOR_PRODUCT_PAGE.find((p) => p._id === productId);
  return (
    <section className="bg-white py-8">
      <div className="wrapper">
        {!product ? (
          <h1>Product not found</h1>
        ) : (
          <ProductPage product={product} />
        )}
      </div>
    </section>
  );
};

export default ProductMainPage;
