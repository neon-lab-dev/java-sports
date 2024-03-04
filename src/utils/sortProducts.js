const sortProducts = (products, sortBy) => {
  if (!products || !products.length || !sortBy) return products;
  if (sortBy === "Low to High price") {
    return products.sort((a, b) => a.discountedprice - b.discountedprice);
  }
  if (sortBy === "High to low price") {
    return products.sort((a, b) => b.discountedprice - a.discountedprice);
  }
  return products;
};

export default sortProducts;
